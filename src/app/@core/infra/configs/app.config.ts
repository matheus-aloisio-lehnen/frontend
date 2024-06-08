import { ApplicationConfig, LOCALE_ID, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";
import { MAT_DATE_LOCALE } from "@angular/material/core";
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from "@angular/material/form-field";
import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from "@angular/material/snack-bar";
import { MAT_RADIO_DEFAULT_OPTIONS } from "@angular/material/radio";
import { MatPaginatorIntl } from "@angular/material/paginator";
import { provideEffects } from "@ngrx/effects";
import { provideStore } from "@ngrx/store";

import routeConfig from '../../../app.routes';
import { MAT_RADIO_CONFIG } from "./mat-radio.config";
import { MAT_FORM_FIELD_CONFIG } from "./mat-form-field.config";
import { reducers } from "../store/ngrx/reducer";
import { BR_PAGINATOR } from "./br-paginator.congif";
import { MAT_SNACKBAR_CONFIG } from "./mat-snackbar.config";

export const appConfig: ApplicationConfig = {
    providers: [
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideRouter(routeConfig),
        provideAnimationsAsync(),
        provideStore(reducers),
        provideEffects(),
        { provide: LOCALE_ID, useValue: 'pt-BR' },
        { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
        { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: MAT_FORM_FIELD_CONFIG },
        { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: MAT_SNACKBAR_CONFIG },
        { provide: MAT_RADIO_DEFAULT_OPTIONS, useValue: MAT_RADIO_CONFIG, },
        { provide: MatPaginatorIntl, useValue: BR_PAGINATOR },
    ]
};
