import 'react-toastify/dist/ReactToastify.css';
import {Route, Routes} from "react-router";
import {useProducts} from "./hooks/useProducts.tsx";
import {lazy, Suspense} from "react";


function App() {
    const {products, fetchProducts, deleteProduct} = useProducts()

    const HomePage = lazy(() => import("./Pages/HomePage.tsx"))
    const ProductPage = lazy(() => import("./Pages/ProductPage.tsx"))
    const StoragePage = lazy(() => import("./Pages/StoragePage.tsx"))
    const ProductAddForm = lazy(() => import("./components/productAddForm.tsx"))
    return (
        <>
            <h1>Kitchen Storage</h1>
            <Suspense fallback={<div>Loading...</div>}>
            <Routes>

                <Route path={"/"} element={<HomePage/>}/>

                <Route path={"/products"} element={<ProductPage products={products} deleteProduct={deleteProduct}
                                                                fetchProducts={fetchProducts}/>}/>

                <Route path={"/products/add"} element={<ProductAddForm fetchProducts={fetchProducts}/>}/>
                <Route path={"/storage"} element={<StoragePage/>}/>

            </Routes>
            </Suspense>
        </>
    );
}

export default App;
