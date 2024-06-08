import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { provideStore } from "@ngrx/store";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { ForgotPasswordComponent } from './forgot-password.component';

describe('ResetPasswordComponent', () => {
    let component: ForgotPasswordComponent;
    let fixture: ComponentFixture<ForgotPasswordComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [
                IonicModule.forRoot(),
                BrowserAnimationsModule,
                ForgotPasswordComponent
            ],
            providers: [
                provideStore(),
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(ForgotPasswordComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
