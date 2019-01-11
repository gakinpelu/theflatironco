import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  public client: any;
  filteredUsers: any;
  searchText: any;


  constructor( private http: HttpClient) { }

  ngOnInit() {
    this.http.get('https://jsonplaceholder.typicode.com/users')
    .subscribe((clients) => {
        this.client = clients;
        console.log(this.client);
      })
  }

}
