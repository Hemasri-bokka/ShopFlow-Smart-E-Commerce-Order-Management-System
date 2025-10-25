package com.examly.springapp.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.examly.springapp.model.Product;
import com.examly.springapp.repository.ProductRepo;
@Service
public class ProductServiceImpl implements ProductService{

    private ProductRepo prepo;

    public ProductServiceImpl(ProductRepo prepo){
        this.prepo = prepo;
    }

    @Override
    public Product addProduct(Product product) {
        return prepo.save(product);
    }

    @Override
    public void deleteProduct(Long id) {
         prepo.deleteById(id);
    }

    @Override
    public List<Product> getAllProducts() {
      return prepo.findAll();
    }

    @Override
    public Product getProductById(Long id) {
       return prepo.findById(id).orElse(null);
    }

    // @Override
    // public List<Product> getProductByUserId(Long userId) {
       
    // }

    @Override
    public List<Product> getProductsByCategory(String category) {
        return prepo.findByCategory(category);
    }

    // @Override
    // public Product updateProduct(Long productId, ProductRequest productRequest) {
       
    //     return null;
    // }

    
}
