import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplicantComponent } from './components/applicant/applicant.component';
import { FormChalichComponent } from './components/form-chalich/form-chalich.component';

const routes: Routes = [
  //  {
  //    path: 'applicant',
  //   component: ApplicantComponent
  // },
  { path: 'form', component: FormChalichComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
