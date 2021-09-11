import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {environment} from '../../environments/environment';
import { Meeting } from '../model/meeting';
import { map, filter, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  baseUrl=environment.API_URL;
  head: HttpHeaders;
  constructor(private http: HttpClient) { 
    this.head = new HttpHeaders().set('Access-Control-Allow-Origin', '*');
    this.head.append('Access-Control-Allow-Headers','*');
    this.head.append('Access-Control-Request-Methods','*');
    this.head.append('Content-Type','application/json');
  }

  getTodayData():Observable<any>
  {
    return this.http.get<any>(this.baseUrl+'/today',{headers:this.head});
  }
  postMeeting(meet:Meeting):Observable<any>
  {
    return this.http.post<any>(this.baseUrl+'/add-data',meet,{headers:this.head});
  }
  getAllMeetings()
  {
    return this.http.get<any>(this.baseUrl+'/all',{headers:this.head});
  }
}
