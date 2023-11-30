package com.example.backend.storage;

import com.example.backend.utils.UuidService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;

@Service
@RequiredArgsConstructor
public class StorageService {

    private final StorageRepository storageRepository;
    private final UuidService uuidService;

    public StorageLocation addStorage(StorageLocationRequest storageLocationRequest) {
        String id = uuidService.getRandomId();
        StorageLocation newStorage = new StorageLocation(id, storageLocationRequest.storageName(), Collections.emptyList());
        return storageRepository.save(newStorage);
    }

    public List<StorageLocation> getAllStorageLocations() {
        return storageRepository.findAll();
    }

    public StorageLocation updateStorage(String id, StorageLocationRequest storageLocationRequest) {
        StorageLocation oldStorage = storageRepository.findById(id).orElseThrow();
        StorageLocation updatedStorage = new StorageLocation(id, oldStorage.storageName(), storageLocationRequest.products());
        return storageRepository.save(updatedStorage);
    }

    public StorageLocation getStorageLocationById(String id) {
        return storageRepository.findById(id).orElseThrow();
    }

    public void deleteStorage(String id) {
        storageRepository.deleteById(id);
    }
}
