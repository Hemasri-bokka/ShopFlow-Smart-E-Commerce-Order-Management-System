import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Feedback } from '../models/feedback.model';
@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  apiUrl = "";
  constructor(private http: HttpClient) { }
  

  createFeedback(feedback: Feedback):Observable<any>{
    return this.http.post<any>(`${this.apiUrl}`,feedback);
  }

  getAllFeedback():Observable<any>{
    return this.http.get<any>(`${this.apiUrl}`);
  }

  updateFeedback(id:number, feedback: Feedback):Observable<any>{
    return this.http.put<any>(`${this.apiUrl}/${id}`,feedback);
  }

  deleteFeedback(id: number):Observable<any>{
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }

  getFeedbackByUserId(userId: number):Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/${userId}`);
  }
}
