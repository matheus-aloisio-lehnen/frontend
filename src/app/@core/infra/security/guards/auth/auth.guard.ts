import { CanActivateFn } from '@angular/router';
import { inject } from "@angular/core";
import { AuthService } from "../../../../application/auth/service/auth.service";

export const authGuard: CanActivateFn = (route, state) => {
    const authService = inject(AuthService);
    return authService.isTokenValid();
};
