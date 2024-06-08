import {  Injectable } from '@angular/core';
import { HttpErrorResponse } from "@angular/common/http";

import { SNACKBAR } from "../../../configs/mat-snackbar.config";
import { BaseErrorHandler } from "./base/error-handler.base";
import { NetworkErrorHandler } from "./types/network-error.handler";
import { ClientErrorHandler } from "./types/client-error.handler";
import { ServerErrorHandler } from "./types/server-error.handler";
import { MessengerService } from "../../messenger/messenger.service";

@Injectable({
    providedIn: 'root'
})
export class ErrorHandlerService {

    private readonly errorHandlers: { [key: number]: BaseErrorHandler };

    constructor(private messenger: MessengerService) {
        this.errorHandlers = {
            0: new NetworkErrorHandler(this.messenger),
            400: new ClientErrorHandler(this.messenger),
            401: new ClientErrorHandler(this.messenger),
            403: new ClientErrorHandler(this.messenger),
            404: new ClientErrorHandler(this.messenger),
            500: new ServerErrorHandler(this.messenger),
            503: new ServerErrorHandler(this.messenger),
        };
    }

    handleError(error: HttpErrorResponse): void {
        const handler = this.errorHandlers[error.status];
        if (handler) {
            handler.handle(error);
        } else {
            console.log('Ops! Ocorreu um erro desconhecido: ', error);
            this.messenger.send('Ops! Ocorreu um erro desconhecido', undefined, SNACKBAR.error);
        }
    }
}
