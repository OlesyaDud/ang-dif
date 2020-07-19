import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  exform: FormGroup; 
  names:string;
  emails:string;
  phones:string;
  
  constructor(private userServ: UserService) { }

  ngOnInit(): void {
    this.exform = new FormGroup({
      'name' : new FormControl(null, Validators.required),
      'email' : new FormControl(null, [Validators.required, Validators.email]),
      'phone' : new FormControl(
        null,
        [
          Validators.required,
          Validators.pattern('^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*$')
        ]),
      'message' : new FormControl(null, [Validators.required, Validators.minLength(7)])
    });
    }
  
    clicksub(){
      console.log(this.exform.value);
      this.names = this.exform.value.name;
      this.emails = this.exform.value.email;
      this.phones = this.exform.value.phone;
       // sending the  value to server for login verificaion
     const url =  'website/adminlogin';
     const param = new FormData();
     param.append('name', this.names);
     param.append('phone', this.phones);
     param.append('email',this.emails);
     this.userServ.addContact(param).subscribe((data: any) => {
       console.log(data.name);
       });
    }
  
    get name() {
      return this.exform.get('name');
    }
    get email() {
      return this.exform.get('email');
    }
    get phone() {
      return this.exform.get('phone');
    }
    get message() {
      return this.exform.get('message');
    }}
  
