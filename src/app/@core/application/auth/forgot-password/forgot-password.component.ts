import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IonicModule } from "@ionic/angular";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInput } from "@angular/material/input";
import { Router, RouterLink } from "@angular/router";

import { AuthService } from "../service/auth.service";
import { ErrorMessengerUtil } from "../../../infra/utils/form/messenger/error-messenger.util";
import { RouteList } from "../../../domain/enum/route-list.enum";
import { ForgotPasswordDto, forgotPasswordFactory } from "../../../domain/dto/auth/reset-password/forgot-password.dto";

@Component({
    selector: 'app-forgot-password',
    templateUrl: './forgot-password.component.html',
    styleUrls: [ './forgot-password.component.scss' ],
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [ AuthService ],
    imports: [
        IonicModule,
        MatCardModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatIconModule,
        MatButtonModule,
        MatInput,
        RouterLink
    ]
})
export class ForgotPasswordComponent extends ErrorMessengerUtil {

    protected readonly RouteList: typeof RouteList;
    form: FormGroup;
    emailNotReceived: boolean;

    constructor(
        private authService: AuthService,
        private formBuilder: FormBuilder,
        private router: Router
    ) {
        super();
        this.emailNotReceived = false;
        this.RouteList = RouteList;
        this.form = this.formBuilder.group({
            email: [ '', [ Validators.required, Validators.email ] ],
        })
    }

    async forgotPassword() {
        if (this.form.invalid) {
            return this.form.markAllAsTouched();
        }
        const forgotPasswordDto: ForgotPasswordDto = forgotPasswordFactory(this.form);
        const emailSended = await this.authService.forgotPassword(forgotPasswordDto);
        if (!emailSended) {
            return this.form.reset();
        }
        const to = [ `/${ RouteList.auth }/${ RouteList.signIn }` ];
        return this.router.navigate(to);
    }

    get email() {
        return this.form.get('email');
    }

}
