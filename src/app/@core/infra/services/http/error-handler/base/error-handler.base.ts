import { HttpErrorResponse } from '@angular/common/http';
import { SNACKBAR } from "../../../../configs/mat-snackbar.config";
import { MessengerService } from "../../../messenger/messenger.service";

export abstract class BaseErrorHandler {

    constructor(protected messenger: MessengerService) {}
    abstract handle(error: HttpErrorResponse): void;
    protected showErrorMessage(message: string): void {
        this.messenger.send(message, undefined, SNACKBAR.error);
    }
}
