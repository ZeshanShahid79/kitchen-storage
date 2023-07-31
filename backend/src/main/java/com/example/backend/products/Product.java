package com.example.backend.products;

public record Product(
        String id,
        String productName,
        String url
) {
    public Product(String id, String productName, String url) {
        this.id = id;
        this.productName = productName;
        this.url = url;
    }

    public Product withUrl(String url) {
        return new Product(id,productName,url);
    }
}

