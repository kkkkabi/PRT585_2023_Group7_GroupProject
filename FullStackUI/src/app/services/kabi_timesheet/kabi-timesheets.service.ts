import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { kabi_timesheet } from 'src/app/models/kabi_timesheet.model';
import { envirionment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class KabiTimesheetsService {

  baseApiUrl: string = envirionment.baseApiUrl;
  
  constructor(private http: HttpClient) { }

  getAllkabi_timesheets() : Observable<kabi_timesheet[]> {
    return this.http.get<kabi_timesheet[]>(this.baseApiUrl + 'api/employees');
  }
}
