import axios from "axios";
import {useEffect, useState} from "react";
import {toast} from 'react-toastify';
import {AddProductRequest, Product} from "../Product.ts";


export const useProducts = () => {
    const [products, setProducts] = useState<Product[]>([]);


    useEffect(() => {
        fetchProducts();
    }, []);

    function addOneToProductAmount(product: Product, index: number) {
        setProducts(prevProducts => {
            const newProducts = [...prevProducts]
            newProducts[index] = {...product, amount: product.amount + 1}
            return newProducts;
        })
    }

    function fetchProducts() {
        axios
            .get("/api/products")
            .then((response) => {
                const responseData = response.data as Product[]
                setProducts(responseData);
            })
            .catch(() => {
                toast.error("Error fetching products")
            });
    }

    function addProduct(product: AddProductRequest) {
        return axios
            .post<Product>('/api/products', product)
            .then((response) => {
                toast.success('Added: ' + response.data.productName);
                setProducts([...products, response.data]) // setter
                return response.data
            })
            .catch((error) => {
                toast.error('Error adding product');
                throw error
            });
    }

    function deleteProduct(id: string) {
        axios
            .delete("/api/products/" + id)
            .then(fetchProducts)
            .catch(() => {
                toast.error("Error deleting product")
            })
    }


    return {products, fetchProducts, deleteProduct, addProduct, addOneToProductAmount}
}

