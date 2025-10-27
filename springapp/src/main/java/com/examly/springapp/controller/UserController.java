package com.examly.springapp.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.examly.springapp.config.JwtUtils;
import com.examly.springapp.config.UserPrinciple;
import com.examly.springapp.model.LoginDTO;
import com.examly.springapp.model.User;
import com.examly.springapp.service.UserServiceImpl;

@RestController
public class UserController {

    
    private JwtUtils jwtUtils;


    private UserServiceImpl ser;
    

    public UserController() {
    }

    public UserController(JwtUtils jwtUtils, UserServiceImpl ser) {
        this.jwtUtils = jwtUtils;
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
//     @PostMapping("/api/login")
//     public ResponseEntity<?> loginUser(@RequestBody User user) {
//     try {
//         User loginResponse = ser.loginUser(user);
//         return ResponseEntity.ok().body(loginResponse);
//     } catch (Exception e) {
//         return ResponseEntity.status(401).body("Invalid credentials");
//     }
// }
@PostMapping("/api/login")
public ResponseEntity<?> loginUser(@RequestBody User user) {
    try {
        LoginDTO loginDTO = ser.loginUser(user);
        return ResponseEntity.ok(loginDTO);
    } catch (Exception e) {
        return ResponseEntity.status(401).body("Invalid credentials");
    }
}

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
