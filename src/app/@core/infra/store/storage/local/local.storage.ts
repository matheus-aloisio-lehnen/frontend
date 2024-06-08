import { Injectable } from '@angular/core';
import { CryptoService } from "../../../security/crypto/crypto.service";
import { BaseStorage } from "../base/base.storage";


@Injectable({
    providedIn: 'root'
})
export class LocalStorage extends BaseStorage {

    constructor(
        cryptoService: CryptoService,
    ) {
        super(cryptoService)
    }

}
