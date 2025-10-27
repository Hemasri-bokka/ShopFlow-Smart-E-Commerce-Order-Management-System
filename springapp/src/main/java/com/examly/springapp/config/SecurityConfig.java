// package com.examly.springapp.config;

// import org.springframework.security.config.Customizer;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.context.annotation.Bean;
// import org.springframework.context.annotation.Configuration;
// import org.springframework.security.config.annotation.web.builders.HttpSecurity;
// import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
// import org.springframework.security.web.SecurityFilterChain;
// import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

// @Configuration
// @EnableWebSecurity
// public class SecurityConfig {

    // // @Autowired
    // // private JwtFilter jwtFilter;
    // @Bean
    // public SecurityFilterChain securityFilterChain(HttpSecurity http)throws Exception{
    //     return http
    //                 .csrf(csrf -> csrf.disable()) 
    //                 .authorizeHttpRequests(request-> request
    //                 .requestMatchers("login", "register").permitAll())
    //                 .anyRequest().authenticated()
    //                 .httpBasic(Customizer.withDefaults())
    //                 .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))  
    //                 .addFilterBefore(jwtFilter, UsernamePasswordAuthenticationFilter.class)
    //                 .build();          
    // } 
// }
