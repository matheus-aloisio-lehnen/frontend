import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { environment } from "../../../../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class CryptoService {

    private readonly iv: CryptoJS.lib.WordArray;
    private readonly key: CryptoJS.lib.WordArray;


    constructor() {
        this.iv = CryptoJS.lib.WordArray.random(16);
        this.key = CryptoJS.enc.Base64.parse(environment.cryptoKey);
    }

    encrypt(text: string): string {
        const encrypted = CryptoJS.AES.encrypt(text, this.key, { iv: this.iv, mode: CryptoJS.mode.CTR, padding: CryptoJS.pad.Pkcs7 });
        const ivBase64 = this.iv.toString(CryptoJS.enc.Base64);
        const encryptedText = encrypted.ciphertext.toString(CryptoJS.enc.Base64);
        return `${ivBase64}:${encryptedText}`;
    }

    decrypt(encryptedText: string): string {
        const parts = encryptedText.split(':');
        const iv = CryptoJS.enc.Base64.parse(parts[0]);
        const ciphertext = CryptoJS.enc.Base64.parse(parts[1]);

        const decrypted = CryptoJS.AES.decrypt({ ciphertext: ciphertext, salt: '' } as any, this.key, { iv: iv, mode: CryptoJS.mode.CTR, padding: CryptoJS.pad.Pkcs7 });
        return decrypted.toString(CryptoJS.enc.Utf8);
    }

}
