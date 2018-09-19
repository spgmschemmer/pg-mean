import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
    selector: 'login',
    template: `
        <mat-card>
            <mat-card-header>
                <mat-card-title>
                    Login
                </mat-card-title>
            </mat-card-header>
            <mat-card-content>
                <form class="example-form">
                    <div>
                        <mat-form-field class="example-full-width">
                            <input matInput
                                   [(ngModel)]="loginData.email"
                                   name="email"
                                   placeholder="Email"
                                   value="email"
                                   type="email">
                        </mat-form-field>
                    </div>
                    <div>
                        <mat-form-field class="example-full-width">
                            <input matInput
                                   [(ngModel)]="loginData.pwd"
                                   name="password"
                                   placeholder="password"
                                   value="password"
                                   type="password">
                        </mat-form-field>
                    </div>
                    <button mat-raised-button color="primary" (click)="post()">Login</button>
                </form>
            </mat-card-content>
        </mat-card>
    `
  })

export class LoginComponent {
    loginData = {};

    constructor(private authService: AuthService) {}

    post() {
        this.authService.loginUser(this.loginData);
    }
}
