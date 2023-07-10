import {useProducts} from "./useProducts.tsx";


function App() {

    const {products} = useProducts()

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
