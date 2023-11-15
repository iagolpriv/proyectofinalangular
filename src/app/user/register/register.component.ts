import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { NgForm } from '@angular/forms';

type User = {
  email: string;
  username: string;
  password: string;
  firstname: string;
  lastname: string;
  phone: string;
  adress: string;
  city: string;
  number: string;
  zipcode: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})

export class RegisterComponent {
  constructor(private userService: UserService) {}

  onSubmit(registerForm: NgForm) {
    this.onregister(registerForm.value);
  }

  onregister(user: User) {
    this.userService.registerUser(user).subscribe(
      (response) => {
        console.log('Registrado correctamente', response);
      },
      (error) => {
        console.error('Error en el registro', error);
      }
    );
  }
}