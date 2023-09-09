import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { envirionment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  baseApiUrl: string = envirionment.baseApiUrl;
  
  constructor(private http: HttpClient) { }

  getAllEmployees() : Observable<Employee[]> {
    return this.http.get<Employee[]>(this.baseApiUrl + 'api/employees');
  }
}
