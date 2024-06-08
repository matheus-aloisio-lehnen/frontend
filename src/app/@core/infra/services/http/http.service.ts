import { Injectable } from '@angular/core';

import { SignInDto } from "../../../domain/dto/auth/sign-in/sign-in.dto";
import { environment } from "../../../../../environments/environment";
import { Loading } from "../../../domain/enum/loading.enum";
import { CreateUserDto } from "../../../domain/dto/user/create/create-user.dto";
import { HttpAdapter } from "./adapter/http.adapter";
import { User } from "../../../domain/model/user";
import { Result } from "../../../domain/type/result.type";
import { ResetPassword } from "../../../domain/model/reset-password";
import { ChangePasswordDto } from "../../../domain/dto/auth/reset-password/change-password.dto";
import { Observable } from "rxjs";
import { ForgotPasswordDto } from "../../../domain/dto/auth/reset-password/forgot-password.dto";
import { Auth } from "../../../domain/model/auth";


@Injectable({
    providedIn: 'root'
})
export class HttpService extends HttpAdapter {


    async signIn(signInDto: SignInDto): Promise<Auth | boolean> {
        const url: string = `${ environment.url }/auth/sign-in`;
        const result = await this.sendAsync<Result<Auth | boolean>>('post', url, signInDto, Loading.signIn);
        return result.data;
    }

    async signUp(createUserDto: CreateUserDto): Promise<User | boolean> {
        const url: string = `${ environment.url }/user`;
        const result = await this.sendAsync<Result<User | boolean>>('post', url, createUserDto, Loading.signUp);
        return result.data;
    }

    async forgotPassword(forgotPasswordDto: ForgotPasswordDto): Promise<Result<boolean>> {
        const url: string = `${ environment.url }/auth/forgot-password`;
        return await this.sendAsync('post', url, forgotPasswordDto, Loading.forgotPassword);
    }

    hasValidResetPassword(id: string): Observable<Result<ResetPassword>> {
        const url: string = `${ environment.url }/auth/has-valid-reset-password/${id}`;
        return this.send<Result<ResetPassword>>('get', url, null, Loading.hasValidResetPassword);
    }

    async changePassword(resetPasswordId: string, changePasswordDto: ChangePasswordDto): Promise<Result<boolean>> {
        const url: string = `${ environment.url }/auth/change-password/${resetPasswordId}`;
        return this.sendAsync<Result<boolean>>('put', url, changePasswordDto, Loading.changePassword);
    }

}
