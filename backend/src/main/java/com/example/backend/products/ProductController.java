package com.example.backend.products;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/products")
@RequiredArgsConstructor
public class ProductController {

    private final ProductService productService;

    @GetMapping
    List<Product> getAllProducts() {
        return productService.getAllProducts();
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    Product addProduct(@RequestBody ProductWithoutId productWithoutId) {
        return productService.addProduct(productWithoutId);
    }
    @DeleteMapping("/{id}")
    Product deleteProductById(@PathVariable String id){
        return productService.deleteProductById(id);
    }
}
