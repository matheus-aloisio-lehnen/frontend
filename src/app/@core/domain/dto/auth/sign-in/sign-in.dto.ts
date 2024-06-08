import { FormGroup } from "@angular/forms";

export interface SignInDto {
    email: string;
    password: string;
}

export const signInDtoFactory = (form: FormGroup): SignInDto => {
    return {
        email: form.get('email')?.value,
        password: form.get('password')?.value,
    }
}
