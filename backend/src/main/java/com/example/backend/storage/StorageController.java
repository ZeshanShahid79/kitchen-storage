package com.example.backend.storage;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/storage")
@RequiredArgsConstructor
public class StorageController {

    private final StorageService storageService;

    @PostMapping
    public Storage addStorageLocation(@RequestBody AddStorageLocationRequest addStorageLocationRequest) {
        return storageService.addStorage(addStorageLocationRequest);
    }

}
