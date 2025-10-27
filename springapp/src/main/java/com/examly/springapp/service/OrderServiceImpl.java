package com.examly.springapp.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.examly.springapp.model.Order;
import com.examly.springapp.model.enums.OrderStatus;
import com.examly.springapp.repository.OrderRepo;

@Service
public class OrderServiceImpl implements OrderService{
    private OrderRepo orepo;

    public OrderServiceImpl(OrderRepo orepo){
        this.orepo=orepo;
    }

    @Override
    public Order addorder(Order order) {
        return orepo.save(order);
    }

    @Override
    public void deleteOrder(long orderId) {
         orepo.deleteById(orderId);
    }

    @Override
    public List<Order> getAllOrders() {
        return orepo.findAll();
    }

    @Override
    public Order getOrderById(long orderId) {
       return orepo.findById(orderId).orElse(null);
    }

    @Override
    public List<Order> getOrdersByStatus(OrderStatus status) {
        return orepo.findByStatus(status);
    }

    @Override
    public List<Order> getOrdersByUser(int userId) {
        long ind = userId;
        //return orepo.findById(userId).orElse(null);
    }

    @Override
    public List<Order> getOrdersByUserId(Long userId) {
        // TODO Auto-generated method stub
        return null;
    }

    
}
