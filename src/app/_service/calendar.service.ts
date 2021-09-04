import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {environment} from '../../environments/environment';
import { Meeting } from '../model/meeting';
@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  baseUrl=environment.API_URL;
  constructor(private http: HttpClient) { }

  getTodayData():Observable<any>
  {
    console.log('in calendarService');
    
    return this.http.get<any>(this.baseUrl);
  }

}
