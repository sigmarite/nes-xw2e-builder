import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route, extract } from '@app/core';
import { ImperialComponent } from './imperial.component';

const routes: Routes = Route.withShell([
  { path: '', redirectTo: '/imperial', pathMatch: 'full' },
  { path: 'imperial', component: ImperialComponent, data: { title: extract('Imperial') } }
]);

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class HomeRoutingModule { }
