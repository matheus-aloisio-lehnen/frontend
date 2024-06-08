import {TestBed} from '@angular/core/testing';

import {SessionStorage} from './session.storage';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

describe('SessionStorage', () => {
    let service: SessionStorage;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                BrowserAnimationsModule
            ]
        });
        service = TestBed.inject(SessionStorage);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
