package com.example.backend.storage;

import com.example.backend.utils.UuidService;
import org.junit.jupiter.api.Test;

import java.util.Collections;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

public class StorageServiceTest {

    StorageRepository storageRepository = mock(StorageRepository.class);
    UuidService uuidService = mock(UuidService.class);

    StorageService storageService = new StorageService(storageRepository, uuidService);


    @Test
    void addStorageAndExpectTheAddedProduct() {
        //GIVEN
        StorageLocationRequest newStorage = new StorageLocationRequest("fridge", Collections.emptyList());
        StorageLocation expected = new StorageLocation("asd", "fridge", Collections.emptyList());
        //WHEN
        when(uuidService.getRandomId()).thenReturn("asd");
        when(storageRepository.save(expected)).thenReturn(expected);
        StorageLocation actual = storageService.addStorage(newStorage);
        //THEN
        assertEquals(expected, actual);
    }
}
