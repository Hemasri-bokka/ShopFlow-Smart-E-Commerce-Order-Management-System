package com.examly.springapp.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.examly.springapp.model.Order;
import com.examly.springapp.service.OrderServiceImpl;

@RestController
public class OrderController {
    private OrderServiceImpl ser;

    public OrderController(OrderServiceImpl ser){
        this.ser=ser;
    }

    @PostMapping("/api/orders")
    public ResponseEntity<Order> addorder(@RequestBody Order order){
        Order found = ser.addorder(order);
        if(found==null){
            return ResponseEntity.status(403).build();
        }
        return ResponseEntity.status(201).body(found);
    }

    @GetMapping("/api/orders/{id}")
    public ResponseEntity<Order> getOrderById(@PathVariable long id){
        Order found = ser.getOrderById(id);
        if(found==null){
            return ResponseEntity.status(403).build();
        }
        return ResponseEntity.status(200).body(found);
    }

    @PutMapping("/api/orders/{id}")
    public ResponseEntity<Order> updateOrder(@PathVariable long id, @RequestBody Order updateOrder){
        Order found = ser.updateOrder(id,updateOrder);
        if(found==null){
            return ResponseEntity.status(403).build();
        }
        return ResponseEntity.status(200).body(found);
    }

    @DeleteMapping("/api/orders/{id}")
    public ResponseEntity<Void> deleteOrder(@PathVariable long id){
        ser.deleteOrder(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/api/orders")
    public ResponseEntity<List<Order>> getAllOrders(){
        List<Order> found = ser.getAllOrders();
        if(found==null){
            return ResponseEntity.status(403).build();
        }
        return ResponseEntity.status(200).body(found);
    }

    @GetMapping("/api/orders/user/{userId}")
    public ResponseEntity<List<Order>> getOrdersByUserId(@PathVariable long userId){
        List<Order> found = ser.getOrdersByUserId(userId);
        if(found==null){
            return ResponseEntity.status(403).build();
        }
        return ResponseEntity.status(200).body(found);
    }


}
