import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LetDirective } from "@ngrx/component";
import { NgOptimizedImage } from "@angular/common";
import { BaseComponent } from "../shared/base/base.component";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { AppState } from "../../infra/store/ngrx/state/app.state";
import { Loading } from "../../domain/enum/loading.enum";
import { RouteList } from "../../domain/enum/route-list.enum";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { Router, RouterModule } from "@angular/router";
import { MatIconModule } from "@angular/material/icon";

@Component({
    selector: 'app-page-not-found',
    templateUrl: './page-not-found.component.html',
    styleUrls: [ './page-not-found.component.scss' ],
    standalone: true,
    imports: [
        MatCardModule,
        MatButtonModule,
        RouterModule,
        MatIconModule,
        LetDirective,
        NgOptimizedImage
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageNotFoundComponent extends BaseComponent {

    protected readonly RouteList: typeof RouteList;
    loading$: Observable<boolean>;

    constructor(
        store: Store<AppState>,
        router: Router
    ) {
        super(store, router);
        this.loading$ = this.store.select((appState: AppState) => {
            return appState.loading[Loading.signIn] || appState.loading[Loading.signUp]
        });
        this.RouteList = RouteList;
    }

}
