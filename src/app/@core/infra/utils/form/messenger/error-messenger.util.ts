import { FormError } from "../../../../domain/enum/form-error.enum";

export class ErrorMessengerUtil {

    getFormErrorMessage(control: any): string {

        if (control.errors) {
            for (const errorKey in control.errors) {
                if (control.hasError(errorKey)) {
                    return FormError[errorKey as keyof typeof FormError];
                }
            }
        }
        return '';
    }

}
