import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  template: `
    <mat-toolbar>
      <button mat-button routerLink="/">PSSocial</button>
      <button mat-button routerLink="/users">Users</button>
      <span style="flex: 1 1 auto"></span>
      <button mat-button routerLink="/register">Register</button>
    </mat-toolbar>
    <router-outlet></router-outlet>
    `
})

export class AppComponent {
  title = 'my app';
}
