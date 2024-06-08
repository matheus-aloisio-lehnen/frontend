import { AbstractControl, ValidatorFn } from "@angular/forms";

export const passwordMatchValidator: ValidatorFn = (control: AbstractControl) => {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');

    if(!password || !confirmPassword) {
        return null
    }

    if(password?.value !== confirmPassword?.value) {
        confirmPassword.setErrors({ passwordNotMatch: true } )
    } else {
        confirmPassword.setErrors(null)
    }

    return null;
}
