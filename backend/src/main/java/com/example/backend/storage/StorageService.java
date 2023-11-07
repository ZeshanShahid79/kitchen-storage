package com.example.backend.storage;

import com.example.backend.utils.UuidService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Collections;

@Service
@RequiredArgsConstructor
public class StorageService {

    private final StorageRepository storageRepository;
    private final UuidService uuidService;

    public StorageLocation addStorage(AddStorageLocationRequest addStorageLocationRequest) {
        String id = uuidService.getRandomId();
        StorageLocation newStorage = new StorageLocation(id, addStorageLocationRequest.storageName(), Collections.emptyList());
        return storageRepository.save(newStorage);
    }
}
