import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesListComponent } from './components/employees/employees-list/employees-list.component';
import { HttpClientModule } from '@angular/common/http';
import { S360233KabiComponent } from './components/s360233_Kabi/s360233-kabi/s360233-kabi.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesListComponent,
    S360233KabiComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
