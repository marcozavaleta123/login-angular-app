import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';

import { InicioRoutingModule } from './inicio-routing.module';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    InicioRoutingModule
  ]
})

export class InicioModule {
}
