package com.example.backend.storage;

import com.example.backend.products.Product;

import java.util.List;

public record StorageLocation(
        String id,
        String storageName,
        List<Product> products
) {
}
