import 'react-toastify/dist/ReactToastify.css';
import {Route, Routes} from "react-router";
import {useProducts} from "./hooks/useProducts.tsx";
import {Suspense} from "react";
import HomePage from "./Pages/HomePage.tsx";
import ProductPage from "./Pages/ProductPage.tsx";
import ProductAddForm from "./components/productAddForm.tsx";
import StoragePage from "./Pages/StoragePage.tsx";
import {useStorageLocation} from "./hooks/useStorageLocation.tsx";


function App() {
    const {products, deleteProduct, addProduct, addOneToProductAmount} = useProducts()
    const {storageLocations, fetchStorageLocations} = useStorageLocation()

    // const HomePage = lazy(() => import("./Pages/HomePage.tsx"))
    // const ProductPage = lazy(() => import("./Pages/ProductPage.tsx"))
    // const StoragePage = lazy(() => import("./Pages/StoragePage.tsx"))
    // const ProductAddForm = lazy(() => import("./components/productAddForm.tsx"))
    return (

        <Suspense fallback={<div>Loading...</div>}>
            <Routes>

                <Route path={"/"} element={<HomePage/>}/>

                <Route path={"/products"} element={<ProductPage products={products} deleteProduct={deleteProduct}
                                                                addOneToProductAmount={addOneToProductAmount}/>}/>

                <Route path={"/products/add"} element={<ProductAddForm addProduct={addProduct}/>}/>
                <Route path={"/storage"} element={<StoragePage storageLocations={storageLocations}
                                                               fetchStorageLocations={fetchStorageLocations}
                                                               deleteProduct={deleteProduct}
                                                               addOneToProductAmount={addOneToProductAmount}/>}/>

            </Routes>
        </Suspense>

    );
}

export default App;
