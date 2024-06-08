import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { Router, RouterLink, RouterOutlet } from "@angular/router";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { NgOptimizedImage } from "@angular/common";
import { LetDirective } from "@ngrx/component";
import { MatProgressSpinner } from "@angular/material/progress-spinner";

import { SignInComponent } from "./sign-in/sign-in.component";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { AppState } from "../../infra/store/ngrx/state/app.state";
import { BaseComponent } from "../shared/base/base.component";
import { Loading } from "../../domain/enum/loading.enum";
import { ForgotPasswordComponent } from "./forgot-password/forgot-password.component";

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: [ './auth.component.scss' ],
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        MatCardModule,
        MatButtonModule,
        MatIconModule,
        NgOptimizedImage,
        LetDirective,
        SignInComponent,
        ForgotPasswordComponent,
        SignUpComponent,
        MatProgressSpinner,
        RouterOutlet,
        RouterLink,
    ]
})
export class AuthComponent extends BaseComponent {

    loading$: Observable<boolean>;

    constructor(
        store: Store<AppState>,
        router: Router
    ) {
        super(store, router);
        this.loading$ = this.store.select((appState: AppState) => {
            return appState.loading[Loading.signIn] || appState.loading[Loading.signUp]
        });
    }


}
