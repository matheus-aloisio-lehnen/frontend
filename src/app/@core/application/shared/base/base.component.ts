import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { Router } from "@angular/router";

import { AppState } from "../../../infra/store/ngrx/state/app.state";
import { toggleDarkMode } from "../../../infra/store/ngrx/actions/dark-mode.actions";
import { RouteList } from "../../../domain/enum/route-list.enum";

@Component({
    selector: 'app-base',
    templateUrl: './base.component.html',
    styleUrls: [ './base.component.scss' ],
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BaseComponent {

    isDarkMode$: Observable<boolean>;

    constructor(
        protected store: Store<AppState>,
        protected router: Router,
    ) {
        this.isDarkMode$ = this.store.select((appState: AppState) => appState.isDarkMode);
    }

    changeThemeMode(isDarkMode: boolean): void {
        this.store.dispatch(toggleDarkMode(isDarkMode));
    }

    get signInRoute() {
        return this.router.url.endsWith(RouteList.signIn);
    }

}
