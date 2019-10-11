import { Component, OnInit , ViewChild} from '@angular/core';
import { User } from 'src/app/models/User';
import { FormsModule } from '@angular/forms';
import { Applicant } from 'src/app/models/Applicant';

@Component({
  selector: 'app-form-chalich',
  templateUrl: './form-chalich.component.html',
  styleUrls: ['./form-chalich.component.css']
})
export class FormChalichComponent implements OnInit {
  aplcnt: Applicant;
  @ViewChild('userForm' , { static : false}) form : any;
  constructor() {
    this.aplcnt = new Applicant();
    this.aplcnt.id = 0;
    this.aplcnt.userName = '';
    this.aplcnt.email = '';
  }

  ngOnInit() {}
  

  onSubmit({value, valid } : { value : Applicant, valid : boolean}) {
    console.log(value.userName);
  }
}
