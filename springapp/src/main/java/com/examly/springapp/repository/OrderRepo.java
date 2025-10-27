package com.examly.springapp.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.examly.springapp.model.Order;
import com.examly.springapp.model.User;
import com.examly.springapp.model.enums.OrderStatus;

public interface OrderRepo extends JpaRepository<Order,Long>{
    List<Order> findByStatus(OrderStatus status);
    List<Order> findByUser(User user);
}
