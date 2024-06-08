import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Observable, Subscription, tap } from "rxjs";
import { Store } from "@ngrx/store";
import { AsyncPipe } from "@angular/common";

import { AppState } from "./@core/infra/store/ngrx/interface/app.interface";
import {
    MatCard,
    MatCardActions,
    MatCardAvatar,
    MatCardContent,
    MatCardHeader,
    MatCardImage, MatCardSubtitle, MatCardTitle
} from "@angular/material/card";
import { MatButton } from "@angular/material/button";
import { registerAllIcons } from "./@core/infra/utils/icon/icon.utils";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        RouterModule,
        AsyncPipe,
        MatCard,
        MatButton,
        MatCardActions,
        MatCardAvatar,
        MatCardContent,
        MatCardHeader,
        MatCardImage,
        MatCardSubtitle,
        MatCardTitle
    ],
})
export class AppComponent implements OnInit, OnDestroy {

    title = 'frontend';
    isDarkMode$: Observable<boolean>;

    subscriptions$: Subscription[];

    constructor(
        private store: Store<AppState>,
    ) {
        this.isDarkMode$ = this.store.select((app: AppState) => app.isDarkMode)
            // .pipe(tap(result => console.log('oi', result)));
        this.subscriptions$ = [];
        registerAllIcons();
    }

    ngOnInit(): void {
        this.subscribeAll();
    }

    subscribeAll() {
        this.subscriptions$ = [
            // this.subscribeThemeChange(),
        ]
    }

    subscribeThemeChange() {
        // return this.configuracoesService.isDarkMode$
        //   .subscribe(isDarkMode => {
        //     this.isDarkMode = isDarkMode;
        //     this.getThemeConfig();
        //     // this.applyBodyColor()
        //   });

    }

    // @HostBinding('class')
    // get themeMode() {
    //     return this.isDarkMode
    //         ? 'dark-theme'
    //         : 'light-theme';
    // }


    ngOnDestroy(): void {
        this.subscriptions$.forEach(subscription => subscription.unsubscribe())
    }


}
