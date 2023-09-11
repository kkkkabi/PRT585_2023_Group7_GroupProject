import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesListComponent } from './components/employees/employees-list/employees-list.component';
import { S360233KabiComponent } from './components/s360233_Kabi/s360233-kabi/s360233-kabi.component';


const routes: Routes = [
  {
    path: '',
    component: EmployeesListComponent
  },
  {
    path: 'employees',
    component: EmployeesListComponent
  },
  {
    path: 's360233_kabi',
    component: S360233KabiComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
