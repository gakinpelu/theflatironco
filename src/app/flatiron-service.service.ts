import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AgentsInfo } from './agents-info';

@Injectable({
  providedIn: 'root'
})
export class FlatironServiceService {

  private _mockAgentData: string = '/assets/agent-info.json';

  constructor(private http: HttpClient) { }

  getMockAgentData (): Observable<AgentsInfo[]> {
    return this.http.get<AgentsInfo[]>(this._mockAgentData);
  };

}
