package com.example.backend.Product;

import com.example.backend.products.Product;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest
@AutoConfigureMockMvc
class ProductIntegrationTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper objectMapper;

    @Test
    void getAllProductsAndExpectStatus200AndExpectEmptyList() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.get("/api/products"))
                .andExpect(status().isOk())
                .andExpect(content().json("""
                        []
                        """));
    }

    @Test
    @DirtiesContext
    void addProductAndExpectStatus200AndAddedProduct() throws Exception {
        Product product = new Product(null, "apple");

        String jsonPayload = objectMapper.writeValueAsString(product);
        String mvcResult =
                mockMvc.perform(MockMvcRequestBuilders.post("/api/products")
                                .contentType(MediaType.APPLICATION_JSON)
                                .content(jsonPayload))
                        .andExpect(status().isCreated())
                        .andReturn().getResponse().getContentAsString();


        Product addedProduct = objectMapper.readValue(mvcResult, Product.class);

        mockMvc.perform(MockMvcRequestBuilders.get("/api/products")
        ).andExpect(status().isOk()).andExpect(content().json("""
                [{"id": "<id>",
                "productName": "apple"}]
                """.replace("<id>", addedProduct.id())));
    }
}
