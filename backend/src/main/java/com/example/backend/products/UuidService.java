package com.example.backend.products;

import org.springframework.stereotype.Service;

import java.util.UUID;
@Service
public class UuidService {

    public String getRandomId(){
        return UUID.randomUUID().toString();
    }

}
