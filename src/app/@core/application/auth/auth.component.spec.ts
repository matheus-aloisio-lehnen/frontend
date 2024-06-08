import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AuthComponent } from './auth.component';
import { ActivatedRoute } from "@angular/router";
import { MockStore, provideMockStore } from "@ngrx/store/testing";
import { of } from "rxjs";

describe('AuthComponent', () => {
    let component: AuthComponent;
    let fixture: ComponentFixture<AuthComponent>;
    let store: MockStore;
    const initialState = { isDarkMode: false };

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [
                IonicModule.forRoot(),
                BrowserAnimationsModule,
                AuthComponent
            ],
            providers: [
                provideMockStore({ initialState }),
                { provide: ActivatedRoute, useValue: { snapshot: { params: { context: 'sign-in' } } } }
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(AuthComponent);
        component = fixture.componentInstance;
        store = TestBed.inject(MockStore);
        component.isDarkMode$ = of(initialState.isDarkMode);
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
