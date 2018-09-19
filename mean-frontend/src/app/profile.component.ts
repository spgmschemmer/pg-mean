import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
    selector: 'login',
    template: `
        <mat-card>
            <mat-card-header>
                <mat-card-title>
                    Profile
                </mat-card-title>
            </mat-card-header>
            <mat-card-content>
                
            </mat-card-content>
        </mat-card>
    `
  })

export class ProfileComponent {
    constructor(private apiService: ApiService) {}
}
