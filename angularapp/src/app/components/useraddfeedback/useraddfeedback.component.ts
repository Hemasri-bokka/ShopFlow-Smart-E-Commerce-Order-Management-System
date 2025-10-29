import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FeedbackService } from 'src/app/services/feedback.service';
import { Feedback } from 'src/app/models/feedback.model';


@Component({
  selector: 'app-useraddfeedback',
  templateUrl: './useraddfeedback.component.html',
  styleUrls: ['./useraddfeedback.component.css']
})
export class UseraddfeedbackComponent implements OnInit {


  feedbackForm!: FormGroup;
  submitted = false; 
  successMessage = '';
  userId: number = 1; // Replace with dynamic user ID from auth or route

  constructor(private fb: FormBuilder, private feedbackService: FeedbackService) {}

  ngOnInit(): void {
    this.feedbackForm = this.fb.group({
      userName: ['', Validators.required],
      comment: ['', [Validators.required, Validators.minLength(10)]],
      rating: ['', [Validators.required, Validators.min(1), Validators.max(5)]]
    });
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.feedbackForm.invalid) {
      return;
    }

    const feedback: Feedback = {
      ...this.feedbackForm.value,
      userId: this.userId
    };

    this.feedbackService.createFeedback(feedback).subscribe({
      next: () => {
        this.successMessage = 'Feedback submitted successfully!';
        this.feedbackForm.reset();
        this.submitted = false;
      },
      error: (err) => {
        console.error('Error submitting feedback:', err);
      }
    });
  }


}
