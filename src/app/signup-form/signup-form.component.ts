import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl , Validators} from '@angular/forms';
import { UsernameValidators } from './username.validator';



@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
Form = new FormGroup({
  account : new FormGroup({
    name : new FormControl('',[
    Validators.required,
    Validators.minLength(3),
    UsernameValidators.cannotContainSpace,
    UsernameValidators.usernameTaken
    ]),
  password : new FormControl('',Validators.required)
  })
  
});

login(){
  this.Form.setErrors({
    invalidLogin:true
  });
  }

get name(){
  return this.Form.get('account.name');
}

}
