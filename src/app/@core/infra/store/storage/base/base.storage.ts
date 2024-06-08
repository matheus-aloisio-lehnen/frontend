import { CryptoService } from "../../../security/crypto/crypto.service";

export class BaseStorage {

    protected storage: Storage;

    constructor(
        protected crypto: CryptoService,
        storageType: 'session' | 'local' = 'local',
    ) {
        this.storage = storageType === 'session' ? window.sessionStorage : window.localStorage;
    }

    set(key: string, value: any) {
        if (!this.storage) return;
        const eKey = this.crypto.encrypt(key);
        const eValue = this.crypto.encrypt(JSON.stringify(value));
        this.storage.setItem(eKey, eValue);
    }

    get(key: string) {
        if (!this.storage) return;
        const eKey = this.crypto.encrypt(key);
        const eValue = this.storage.getItem(eKey);
        if(!eValue) return;
        const value = this.crypto.decrypt(eValue);
        return JSON.parse(value);
    }

    remove(key: string) {
        if (!this.storage) return false;
        const eKey = this.crypto.encrypt(key);
        this.storage.removeItem(eKey);
        return true;
    }

    clear() {
        if (!this.storage) return;
        this.storage.clear();
        return true;
    }

}
