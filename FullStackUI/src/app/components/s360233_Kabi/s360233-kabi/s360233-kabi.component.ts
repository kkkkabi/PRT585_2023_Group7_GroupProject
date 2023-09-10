import { Component, OnInit } from '@angular/core';
import { kabi_timesheet } from 'src/app/models/kabi_timesheet.model';
import { KabiTimesheetsService } from 'src/app/services/kabi_timesheet/kabi-timesheets.service';

@Component({
  selector: 'app-s360233-kabi',
  templateUrl: './s360233-kabi.component.html',
  styleUrls: ['./s360233-kabi.component.css']
})
export class S360233KabiComponent implements OnInit {

  kabi_timesheets: kabi_timesheet[]=[];

  constructor(private KabiTimesheetsService: KabiTimesheetsService){}
    ngOnInit(): void {
      this.KabiTimesheetsService.getAllkabi_timesheets()
      .subscribe({
          next: (kabi_timesheets) => {
            this.kabi_timesheets = kabi_timesheets;
            },
          error: (response) => {
            console.log(response);
          }
     })
    }
    }

