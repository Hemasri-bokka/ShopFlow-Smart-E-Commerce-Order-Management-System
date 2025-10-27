package com.examly.springapp.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.examly.springapp.model.Order;
import com.examly.springapp.model.User;
import com.examly.springapp.model.enums.OrderStatus;

public interface OrderRepo extends JpaRepository<Order,Long>{
    List<Order> findByStatus(OrderStatus status);
    List<Order> findByUser(User user);


    @Query("select o from Order o where o.userId =:id")
    List<Order> findByUserId(@Param("id") long id);
}
