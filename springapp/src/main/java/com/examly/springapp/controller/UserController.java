package com.examly.springapp.controller;

import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {
    
    @Autowired
    private UserServiceImpl ser;
    

    // Register User
    @PostMapping("/api/register")
    public ResponseEntity<?> registerUser(@RequestBody User user) {
        try {
            User createdUser = userService.createUser(user);
            return new ResponseEntity.status(201).body(createdUser); // Created
        } catch (Exception e) {
            return new ResponseEntity.status(409).body("Registration failed"); // Conflict
        }
    }
    @PostMapping("/api/login")
    public ResponseEntity<?> loginUser(){
        
    }


    @GetMapping("/api/user")
    public ResponseEntity<List<User>> getAllUsers(){

        List<User> found=service.getAllUsers();
        return ResponseEntity.status(200).body(found); 
        } 

    @DeleteMapping("/api/user/{userId}")
    public ResponseEntity<?> deleteUserById(@PathVariable int userId){
    User found=service.deleteUserById(userId);
    return ResponseEntity.status(200).body(found);  //OK
    }
}
