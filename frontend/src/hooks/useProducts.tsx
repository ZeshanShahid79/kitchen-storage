import axios from "axios";

import {useEffect, useState} from "react";
import {toast} from 'react-toastify';
import {Product} from "../Product.ts";


export const useProducts = () => {
    const [products, setProducts] = useState<Product[]>([]);

    const BASE_URL = "/api";

    useEffect(() => {
        getProducts();
    }, []);

    function getProducts() {
        axios
            .get(`${BASE_URL}/products`)
            .then(response => {
                const responseData = response.data as Product[]
                setProducts(responseData);
            })
            .catch(() => {
                toast.error("Error fetching products")
            });
    }

    function deleteProduct(id: string) {
        axios
            .delete(`${BASE_URL}/products/` + id)
            .then(getProducts)
            .catch(() => {
                toast.error("Error deleting product")
            })
    }

    function fetchProducts() {
        getProducts()
    }

    return {products, fetchProducts, deleteProduct}
}

