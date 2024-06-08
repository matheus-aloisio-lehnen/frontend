import { MatSnackBarConfig } from "@angular/material/snack-bar";

export const MAT_SNACKBAR_CONFIG: MatSnackBarConfig = {
    duration: 8000,
    panelClass: [
        'bg-primary',
        'bg-success',
        'bg-info',
        'bg-warning',
        'bg-danger'
    ],
}
