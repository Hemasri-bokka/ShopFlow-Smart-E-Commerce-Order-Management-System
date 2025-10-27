package com.examly.springapp.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.examly.springapp.model.User;
import com.examly.springapp.service.UserServiceImpl;

@RestController
public class UserController {

    private UserServiceImpl ser;

    public UserController(UserServiceImpl ser) {
        this.ser = ser;
    }

    // Register User
    @PostMapping("/api/register")
    public ResponseEntity<?> registerUser(@RequestBody User user) {
        try {
            User createdUser = ser.createUser(user);
            return ResponseEntity.status(201).body(createdUser); // Created
        } catch (Exception e) {
            return ResponseEntity.status(409).body("Registration failed"); // Conflict
        }
    }

    // @PostMapping("/api/login")
    // public ResponseEntity<?> loginUser(@RequestBody User user) {
    //     String message = ser.loginUser(user);
    //     return ResponseEntity.status(200).body(message);
        


    // }

    @GetMapping("/api/user")
    public ResponseEntity<List<User>> getAllUsers() {

        List<User> found = ser.findAllUsers();
        return ResponseEntity.status(200).body(found);
    }

    @DeleteMapping("/api/user/{userId}")
    public ResponseEntity<?> deleteUserById(@PathVariable int userId) {
        ser.deleteUser(userId);
        return ResponseEntity.status(200).build(); // OK
    }
}
