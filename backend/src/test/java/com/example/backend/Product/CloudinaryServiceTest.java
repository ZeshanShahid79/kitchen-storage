package com.example.backend.Product;

import com.cloudinary.Cloudinary;
import com.cloudinary.Uploader;
import com.example.backend.products.CloudinaryService;

import static org.mockito.Mockito.mock;

public class CloudinaryServiceTest {

    Cloudinary cloudinary = mock(Cloudinary.class);
    Uploader uploader = mock(Uploader.class);
    CloudinaryService cloudinaryService = new CloudinaryService(cloudinary);
}
