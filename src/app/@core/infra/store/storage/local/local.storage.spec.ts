import { TestBed } from '@angular/core/testing';

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LocalStorage } from "./local.storage";

describe('LocalStorageService', () => {
    let service: LocalStorage;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                BrowserAnimationsModule
            ]
        });
        service = TestBed.inject(LocalStorage);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
