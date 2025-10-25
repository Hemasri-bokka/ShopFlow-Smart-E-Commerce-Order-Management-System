package com.examly.springapp.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Feedback {

    @Id
    @GeneratedValue 
    private long feedbackId;
    private String message;
    private int rating;
    @ManyToOne
    @JoinColumn(name = "userId")
    private User user;
    public Feedback() {
    }
    public Feedback(long feedbackId, String message, int rating, User user) {
        this.feedbackId = feedbackId;
        this.message = message;
        this.rating = rating;
        this.user = user;
    }
    public long getFeedbackId() {
        return feedbackId;
    }
    public void setFeedbackId(long feedbackId) {
        this.feedbackId = feedbackId;
    }
    public String getMessage() {
        return message;
    }
    public void setMessage(String message) {
        this.message = message;
    }
    public int getRating() {
        return rating;
    }
    public void setRating(int rating) {
        this.rating = rating;
    }
    public User getUser() {
        return user;
    }
    public void setUser(User user) {
        this.user = user;
    }

    
    
}
