import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { DashboardComponent } from './dashboard.component';
import { FooterBarComponent } from './shared/components/footer-bar/footer-bar.component';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [DashboardComponent, NavbarComponent, FooterBarComponent, HomeComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
