package com.examly.springapp.service;

import java.util.List;
import java.util.Optional;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import com.examly.springapp.config.UserPrinciple;
import com.examly.springapp.model.User;
import com.examly.springapp.repository.UserRepo;

@Service
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
        User user =  uRepo.findByUsername(userName).orElse(null);
        return new UserPrinciple(user);
    }

    @Override
    public List<User> findAllUsers() {
        return uRepo.findAll();
    }

    



    @Override
    public User loginUser(User user) {
        String username = user.getUsername();
        String password = user.getPassword();
        // User use = uRepo.findByEmailAndPassword(username, password);
        // if(use == null){

        // }
        return user;

    }

    @Override
    public User getById(int id) {
        long lid = id;
        return uRepo.findById(lid).orElse(null);
    }

    @Override
    public void deleteUser(int id) {
        long ind = id;
        uRepo.deleteById(ind);
    }

    @Override
    public boolean validateUserByUsername(String username, String password) {
        return uRepo.findByEmailAndPassword(username, password).isPresent();

        
      }

      @Override
      public void updateUser(User user) {
          if (uRepo.existsById(user.getUserId())) {
              uRepo.save(user);
          }
      }
      

    @Override
    public Optional<User> getUserByName(String name) {
        return uRepo.findByUsername(name);

    }
    


}
