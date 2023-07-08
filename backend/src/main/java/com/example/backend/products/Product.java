package com.example.backend.products;

import org.springframework.data.mongodb.core.mapping.Document;

@Document("products")
public record Product(
        String id,
        String productName
) {
}
