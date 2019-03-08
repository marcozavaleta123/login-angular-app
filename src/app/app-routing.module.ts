import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login/login.component';
import { PanelComponent } from './inicio/panel/panel.component';

const rutas: Routes = [
  { path: '', component: LoginComponent },

   { path: 'login',
     component: LoginComponent
   },

   { path: 'inicio',
     component: PanelComponent
   },
];

@NgModule({
    imports: [RouterModule.forRoot(rutas, { useHash: true })],
    exports: [RouterModule]
})

export class AppRoutingModule {

}