package com.examly.springapp.service;

import com.examly.springapp.repository.UserRepo;

public class UserService {

    private UserRepo uRepo;

    public UserService(UserRepo uRepo) {
        this.uRepo = uRepo;
    }
    
    
}
