import 'react-toastify/dist/ReactToastify.css';
import HomePage from "./Pages/HomePage.tsx";
import {Route, Routes} from "react-router";
import ProductPage from "./Pages/ProductPage.tsx";
import {useProducts} from "./hooks/useProducts.tsx";
import ProductAddForm from "./components/productAddForm.tsx";
import StoragePage from "./Pages/StoragePage.tsx";


function App() {
    const {products, fetchProducts, deleteProduct} = useProducts()

    return (
        <>
            <h1>Kitchen Storage</h1>
            <Routes>
                <Route path={"/"} element={<HomePage/>}/>

                <Route path={"/products"} element={<ProductPage products={products} deleteProduct={deleteProduct}
                                                                fetchProducts={fetchProducts}/>}/>

                <Route path={"/products/add"} element={<ProductAddForm fetchProducts={fetchProducts}/>}/>
                <Route path={"/storage"} element={<StoragePage/>}/>
            </Routes>
        </>
    );
}

export default App;
