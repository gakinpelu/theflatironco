import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { MyinfoComponent } from './myinfo/myinfo.component';
import { ClientsComponent } from './clients/clients.component';
import { PendingclientComponent } from './pendingclient/pendingclient.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: MainpageComponent},
  { path: 'myinfo', component: MyinfoComponent},
  { path: 'clients', component: ClientsComponent},
  { path: 'pendingclients', component: PendingclientComponent},
]

@NgModule({
  imports: [
   
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
 
})
export class AppRoutingModule { }
