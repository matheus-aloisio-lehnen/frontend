import { TestBed } from '@angular/core/testing';

import { HttpAdapter } from './http.adapter';

describe('HttpAdapter', () => {
    let service: HttpAdapter;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(HttpAdapter);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
