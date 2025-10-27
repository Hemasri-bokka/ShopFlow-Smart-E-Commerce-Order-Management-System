package com.examly.springapp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.examly.springapp.model.Feedback;
import com.examly.springapp.model.User;
import com.examly.springapp.repository.FeedbackRepo;
import com.examly.springapp.repository.UserRepo;

@Service

public class FeedbackServiceImpl implements FeedbackService{
    @Autowired
    private FeedbackRepo frepo;
    @Autowired
    private UserRepo urepo;

    @Override
    public Feedback createFeedback(Feedback feedback, long userId) {
        User found = urepo.findById(userId).orElse(null);
        if(found == null){
            return null;
        }
        feedback.setUser(found);
        return frepo.save(feedback);
    }

    @Override
    public Feedback deleteFeedback(long feedbackId) {
        Feedback found = frepo.findById(feedbackId).orElse(null);
        if(found == null){
            return null; 
        }
        frepo.delete(found); 
        return found;
    }


    @Override
    public List<Feedback> getAllFeedback() {
        
        return frepo.findAll();
    }

    @Override
    public Feedback getFeedbackById(long feedbackId) {
            
        return frepo.findById(feedbackId).orElse(null);

    }

    @Override
    public List<Feedback> getFeedbackByUserId(long userId) {
        
        return frepo.findFeedbackByUserId(userId); 
    }

   


}
