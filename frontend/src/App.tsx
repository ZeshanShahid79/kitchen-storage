import axios from "axios";
import {useEffect, useState} from "react";
import {Product} from "./Product";

function App() {
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
                console.error("Error fetching products:", error);
            });
    }

    return (
        <>
            <h1>Kitchen Storage</h1>
            <h3>Product List:</h3>

            {products.map(product => (
                <div key={product.id}>{product.productName}</div>
            ))}
        </>
    );
}

export default App;
