package com.example.backend.storage;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import java.util.Collections;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
public class StorageIntegrationTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper objectMapper;


    @Test
    void getAllStorageLocationsAndExpectStatus200AndExpectEmptyList() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.get("/api/storage")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(content().json("""
                        []
                        """));

    }

    @Test
    void addStorageAndExpectStatus201AndAddedStorage() throws Exception {

        StorageLocation storage = new StorageLocation(null, "fridge", Collections.emptyList());
        String jasonPayload = objectMapper.writeValueAsString(storage);

        String mvcResult =
                mockMvc.perform(MockMvcRequestBuilders.post("/api/storage")
                                .contentType(MediaType.APPLICATION_JSON)
                                .content(jasonPayload))
                        .andExpect(status().isCreated())
                        .andReturn().getResponse().getContentAsString();

        StorageLocation addedStorage = objectMapper.readValue(mvcResult, StorageLocation.class);

        mockMvc.perform(MockMvcRequestBuilders.get("/api/storage"))
                .andExpect(status().isOk()).andExpect(content().json("""
                        [{"id": "<id>",
                        "storageName": "fridge",
                        "products": []}]
                        """.replace("<id>", addedStorage.id())));


    }
}
