import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Meeting } from '../model/meeting';
import { CalendarService } from '../_service/calendar.service';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})
export class TodayComponent implements OnInit {

  //dateControl = new FormControl('');
  starttimeControl = new FormControl('');
  endtimeControl = new FormControl('');
  frequencyControl = new FormControl('');
  dataSource:Meeting[]= [];
  displayedColumns: string[] = ['name', 'start_date', 'end_date'];
  constructor(public calendarService:CalendarService) { 
  }

  ngOnInit(): void {
    console.log('calling getTodaydata init');
    
    this.getTodayData();
  }
  addToCalendar(){
    //console.log(this.dateControl.value);
    console.log(this.starttimeControl.value);
    console.log(this.endtimeControl.value);
    console.log(this.frequencyControl.value);
  }
  getTodayData()
  {
    console.log('in getTodayData today component');
    
    this.calendarService.getTodayData().subscribe(data=>{
      console.log(data);
      this.dataSource=data;
    },err=>{
      console.log(err);
      
      console.error('Error in fetching data');
      
    })
  }

}
