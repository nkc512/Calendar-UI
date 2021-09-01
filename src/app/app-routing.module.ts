import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllPlanComponent } from './all-plan/all-plan.component';
import { TodayComponent } from './today/today.component';

const routes: Routes = [
  { path: '', component: TodayComponent},
  { path: 'today', component: TodayComponent},
  { path: 'all', component:AllPlanComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
