import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { ActivatedRoute } from '@angular/router'

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
                <mat-list>
                <mat-list-item *ngIf="profile.name">Name: {{profile?.name}}</mat-list-item>
                <mat-list-item *ngIf="!profile.name">Name: (none)</mat-list-item>
                <mat-list-item>E-Mail: {{profile?.email}}</mat-list-item>
                <mat-list-item *ngIf="profile.description">Description: {{profile?.description}}</mat-list-item>
                </mat-list>
            </mat-card-content>
        </mat-card>
        <messages></messages>
    `
  })

export class ProfileComponent {

    profile = {}

    constructor(private apiService: ApiService, private route: ActivatedRoute) {}

    ngOnInit() {
        var id = this.route.snapshot.params.id
        this.apiService.getProfile(id).subscribe(data => this.profile = data)
    }
}
