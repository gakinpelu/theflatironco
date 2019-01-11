import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';
import { FooterComponent } from './footer/footer.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { ClientsComponent } from './clients/clients.component';
import { MyinfoComponent } from './myinfo/myinfo.component';
import { HeadernavComponent } from './headernav/headernav.component';
import { AppRoutingModule } from './/app-routing.module';
import { FilterPipePipe } from './filter-pipe.pipe';
import { HttpClientModule } from '@angular/common/http';
import { PendingclientComponent } from './pendingclient/pendingclient.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomepageComponent,
    FooterComponent,
    MainpageComponent,
    ClientsComponent,
    MyinfoComponent,
    HeadernavComponent,
    FilterPipePipe,
    PendingclientComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
