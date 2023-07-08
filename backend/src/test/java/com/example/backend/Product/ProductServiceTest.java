package com.example.backend.Product;

import com.example.backend.products.Product;
import com.example.backend.products.ProductRepository;
import com.example.backend.products.ProductService;
import org.junit.jupiter.api.Test;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

class ProductServiceTest {

    ProductRepository productRepository = mock(ProductRepository.class);
    ProductService productService = new ProductService(productRepository);

    @Test
    void getAllProducts() {
        //given
        Product testProduct = new Product("wqeasd", "apple");
        List<Product> expected = List.of(testProduct);

        when(productRepository.findAll())
                .thenReturn(expected);

        //when
        List<Product> actual = productService.getAll();

        //then
        assertEquals(expected,actual);

    }
}
