import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // registrationForm= new FormGroup({
  //   userName: new FormControl('Pulkit'),
  //   password: new FormControl(''),
  //   confirmPassword: new FormControl(''),
  //   address: new FormControl({
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     postalCode: new FormControl('')


  //   })
  // });

  get userName(){
    return this.registrationForm.get('userName');
  }

  constructor(private fb: FormBuilder) { }

  registrationForm = this.fb.group({
    userName: ['', [Validators.required, Validators.minLength(4)]],
    password: [''],
    confirmPassword: [''],
    address: this.fb.group({
      city: [''],
      state: [''],
      postalCode: ['']
    })
  });

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
}