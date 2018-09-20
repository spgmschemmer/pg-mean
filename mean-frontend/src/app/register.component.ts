import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
    selector: 'register',
    templateUrl: 'register.component.html'
  })

export class RegisterComponent {
    registerData = {};

    constructor(private apiService: AuthService) {}

    post() {
        console.log(this.registerData);
        this.apiService.registerUser(this.registerData)
    }
}
