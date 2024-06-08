import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from "@ngrx/store";
import { AppState } from "../../infra/store/ngrx/state/app.state";

import { BaseComponent } from "../shared/base/base.component";
import { Router, RouterOutlet } from "@angular/router";
import { LocalStorage } from "../../infra/store/storage/local/local.storage";
import { StorageKeys } from "../../domain/enum/storage-keys.enum";

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: [ './user.component.scss' ],
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        RouterOutlet
    ]
})
export class UserComponent extends BaseComponent {


    constructor(
        store: Store<AppState>,
        router: Router,
        private localStorage: LocalStorage
    ) {
        super(store, router);
        console.log(this.localStorage.get(StorageKeys.auth));
    }

}
