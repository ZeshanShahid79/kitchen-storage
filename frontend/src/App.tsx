import {useProducts} from "./useProducts.tsx";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function App() {

    const {products} = useProducts()

    return (
        <>
            <ToastContainer/>
            <h1>Kitchen Storage</h1>
            <h3>Product List:</h3>

            {products.map(product => (
                <div key={product.id}>{product.productName}</div>
            ))}
        </>
    );
}

export default App;
