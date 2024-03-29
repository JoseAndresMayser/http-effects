import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {UserListComponent} from "./users/user-list/user-list.component";
import {UserDetailComponent} from "./users/user-detail/user-detail.component";

const routes: Routes = [
  {
    path: 'home',
    component: UserListComponent
  },
  {
    path: 'user/:id',
    component: UserDetailComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
