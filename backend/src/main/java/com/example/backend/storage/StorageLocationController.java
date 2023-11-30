package com.example.backend.storage;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/storage")
@RequiredArgsConstructor
public class StorageLocationController {

    private final StorageService storageService;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public StorageLocation addStorageLocation(@RequestBody StorageLocationRequest storageLocationRequest) {
        return storageService.addStorage(storageLocationRequest);
    }

    @GetMapping
    public List<StorageLocation> getAllStorageLocations() {
        return storageService.getAllStorageLocations();
    }

    @GetMapping("{id}")
    public StorageLocation getStorageLocationById(@PathVariable String id) {
        return storageService.getStorageLocationById(id);
    }


    @PutMapping("{id}")
    public StorageLocation updateStorageLocation(@PathVariable String id, @RequestBody StorageLocationRequest storageLocationRequest) {
        return storageService.updateStorage(id, storageLocationRequest);
    }

    @DeleteMapping("{id}")
    public void deleteStorageLocation(@PathVariable String id) {
        storageService.deleteStorage(id);
    }
}
