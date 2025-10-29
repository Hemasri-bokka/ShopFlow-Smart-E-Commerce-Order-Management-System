import { Component, OnInit } from '@angular/core';
import { Feedback } from 'src/app/models/feedback.model';
import { FeedbackService } from 'src/app/services/feedback.service';



@Component({
  selector: 'app-userviewfeedback',
  templateUrl: './userviewfeedback.component.html',
  styleUrls: ['./userviewfeedback.component.css']
})
export class UserviewfeedbackComponent implements OnInit {

  userFeedbackList: Feedback[] = [];
  userId: number = 1; // Replace with dynamic user ID from auth or route

  constructor(private feedbackService: FeedbackService) {}

  ngOnInit(): void {
    this.loadUserFeedback();
  }

  loadUserFeedback(): void {
    this.feedbackService.getFeedbackByUserId(this.userId).subscribe({
      next: (data) => {
        this.userFeedbackList = Array.isArray(data) ? data : [data];
      },
      error: (err) => {
        console.error('Error loading user feedback:', err);
      }
    });
  }

}
