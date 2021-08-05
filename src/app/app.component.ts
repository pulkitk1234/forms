import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { PasswordValidator } from './shared/password.validator';
import { forbiddenNameValidator } from './shared/user-name-validator';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  registrationForm!: FormGroup;


  get userName(){
    return this.registrationForm.get('userName');
  }

  get email(){
    return this.registrationForm.get('email');
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(){
    this.registrationForm = this.fb.group({
      userName: ['', [Validators.required, Validators.minLength(4), forbiddenNameValidator(/password/)]],
      email: [''],
      subscribe: [false],
      password: [''],
      confirmPassword: [''],
      address: this.fb.group({
        city: [''],
        state: [''],
        postalCode: ['']
      })
    },{validator: PasswordValidator});

    this.registrationForm.get('subscribe')?.valueChanges
      .subscribe(checkedValue =>{
        const email= this.registrationForm.get('email');
         if(checkedValue){
           this.email?.setValidators(Validators.required);
         } else{
           this.email?.clearValidators();
         }
         this.email?.updateValueAndValidity();
      });
  }

  

  loadApiData() {
    this.registrationForm.patchValue({
      userName: 'Bruce',
      password: 'test',
      confirmPassword: 'test',
      address: {
        city: 'City',
        state: 'State',
        postalCode: '123456',
      }
    });
  }

  // updateValidation(checked: any) {
  //   const email = this.registrationForm.get('email');
  //   if (checked) {
  //     email?.setValidators(Validators.required);
  //   } else {
  //     email?.clearValidators();
  //   }
  //   email?.updateValueAndValidity();
  // }
}