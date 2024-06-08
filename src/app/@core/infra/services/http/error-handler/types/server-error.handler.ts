import { BaseErrorHandler } from "../base/error-handler.base";
import { HttpErrorResponse } from "@angular/common/http";

export class ServerErrorHandler extends BaseErrorHandler {
    handle(error: HttpErrorResponse): void {
        console.log('Server error:', error);
        this.showErrorMessage('Ops! Ocorreu um problema do nosso lado. Estamos trabalhando para corrigir!');
    }
}
