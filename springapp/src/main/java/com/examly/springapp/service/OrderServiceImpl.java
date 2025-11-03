package com.examly.springapp.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.examly.springapp.model.Order;
import com.examly.springapp.model.Product;
import com.examly.springapp.model.User;
import com.examly.springapp.model.enums.OrderStatus;
import com.examly.springapp.repository.OrderRepo;
import com.examly.springapp.repository.ProductRepo;
import com.examly.springapp.repository.UserRepo;

@Service
public class OrderServiceImpl implements OrderService{
    private OrderRepo orepo;
    private UserRepo urepo;
    private ProductRepo prepo;

    

    public OrderServiceImpl(OrderRepo orepo, UserRepo urepo, ProductRepo prepo) {
        this.orepo = orepo;
        this.urepo = urepo;
        this.prepo = prepo;
    }

    @Override
public Order addorder(Order order) {
    User user = urepo.findById(order.getUser().getUserId())
        .orElseThrow(() -> new RuntimeException("User not found"));

    // Fetch products from DB using IDs
    List<Product> managedProducts = new ArrayList<>();
    for (Product p : order.getProduct()) {
        Product dbProduct = prepo.findById(p.getProductId())
            .orElseThrow(() -> new RuntimeException("Product not found: " + p.getProductId()));
           //added this line(Gladson)
            dbProduct.setUser(user);
            managedProducts.add(dbProduct); 
    } 

    order.setUser(user);
    order.setProduct(managedProducts);
    //added this line(Gladson) 
    prepo.saveAll(managedProducts);
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
        long id = userId;
        return orepo.findByUserId(id);
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
