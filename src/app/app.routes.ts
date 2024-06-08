import { Routes } from '@angular/router';
import { RouteList } from "./@core/domain/enum/route-list.enum";
import { authGuard } from "./@core/infra/security/guards/auth/auth.guard";
import { PageNotFoundComponent } from "./@core/application/page-not-found/page-not-found.component";

export const routes: Routes = [
    { path: '', redirectTo: RouteList.auth, pathMatch: 'full' },
    { path: RouteList.home, loadChildren: () => import('./@core/application/home/home.routes').then(m => m.HOME_ROUTES) },
    { path: RouteList.auth, loadChildren: () => import('./@core/application/auth/auth.routes').then(m => m.AUTH_ROUTES) },
    { path: RouteList.user, loadChildren: () => import('./@core/application/user/user.routes').then(m => m.USER_ROUTES), canActivate: [authGuard] },
    { path: RouteList.wildCard, component: PageNotFoundComponent },
];