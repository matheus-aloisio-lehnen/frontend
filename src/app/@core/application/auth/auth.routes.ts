import { Routes } from "@angular/router";
import { AuthComponent } from "./auth.component";
import { SignInComponent } from "./sign-in/sign-in.component";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { RouteList } from "../../domain/enum/route-list.enum";
import { ChangePasswordComponent } from "./change-password/change-password.component";
import { ForgotPasswordComponent } from "./forgot-password/forgot-password.component";

export const AUTH_ROUTES: Routes = [
    { path: '', redirectTo: RouteList.signIn, pathMatch: 'full' },
    {
        path: '',
        component: AuthComponent,
        children: [
            { path: RouteList.signIn, component: SignInComponent },
            { path: RouteList.signUp, component: SignUpComponent },
            { path: RouteList.forgotPassword, component: ForgotPasswordComponent },
            { path: RouteList.changePassword + '/:resetPasswordId', component: ChangePasswordComponent },
        ]
    },
];
