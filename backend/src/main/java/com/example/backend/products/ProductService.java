package com.example.backend.products;

import com.example.backend.utils.UuidService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ProductService {

    private final ProductRepository productRepository;
    private final UuidService uuidService;

    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    public Product addProduct(ProductWithoutId productWithoutId) {
        String id = uuidService.getRandomId();
        Product productToSave = new Product(id, productWithoutId.productName(), productWithoutId.amount());
        return productRepository.save(productToSave);
    }

    public Product deleteProductById(String id) {
        Optional<Product> productToDelete = productRepository.findById(id);
        if (productToDelete.isPresent()) {
            Product deleteProduct = productToDelete.get();
            productRepository.deleteById(id);
            return deleteProduct;
        }
        throw new NoSuchElementException("No such Product with this Id");
    }
}
