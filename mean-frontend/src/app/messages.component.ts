import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'messages',
  template: `
    <h3>Posts:</h3>
    <div *ngFor="let message of apiService.messages">
        <mat-card>
          <div>{{message.author}} said:</div>
          <div>{{message.msg}}</div>
        </mat-card>
    </div>
  `
})

export class MessagesComponent {
  constructor(private apiService: ApiService, private route: ActivatedRoute) {}

  ngOnInit() {
    var userID = this.route.snapshot.params.id

    this.apiService.getMessages(userID);
    
  }

  msgsOnClick() {
    console.log(this.apiService.messages)
  }
}
