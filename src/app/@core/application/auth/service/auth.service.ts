import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";

import { SignInDto } from "../../../domain/dto/auth/sign-in/sign-in.dto";
import { CreateUserDto } from "../../../domain/dto/user/create/create-user.dto";
import { HttpService } from "../../../infra/services/http/http.service";
import { LocalStorage } from "../../../infra/store/storage/local/local.storage";
import { ChangePasswordDto } from "../../../domain/dto/auth/reset-password/change-password.dto";
import { Observable, of, switchMap, tap } from "rxjs";
import { Result } from "../../../domain/type/result.type";
import { ResetPassword } from "../../../domain/model/reset-password";
import { setUser } from "../../../infra/store/ngrx/actions/user.actions";
import { User } from "../../../domain/model/user";
import { ForgotPasswordDto } from "../../../domain/dto/auth/reset-password/forgot-password.dto";
import { RouteList } from "../../../domain/enum/route-list.enum";
import { Auth } from "../../../domain/model/auth";
import { StorageKeys } from "../../../domain/enum/storage-keys.enum";

@Injectable({
    providedIn: 'root'
})
export class AuthService {


    constructor(
        private http: HttpService,
        private localStorage: LocalStorage,
        private router: Router,
        private store: Store
    ) {
    }

    async signIn(signInDto: SignInDto) {
        const auth: Auth | boolean  = await this.http.signIn(signInDto);

        if(!auth || typeof auth === 'boolean') return;
        const user = auth.user;

        this.localStorage.set(StorageKeys.auth, auth);
        this.store.dispatch(setUser({ user: user }));
        const to = [ `${RouteList.user}}` ]
        await this.router.navigate(to);
    }

    async signUp(createUserDto: CreateUserDto): Promise<User | boolean> {
        const result = await this.http.signUp(createUserDto);
        if (!result) return false;
        return await this.router.navigate([ `/${RouteList.auth}/${RouteList.signIn}` ]);
    }

    async forgotPassword(forgotPasswordDto: ForgotPasswordDto): Promise<boolean> {
        const result = await this.http.forgotPassword(forgotPasswordDto);
        return result.data;
    }

    hasValidResetPassword(id: string): Observable<boolean> {
        return this.http.hasValidResetPassword(id)
            .pipe(
                switchMap((result: Result<ResetPassword>) => {
                    const isValid = result.data !== false;
                    return of(isValid)
                        .pipe(
                            tap((isValid: boolean) => {
                                const to = [`/${RouteList.auth}/${RouteList.forgotPassword}`];
                                return !isValid
                                    ? setTimeout(() => this.router.navigate(to), 1000)
                                    : this.store.dispatch(setUser({ user: result.data.user }))
                            }),
                        )
                })
            )
    }

    async changePassword(resetPasswordId: string, changePasswordDto: ChangePasswordDto) {
        const result = await this.http.changePassword(resetPasswordId, changePasswordDto);
        if(result.data) {
            const to = [`/${RouteList.auth}/${RouteList.signIn}`]
            setTimeout(() => this.router.navigate(to), 1000)
        } else {
            return false;
        }
        return result
    }


    logout() {
        // TODO To implement...
    }

    isTokenValid() {
        const auth = this.localStorage.get(StorageKeys.auth);
        return auth && auth.token;
    }
}
