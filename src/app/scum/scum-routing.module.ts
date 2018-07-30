import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route, extract } from '@app/core';
import {ScumComponent} from "@app/scum/scum.component";

const routes: Routes = Route.withShell([
  { path: 'scum', component: ScumComponent, data: { title: extract('Scum') } }
]);

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class HomeRoutingModule { }
