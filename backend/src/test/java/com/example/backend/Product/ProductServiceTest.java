package com.example.backend.Product;

import com.example.backend.products.*;
import org.junit.jupiter.api.Test;

import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

class ProductServiceTest {

    ProductRepository productRepository = mock(ProductRepository.class);
    UuidService uuidService = mock(UuidService.class);
    ProductService productService = new ProductService(productRepository,uuidService);

    @Test
    void getAllProductsAndExpectListWithProduct() {
        //given
        Product testProduct = new Product("wqeasd", "apple", 1);
        List<Product> expected = List.of(testProduct);
        //when
        when(productRepository.findAll()).thenReturn(expected);
        List<Product> actual = productService.getAllProducts();
        //then
        assertEquals(expected,actual);

    }

    @Test
    void addProductAndExpectTheAddedProduct() {
        //given
        Product expected = new Product("wqeasd", "apple", 1);
        ProductWithoutId testProductWithoutId = new ProductWithoutId("apple", 1);
        //then
        when(uuidService.getRandomId()).thenReturn("wqeasd");
        when(productRepository.save(expected)).thenReturn(expected);
        Product actual = productService.addProduct(testProductWithoutId);
        //then
        assertEquals(expected,actual);
    }

    @Test
    void deleteProductById() {
        //given
        Product expected = new Product("wqeasd", "apple", 1);
        //when
        when(productRepository.findById("wqeasd")).thenReturn(Optional.of(expected));
        //then
        Product actual = productService.deleteProductById("wqeasd");
        assertEquals(expected,actual);
    }

}
