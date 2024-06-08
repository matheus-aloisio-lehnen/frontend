import { Routes } from "@angular/router";
import { RouteList } from "../../domain/enum/route-list.enum";
import { UserComponent } from "./user.component";

export const USER_ROUTES: Routes = [
    { path: RouteList.user, component: UserComponent, },
];
