import { FormGroup } from "@angular/forms";

export interface ForgotPasswordDto {
    email: string,
}

export const forgotPasswordFactory = (form: FormGroup): ForgotPasswordDto => {
    return {
        email: form.get('email')?.value,
    }
}
