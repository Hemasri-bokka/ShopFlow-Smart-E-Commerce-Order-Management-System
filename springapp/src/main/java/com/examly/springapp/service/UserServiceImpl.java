package com.examly.springapp.service;

import java.util.List;
import java.util.Optional;

import org.springframework.security.core.userdetails.UserDetails;

import com.examly.springapp.model.User;
import com.examly.springapp.repository.UserRepo;

public class UserServiceImpl implements UserService{

    private UserRepo uRepo;

    public UserServiceImpl(UserRepo uRepo) {
        this.uRepo = uRepo;
    }

    @Override
    public User createUser(User user) {
        return uRepo.save(user);
    }

    @Override
    public UserDetails loadUserByUsername(String userName) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'loadUserByUsername'");
    }

    @Override
    public List<User> findAllUsers() {
        return uRepo.findAll();
    }

    @Override
    public User loginUser(User user) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'loginUser'");
    }

    @Override
    public User getById(int id) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'getById'");
    }

    @Override
    public void deleteUser(int id) {
        long ind = int id;
        return uRepo.deleteById(ind).orElse(null);
    }

    @Override
    public boolean validateUserByUsername(String username, String password) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'validateUserByUsername'");
    }

    @Override
    public void updateUser(User user) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'updateUser'");
    }

    @Override
    public Optional<User> getUserByName(String name) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'getUserByName'");
    }
    


}
