import { Component, OnInit } from '@angular/core';
import { Meeting } from '../model/meeting';
import { CalendarService } from '../_service/calendar.service';

@Component({
  selector: 'app-all-plan',
  templateUrl: './all-plan.component.html',
  styleUrls: ['./all-plan.component.css']
})
export class AllPlanComponent implements OnInit {
  dataSource:Meeting[]= [];
  displayedColumns: string[] = ['name', 'start_date', 'end_date','frequency'];
  constructor(public calendarService:CalendarService) { 
  }

  ngOnInit(): void {
    this.getAllMeeting();
  }

  getAllMeeting()
  {
    this.calendarService.getAllMeetings().subscribe(data=>{
      console.log(data);
      this.dataSource=data;
    },err=>{
      console.log(err);
      console.error('Error in fetching data');
      
    })
  }

}
