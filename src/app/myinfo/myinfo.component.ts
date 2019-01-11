import { Component, OnInit } from '@angular/core';
import { FlatironServiceService } from '../flatiron-service.service';

@Component({
  selector: 'app-myinfo',
  templateUrl: './myinfo.component.html',
  styleUrls: ['./myinfo.component.css']
})
export class MyinfoComponent implements OnInit {

public agentInfo = [];
  isDisplayed: boolean = true;

  constructor(private _flatironServices: FlatironServiceService) { }

  ngOnInit() {
    this._flatironServices.getMockAgentData()
      .subscribe(data => this.agentInfo = data);
  }

  toggleButton(): void {
    this.isDisplayed = !this.isDisplayed;
  }

}
