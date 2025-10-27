package com.examly.springapp.controller;

public class OrderController {
    private OrderServiceImpl ser;

    public OrderController(OrderServiceImpl ser){
        this.ser=ser;
    }

    @PostMapping("/api/orders")
    public ResponseEntity<Order> addorder(Requestbody Order order){
        Order found = ser.addorder(order);
        if(found==null){
            return ResponseEntity.status(403).build();
        }
        return ResponseEntity.status(201).body(found);
    }

    @GetMapping("/api/orders/{id}")
    public ResponseEntity<Order> getOrderById(PathVariable long id){
        Order found = ser.getOrderById(id);
        if(found==null){
            return ResponseEntity.status(403).build();
        }
        return ResponseEntity.status(200).body(found);
    }

    @PutMapping("/api/orders/{id}")
    public ResponseEntity<Order> getOrderById(PathVariable long id){
        Order found = ser.getOrderById(id);
        if(found==null){
            return ResponseEntity.status(403).build();
        }
        return ResponseEntity.status(200).body(found);
    }


}
