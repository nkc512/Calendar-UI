import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Meeting } from '../model/meeting';
import { CalendarService } from '../_service/calendar.service';
@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})
export class TodayComponent implements OnInit  {

  starttimeControl = new FormControl('');
  endtimeControl = new FormControl('');
  frequencyControl = new FormControl('');
  nameControl = new FormControl('');
  dataSource:Meeting[]= [];
  displayedColumns: string[] = ['name', 'start_date', 'end_date'];
  constructor(public calendarService:CalendarService) { 
  }

  ngOnInit(): void {
    this.getTodayData();
  }
  addToCalendar(){
    const dtstart=new Date();
    const dtend=new Date();
    const startTime=this.starttimeControl.value;
    const endTime=this.endtimeControl.value;
    const name=this.nameControl.value;
    const frequency=this.frequencyControl.value
    const starthour=startTime.substring(0,2);
    const startmin=startTime.substring(3,5);
    const endhour=endTime.substring(0,2);
    const endmin=endTime.substring(3,5);
    const nowTime=new Date().toLocaleTimeString([], { hour: '2-digit', minute: "2-digit", hour12: false });
    dtstart.setHours(starthour,startmin);
    dtend.setHours(endhour,endmin);
    if(nowTime<startTime)
    {
      dtstart.setDate(dtstart.getDate()+1);
      dtend.setDate(dtend.getDate()+1);
    }
    if(startTime>endTime)
    {
      dtend.setDate(dtend.getDate()+1);
    }

    const meet=new Meeting(name,dtstart.toISOString(),dtend.toISOString(),frequency);
    this.calendarService.postMeeting(meet).subscribe(data=>{
      console.log('Meeting added successfully '+ data);
    },err=>{
      console.log('Could not add meeting '+err);
    });
  }
  getTodayData()
  {
    this.calendarService.getTodayData().subscribe(data=>{
      console.log(data);
      this.dataSource=data;
    },err=>{
      console.log(err);
      console.error('Error in fetching data');
      
    })
  }

}
