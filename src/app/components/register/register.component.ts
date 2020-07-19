import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  exform: FormGroup;
  
  constructor() { }

  ngOnInit(): void {
    this.exform = new FormGroup({
      'name' : new FormControl(null, Validators.required),
      'email' : new FormControl(null, [Validators.required, Validators.email]),
  
    });
    }
  
    clicksub() {
      console.log(this.exform.value);
      this.exform.reset();
    }
    get name() {
      return this.exform.get('name');
    }
    get email() {
      return this.exform.get('email');
    }
  
  
}
