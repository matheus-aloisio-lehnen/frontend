import { FormGroup } from "@angular/forms";

export interface ChangePasswordDto {
    id: number;
    password: string;
}

export const changePasswordDtoFactory = (form: FormGroup, id: number): ChangePasswordDto => {
    return {
        id: id,
        password: form.get('password')?.value
    }
}
