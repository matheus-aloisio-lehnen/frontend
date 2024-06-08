import { ChangeDetectionStrategy, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { LetDirective } from "@ngrx/component";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatDivider } from "@angular/material/divider";
import { MatFormFieldModule, } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { NgOptimizedImage } from "@angular/common";
import { MatStepper, MatStepperModule } from "@angular/material/stepper";
import { MatRadioModule } from "@angular/material/radio";
import { MatRippleModule } from "@angular/material/core";
import { NgxMaskDirective } from "ngx-mask";
import { Observable } from "rxjs";
import { MatProgressSpinner } from "@angular/material/progress-spinner";
import { Store } from "@ngrx/store";
import { RouterLink } from "@angular/router";

import { CreateUserDto, createUserDtoFactory } from "../../../domain/dto/user/create/create-user.dto";
import { Role } from "../../../domain/enum/role.enum";
import { scrollTo } from "../../../infra/utils/scroll/scroll.utils";
import { LegalStatus } from "../../../domain/enum/legal.status";
import { CEP_MASK, CNPJ_MASK, CPF_MASK, MOBILE_MASK } from "../../../infra/configs/mask.config";
import { MatDialog } from "@angular/material/dialog";
import { DIALOG_CONFIG } from "../../../infra/configs/dialog.config";
import { DialogBaseComponent } from "../../shared/dialogs/dialog-base/dialog-base.component";
import { ROLE_BUTTONS } from "../../../domain/constants/role-button.constant";
import { RoleButton } from "../../../domain/type/role.button";
import { Loading } from "../../../domain/enum/loading.enum";
import { AuthService } from "../service/auth.service";
import { AppState } from "../../../infra/store/ngrx/state/app.state";
import { ErrorMessengerUtil } from "../../../infra/utils/form/messenger/error-messenger.util";
import { RouteList } from "../../../domain/enum/route-list.enum";

@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: [ './sign-up.component.scss' ],
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [ AuthService, ],
    imports: [
        IonicModule,
        ReactiveFormsModule,
        LetDirective,
        MatButtonModule,
        MatCardModule,
        MatDivider,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        NgOptimizedImage,
        MatStepperModule,
        MatRippleModule,
        MatRadioModule,
        NgxMaskDirective,
        MatProgressSpinner,
        RouterLink,
    ]
})
export class SignUpComponent extends ErrorMessengerUtil implements OnDestroy {


    protected readonly ROLE_BUTTONS: RoleButton[];
    protected readonly CEP_MASK: string;
    protected readonly CNPJ_MASK: string;
    protected readonly CPF_MASK: string;
    protected readonly MOBILE_MASK: string;
    protected readonly Role: typeof Role;
    protected readonly LegalStatus: typeof LegalStatus;
    protected readonly RouteList: typeof RouteList;
    @ViewChild('form') form!: ElementRef;
    @ViewChild('stepper') stepper!: MatStepper;
    loading$: Observable<boolean>;
    hide: boolean;
    authForm: FormGroup;
    personalDataForm: FormGroup;
    addressForm: FormGroup;

    constructor(
        private authService: AuthService,
        private dialog: MatDialog,
        private formBuilder: FormBuilder,
        private store: Store<AppState>
    ) {
        super();
        this.ROLE_BUTTONS = ROLE_BUTTONS;
        this.CEP_MASK = CEP_MASK;
        this.CNPJ_MASK  = CNPJ_MASK;
        this.CPF_MASK = CPF_MASK;
        this.MOBILE_MASK = MOBILE_MASK;
        this.Role = Role;
        this.LegalStatus = LegalStatus;
        this.loading$ = this.store.select((appState: AppState) => appState.loading[Loading.signUp])
        this.RouteList = RouteList;
        this.hide = true;
        this.authForm = this.formBuilder.group({
            email: [ '', [ Validators.required, Validators.email ] ],
            password: [ '', Validators.required ],
            status: [ true ],
            role: [ '', Validators.required ],
        }, { updateOn: 'blur' })
        this.personalDataForm = this.formBuilder.group({
            name: [ '', Validators.required ],
            documentNumber: [ '', Validators.required ],
            mobile: [ '', Validators.required ],
            legalStatus: [ LegalStatus.NaturalPerson ],
        }, { updateOn: 'blur' })
        this.addressForm = this.formBuilder.group({
            zipCode: [ '', Validators.required ],
            street: [ '', Validators.required ],
            number: [ '', Validators.required ],
        }, { updateOn: 'blur' });

    }

    selectRole(role: Role) {
        this.role?.patchValue(role);
        setTimeout(() => scrollTo(this.form.nativeElement), 200)
    }

    async signUp() {
        if(await this.checkInvalidForm()) return;
        const createUserDto: CreateUserDto = createUserDtoFactory(this.authForm, this.personalDataForm, this.addressForm);
        await this.authService.signUp(createUserDto);
        this.stepper.selectedIndex = 0;
        this.email?.setErrors({ emailUsed: true })
    }

    get email() {
        return this.authForm.get('email');
    }

    get password() {
        return this.authForm.get('password');
    }

    get role() {
        return this.authForm.get('role');
    }

    get name() {
        return this.personalDataForm.get('name');
    }

    get documentNumber() {
        return this.personalDataForm.get('documentNumber');
    }

    get mobile() {
        return this.personalDataForm.get('mobile');
    }

    get legalStatus() {
        return this.personalDataForm.get('legalStatus');
    }

    get zipCode() {
        return this.addressForm.get('zipCode');
    }

    get street() {
        return this.addressForm.get('street');
    }

    get number() {
        return this.addressForm.get('number');
    }

    get documentNumberMask() {
        return this.legalStatus?.value === LegalStatus.NaturalPerson
            ? CPF_MASK
            : CNPJ_MASK
    }

    resetForm() {
        DIALOG_CONFIG.data = {
            title: 'Limpar formulário',
            content: '<p> Tem certeza que deseja limpar o formulário? </p>',
            actions: [
                { label: 'Não', action: () => {} },
                { label: 'Sim', action: () => {} },
            ]
        };
        this.dialog.open(DialogBaseComponent, DIALOG_CONFIG)
            .afterClosed()
            .subscribe(hasConfirmed => hasConfirmed && this.stepper.reset());
    }

    private async checkInvalidForm() {
        let hasInvalidForm = false;
        if(this.authForm.invalid) {
            this.authForm.markAllAsTouched();
            hasInvalidForm = true;
        }

        if(this.personalDataForm.invalid) {
            this.personalDataForm.markAllAsTouched();
            hasInvalidForm = true;
        }

        if(this.addressForm.invalid) {
            this.addressForm.markAllAsTouched();
            hasInvalidForm = true;
        }
        return hasInvalidForm;
    }

    private clearForms() {
        this.authForm.reset();
        this.personalDataForm.reset();
        this.addressForm.reset();
    }

    ngOnDestroy() {
        this.clearForms();
    }

}
