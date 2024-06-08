import { HttpInterceptorFn } from '@angular/common/http';
import { LocalStorage } from "../../store/storage/local/local.storage";
import { inject } from "@angular/core";
import { StorageKeys } from "../../../domain/enum/storage-keys.enum";

export const authInterceptor: HttpInterceptorFn = (req, next) => {
    const localStorage = inject(LocalStorage);
    const auth = localStorage.get(StorageKeys.auth);

    if (auth.token) {
        req = req.clone({setHeaders: { Authorization: `Bearer ${auth.token}`}})
    }

    return next(req);
};
