import { Injectable } from '@angular/core';
import { BaseStorage } from "../base/base.storage";
import { CryptoService } from "../../../security/crypto/crypto.service";



@Injectable({
    providedIn: 'root'
})
export class SessionStorage extends BaseStorage {

    constructor(
        cryptoService: CryptoService,
    ) {
        super(cryptoService, 'session')
    }

}
