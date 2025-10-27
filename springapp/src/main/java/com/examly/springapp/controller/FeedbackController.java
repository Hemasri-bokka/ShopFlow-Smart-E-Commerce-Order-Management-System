package com.examly.springapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.examly.springapp.model.Feedback;
import com.examly.springapp.service.FeedbackService;

@RestController
public class FeedbackController {

    @Autowired
    private FeedbackService ser;

    @PostMapping("/api/feedback/{userId}") 
    public ResponseEntity<Feedback> createFeedback(@RequestBody Feedback fb, @PathVariable long userId){ 
        Feedback found = ser.createFeedback(fb, userId);
        if(found != null){
            return ResponseEntity.status(201).body(found);
        }
        return ResponseEntity.status(409).build(); 
    }

    @GetMapping("/api/feedback")
    public ResponseEntity<List<Feedback>> getAllFeedback(){
        List<Feedback> found = ser.getAllFeedback();
        if(found.isEmpty()){
            return ResponseEntity.status(404).build();
        }
        return ResponseEntity.status(200).body(found);
    }

    @GetMapping("/api/feedback/user/{userId}")
    public ResponseEntity<List<Feedback>> getFeedbackById(@PathVariable long userId){
        List<Feedback> found =  ser.getFeedbackByUserId(userId); 
        if(found.isEmpty()){
            return ResponseEntity.status(404).build();
        }
        return ResponseEntity.status(200).body(found);
        
    }

    @GetMapping("/api/feedback/feedback/{feedbackId}")
    public ResponseEntity<Feedback> getFeedbackByIId(@PathVariable long feedbackId){
        Feedback found =  ser.getFeedbackById(feedbackId); 
        if(found == null){ 
            return ResponseEntity.status(404).build();
        }
        return ResponseEntity.status(200).body(found);
        
    }

    @DeleteMapping("/api/feedback/{id}")
    public ResponseEntity<Feedback> delete(@PathVariable long id){
        Feedback found = ser.deleteFeedback(id);
        if(found == null){
            return ResponseEntity.status(404).build();
        }
        return ResponseEntity.status(200).body(found); 
    }

}
