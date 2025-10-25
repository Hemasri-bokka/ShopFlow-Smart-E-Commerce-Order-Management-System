package com.examly.springapp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.examly.springapp.model.Feedback;
import com.examly.springapp.service.FeedbackService;

@RestController
public class FeedbackController {

    @Autowired
    private FeedbackService ser;

    // @PostMapping("/api/feedback") 
    // public ResponseEntity<Feedback> createFeedback(@RequestBody Feedback fb){
    //     Feedback found = ser.createFeedback(fb);
    //     if(found == null){
    //         return ResponseEntity.status()
    //     }
    // }


}
