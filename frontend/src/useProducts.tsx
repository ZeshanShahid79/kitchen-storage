import axios from "axios";
import {Product} from "./Product.ts";
import {useEffect, useState} from "react";
import {toast} from 'react-toastify';



export const useProducts = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        getProducts();
    }, []);

    function getProducts() {
        axios
            .get("/api/products")
            .then(response => {
                const responseData = response.data as Product[]
                setProducts(responseData);
            })
            .catch(() => {
                    toast.error("Error fetching products")
            });
    }

    return {products}
}

