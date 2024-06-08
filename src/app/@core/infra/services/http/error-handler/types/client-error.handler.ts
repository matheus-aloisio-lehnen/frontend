import { inject } from "@angular/core";
import { HttpErrorResponse } from "@angular/common/http";

import { BaseErrorHandler } from "../base/error-handler.base";
import { AuthService } from "../../../../../application/auth/service/auth.service";

export class ClientErrorHandler extends BaseErrorHandler {
    handle(error: HttpErrorResponse): void {
        const authService = inject(AuthService);
        const message = error.error.message || 'Ops ocorreu um erro do lado de cá!';
        this.showErrorMessage(message);

        const unauthorized = error.status == 401;
        if(unauthorized) {
            authService.logout();
        }
    }
}
