package com.examly.springapp.controller;

import com.examly.springapp.service.ProductServiceImpl;

public class ProductController {
    private ProductServiceImpl service;

    public ProductController(ProductServiceImpl service){
        this.service = service;
    }

    @PostMapping("/api/products")
    public ResponseEntity<Product> addProduct( @RequestBody Product product){

    }
}
