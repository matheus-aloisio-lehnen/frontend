import { BaseErrorHandler } from "../base/error-handler.base";
import { HttpErrorResponse } from "@angular/common/http";

export class NetworkErrorHandler extends BaseErrorHandler {
    handle(error: HttpErrorResponse): void {
        console.log('Network error:', error);
        this.showErrorMessage('Desculpe, ocorreu um problema de conexão com o servidor. Estamos trabalhando para resolver isso o mais rápido possível. Por favor, tente novamente mais tarde.');
    }
}
