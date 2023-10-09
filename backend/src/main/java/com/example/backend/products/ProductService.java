package com.example.backend.products;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ProductService {

    private final ProductRepository productRepository;
    private final UuidService uuidService;
    private final CloudinaryService cloudinaryService;

    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    public Product addProduct(ProductWithoutId productWithoutId, MultipartFile image) throws IOException {
        String id = uuidService.getRandomId();
        Product productToSave = new Product(id, productWithoutId.productName(),null);
        if (image!= null) {
         String url =   cloudinaryService.uploadImage(image);
         productToSave.withUrl(url);
        }

        return productRepository.save(productToSave);
    }
}
