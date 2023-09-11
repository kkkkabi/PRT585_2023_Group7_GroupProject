import { Component, OnInit } from '@angular/core';
import { kabi_timesheet } from 'src/app/models/kabi_timesheet.model';
import { KabiTimesheetsService } from 'src/app/services/kabi_timesheet/kabiTimesheets.service';

@Component({
  selector: 'app-s360233-kabi',
  templateUrl: './s360233-kabi.component.html',
  styleUrls: ['./s360233-kabi.component.css']
})
export class S360233KabiComponent implements OnInit {

  Kabi_timesheets: kabi_timesheet[]=[];
  constructor(private kabiTimesheetsService: KabiTimesheetsService){}

    ngOnInit(): void {
      this.kabiTimesheetsService.getAllkabi_timesheets()
      .subscribe({
          next: (kabi_timesheets) => {
            this.Kabi_timesheets = kabi_timesheets;
            console.log('Kabi_timesheets:',this.Kabi_timesheets);

            },
          error: (response) => {
            console.log(response);
          }
     });
    }
    }