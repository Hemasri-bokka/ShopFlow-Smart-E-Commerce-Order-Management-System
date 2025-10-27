package com.examly.springapp.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.examly.springapp.config.JwtUtils;
import com.examly.springapp.config.UserPrinciple;
import com.examly.springapp.exception.UsernameAlreadyExistsException;
import com.examly.springapp.model.LoginDTO;
import com.examly.springapp.model.User;
import com.examly.springapp.repository.UserRepo;

@Service
public class UserServiceImpl implements UserService{

    private JwtUtils jwtUtils;
    private UserRepo uRepo;
    PasswordEncoder passwordEncoder;
    AuthenticationManager authenticationManager;
    

    @Autowired
    public UserServiceImpl(JwtUtils jwtUtils, UserRepo uRepo, PasswordEncoder passwordEncoder,
            AuthenticationManager authenticationManager) {
        this.jwtUtils = jwtUtils;
        this.uRepo = uRepo;
        this.passwordEncoder = passwordEncoder;
        this.authenticationManager = authenticationManager;
    }
    @Override
    public User createUser(User user) {
        Optional<User> existUser = uRepo.findByUsername(user.getUsername());
        if(existUser.isPresent()){
          throw new UsernameAlreadyExistsException("Username already exists");
        }
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        user = uRepo.save(user);
        return user;

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
    public LoginDTO loginUser(User user) {
        Optional<User> optionalUser = uRepo.findByUsername(user.getUsername());
    
        if (optionalUser.isPresent()) {
            User dbUser = optionalUser.get();
    
            if (dbUser.getPassword().equals(user.getPassword())) {
                UserDetails userDetails = new UserPrinciple(dbUser);
                String token = jwtUtils.generateToken(userDetails);
    
                return new LoginDTO(
                    token,
                    dbUser.getUsername(),
                    dbUser.getUserRole(),
                    (int) dbUser.getUserId() // safely cast long to int
                );
            }
        }
        throw new RuntimeException("Invalid username or password");
    }
    
    

    // @Override
    // public User loginUser(User user) {
    //     // String username = user.getUsername();
    //     // String password = user.getPassword();
    //     // // User use = uRepo.findByEmailAndPassword(username, password);
    //     // // if(use == null){

    //     // // }
    //     return user;

    // }

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
        return uRepo.findByUsernameAndPassword(username, password).isPresent();

        
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
