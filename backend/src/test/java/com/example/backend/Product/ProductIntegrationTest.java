package com.example.backend.Product;

import com.example.backend.products.Product;
import com.example.backend.products.ProductRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;


@SpringBootTest
@AutoConfigureMockMvc
class ProductIntegrationTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper objectMapper;

    @Autowired
    ProductRepository productRepository;

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
        Product product = new Product(null, "apple", null);

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

    @DirtiesContext
    @Test
    void deleteProductByIdAndExpectStatus200() throws Exception {
        //GIVEN es muss ein Produkt in der DB vorhanden sein damit wir es löschen können
        Product existingProduct = new Product("123", "apple", null);
        productRepository.save(existingProduct);

        //WHEN
        mockMvc.perform(MockMvcRequestBuilders.delete("/api/products/123"))
                //THEN
                .andExpect(status().isOk());
    }

}
