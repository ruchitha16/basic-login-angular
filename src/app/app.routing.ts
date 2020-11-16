import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { AuthGuard } from './_auth/guards/auth.guard';

import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ItemAddEditComponent } from './items/item-add-edit/item-add-edit.component';
import { ItemEditComponent } from './items/item-edit/item-edit.component';
import { ItemsListComponent } from './items/items-list/items-list.component';
import { ItemsListItemComponent } from './items/items-list-item/items-list-item.component';

/*
* Routing for the items feature are stored in the items module file
*/

const routes: Routes = [

    { path: 'dashboard', component: DashboardComponent , canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'logout', component: LogoutComponent },
    {path:'add',component:ItemAddEditComponent},
    {path:'edit',component:ItemEditComponent},
    {path:'view',component:ItemsListComponent},
    {path:'delete',component:ItemsListItemComponent},
    { path: '**', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: '',  redirectTo: '/dashboard', pathMatch: 'full' }, // catch all route

];
export const routingModule: ModuleWithProviders = RouterModule.forRoot(routes);
