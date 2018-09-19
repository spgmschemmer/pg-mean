import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
    selector: 'register',
    template: `
        <mat-card>
            <mat-card-header>
                <mat-card-title>
                    Register New User
                </mat-card-title>
            </mat-card-header>
            <mat-card-content>
                <form class="example-form">
                    <div>
                        <mat-form-field class="example-full-width">
                            <input matInput
                                   [(ngModel)]="registerData.email"
                                   name="email"
                                   placeholder="Email"
                                   value="email"
                                   type="email">
                        </mat-form-field>
                    </div>
                    <div>
                        <mat-form-field class="example-full-width">
                            <input matInput
                                   [(ngModel)]="registerData.pwd"
                                   name="password"
                                   placeholder="password"
                                   value="password"
                                   type="password">
                        </mat-form-field>
                    </div>
                    <button mat-raised-button color="primary" (click)="post()">Register</button>
                </form>
            </mat-card-content>
        </mat-card>
    `
  })

export class RegisterComponent {
    registerData = {};

    constructor(private apiService: AuthService) {}

    post() {
        console.log(this.registerData);
        this.apiService.registerUser(this.registerData)
    }
}
