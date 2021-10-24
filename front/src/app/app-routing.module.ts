import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CallbackComponent} from "./auth/callback.component";

const routes: Routes = [
  { path: 'callback', component: CallbackComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
