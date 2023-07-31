package com.example.backend.products;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
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
    Product addProduct(@RequestPart("data") ProductWithoutId productWithoutId, @RequestPart(name = "file", required = false) MultipartFile image) throws IOException {
        return productService.addProduct(productWithoutId,image);
    }
}
