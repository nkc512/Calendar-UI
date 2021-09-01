import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TodayComponent } from './today/today.component';
import { AllPlanComponent } from './all-plan/all-plan.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TodayComponent,
    AllPlanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
