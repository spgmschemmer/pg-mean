import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()

export class ApiService {
    messages = [];
    users = [];
    path = 'http://localhost:3000'
    constructor(private http: HttpClient) {}

    postMessage(message) {
        this.http.post(this.path + '/post', message).subscribe(res => {
        });
    }

    getMessages(userID) {
        this.http.get<any>(this.path + '/posts/' + userID).subscribe(res => {
            this.messages = res;
        });
    }    

    getUsers() {
        this.http.get<any>(this.path + '/users').subscribe(res => {
            this.users = res;
        })
    }

    getProfile(id) {
        return this.http.get(this.path + '/profile/' + id)        
    }    
}
