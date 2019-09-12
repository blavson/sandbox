import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApplicantComponent } from './components/applicant/applicant.component';
import { ApplicantService } from './services/applicant.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, ApplicantComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [ApplicantService],
  bootstrap: [AppComponent]
})
export class AppModule {}
