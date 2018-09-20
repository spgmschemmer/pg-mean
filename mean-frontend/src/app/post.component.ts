import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'post',
  template: `
  <mat-card>
  <mat-card-header>
      <mat-card-title>
          New Post
      </mat-card-title>
  </mat-card-header>
  <mat-card-content>
      <form class="example-form">
          <div>
              <mat-form-field class="example-full-width" style="width: 100%">
                  <textarea matInput
                         [(ngModel)]="postMessage"
                         name="post-message"
                         placeholder="Post Message"
                         value="Post Message">
                  </textarea>
              </mat-form-field>
          </div>
          <button mat-raised-button color="primary" (click)="post()">Post</button>
      </form>
  </mat-card-content>
</mat-card>
  `
})

export class PostComponent {
  postMessage = ''

  constructor(private apiService: ApiService) {}

    post() {
        this.apiService.postMessage({msg: this.postMessage})
    }

}
