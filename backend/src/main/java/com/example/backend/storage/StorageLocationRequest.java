package com.example.backend.storage;


import com.example.backend.products.Product;

import java.util.List;

public record StorageLocationRequest(
        String storageName,
        List<Product> productList

) {
}
