import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from "@angular/material/snack-bar";

@Injectable({
    providedIn: 'root'
})
export class MessengerService {


    // queue: string[];

    constructor(
        private snackbar: MatSnackBar
    ) {
        // this.queue = [];
    }


    send(message: string, action: string | undefined, config: MatSnackBarConfig) {
        this.snackbar.open(message, action, config)
    }




}
