package com.examly.springapp.service;

import com.examly.springapp.repository.UserRepo;

public class UserServiceImpl {

    private UserRepo uRepo;

    public UserServiceImpl(UserRepo uRepo) {
        this.uRepo = uRepo;
    }

}
