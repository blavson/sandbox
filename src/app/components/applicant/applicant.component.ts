import { Component, OnInit } from '@angular/core';
import { ApplicantService } from 'src/app/services/applicant.service';
import { Applicant } from 'src/app/models/Applicant';

@Component({
  selector: 'app-applicant',
  templateUrl: './applicant.component.html',
  styleUrls: ['./applicant.component.css']
})
export class ApplicantComponent implements OnInit {
  constructor(private applicantService: ApplicantService) {}
  applicants: Applicant[];

  ngOnInit() {
    this.getApplicants();
  }

  getApplicants() {
    this.applicantService.getApplicants().subscribe(applicants => {
      console.log('HELLLO');
      // this.applicants = applicants;
      console.log(applicants);
    });
  }
}
