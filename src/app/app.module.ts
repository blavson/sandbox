import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApplicantComponent } from './components/applicant/applicant.component';
import { ApplicantService } from './services/applicant.service';
import { HttpClientModule } from '@angular/common/http';
import { FormChalichComponent } from './components/form-chalich/form-chalich.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, ApplicantComponent, FormChalichComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [ApplicantService],
  bootstrap: [AppComponent]
})
export class AppModule {}
