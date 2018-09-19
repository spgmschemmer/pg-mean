import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()

export class ApiService {
    messages = [];

    constructor(private http: Http) {}

    getMessages() {
        this.messages = [{'test': 1}, {'test2': 2}];
        /*
        this.http.get('http://localhost:3000/posts').subscribe(res => {
            this.messages = res.json();
        });
        */
    }

}
