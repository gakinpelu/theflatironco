import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pendingclient',
  templateUrl: './pendingclient.component.html',
  styleUrls: ['./pendingclient.component.css']
})
export class PendingclientComponent implements OnInit {

  public pendingClient: any;
  searchTexts: any;

  constructor( private http: HttpClient) { }

  ngOnInit() {
    this.http.get('https://jsonplaceholder.typicode.com/users')
    .subscribe((pendingClients) => {
        this.pendingClient = pendingClients;
        console.log(this.pendingClient);
      })

  }

}
