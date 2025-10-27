package com.examly.springapp.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.examly.springapp.model.Order;
import com.examly.springapp.model.User;
import com.examly.springapp.model.enums.OrderStatus;
import com.examly.springapp.repository.OrderRepo;
import com.examly.springapp.repository.UserRepo;

@Service
public class OrderServiceImpl implements OrderService{
    private OrderRepo orepo;
    private UserRepo urepo;

    public OrderServiceImpl(OrderRepo orepo,UserRepo urepo){
        this.orepo=orepo;
        this.urepo=urepo;
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
        return null;
    }

    @Override
    public List<Order> getOrdersByUserId(Long userId) {
        User user = urepo.findById(userId).orElse(null);
        if(user != null){

        }
        return orepo.findByUser(user);
    }

    @Override
    public Order updateOrder(long id, Order updateOrder){
        return orepo.save(updateOrder);
    }

    
}
