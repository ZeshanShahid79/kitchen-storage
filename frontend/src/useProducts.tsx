import axios from "axios";
import {Product} from "./Product.ts";
import {useEffect, useState} from "react";


export const useProducts = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        getProducts();
    }, []);

    function getProducts() {
        axios
            .get("/api/product")
            .then(response => {
                const responseData = response.data as Product[]
                setProducts(responseData);
            })
            .catch(error => {
                console.log("Error fetching products:", error);
            });
    }

    return {products}
}

