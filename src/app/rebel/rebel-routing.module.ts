import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route, extract } from '@app/core';
import {RebelComponent} from "@app/rebel/rebel.component";

const routes: Routes = Route.withShell([
  { path: 'rebel', component: RebelComponent, data: { title: extract('Rebel') } }
]);

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class HomeRoutingModule { }
