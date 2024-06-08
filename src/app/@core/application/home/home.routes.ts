import { Routes } from "@angular/router";
import { RouteList } from "../../domain/enum/route-list.enum";
import { HomeComponent } from "./home.component";

export const HOME_ROUTES: Routes = [
    { path: RouteList.home, component: HomeComponent, },
];
