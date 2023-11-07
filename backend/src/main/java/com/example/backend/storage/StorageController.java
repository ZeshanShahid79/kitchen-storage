package com.example.backend.storage;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/storage")
@RequiredArgsConstructor
public class StorageController {

    private final StorageService storageService;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public StorageLocation addStorageLocation(@RequestBody AddStorageLocationRequest addStorageLocationRequest) {
        return storageService.addStorage(addStorageLocationRequest);
    }

}
