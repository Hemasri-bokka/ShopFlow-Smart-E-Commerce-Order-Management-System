// package com.examly.springapp.config;

// import java.util.ArrayList;
// import java.util.Collection;
// import java.util.List;

// import org.springframework.security.core.GrantedAuthority;
// import org.springframework.security.core.authority.SimpleGrantedAuthority;
// import org.springframework.security.core.userdetails.UserDetails;

// import com.examly.springapp.model.User;

// public class UserPrinciple implements UserDetails{
//     private String username;
//     private String password;
//     private String role;
//     private List<GrantedAuthority> authorities = new ArrayList<>();

//     public UserPrinciple(User user){
//         setUsername(user.getUsername());
//         setPassword(user.getPassword());
//         setRole(user.getUserRole());
//         authorities.add(new SimpleGrantedAuthority(role));
//     }

//     @Override
//     public Collection<? extends GrantedAuthority> getAuthorities() {
//         return authorities;
//     }

//     @Override
//     public String getPassword() {
//         return password;
//     }

//     @Override
//     public String getUsername() {
//         return username;
//     }

//     public String getRole(){
//         return role;
//     }

//     @Override
//     public boolean isAccountNonExpired() {
//         return true;
//     }

//     @Override
//     public boolean isAccountNonLocked() {
//         return true;
//     }

//     @Override
//     public boolean isCredentialsNonExpired() {
//         return true;
//     }

//     @Override
//     public boolean isEnabled() {
//         return true;
//     }

//     public void setUsername(String username) {
//         this.username = username;
//     }

//     public void setPassword(String password) {
//         this.password = password;
//     }

//     public void setRole(String role) {
//         this.role = role;
//     }

//     public void setAuthorities(List<GrantedAuthority> authorities) {
//         this.authorities = authorities;
//     }
// }
