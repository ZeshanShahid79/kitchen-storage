import 'react-toastify/dist/ReactToastify.css';
import {Route, Routes} from "react-router";
import {useProducts} from "./hooks/useProducts.tsx";
import HomePage from "./Pages/HomePage.tsx";
import ProductAddForm from "./components/productAddForm.tsx";
import StoragePage from "./Pages/StoragePage.tsx";
import {useStorageLocation} from "./hooks/useStorageLocation.tsx";
import StorageComponent from "./components/StorageComponent.tsx";

function App() {
    const {deleteProduct, addProduct, addOneToProductAmount} = useProducts();
    const {storageLocations, fetchStorageLocations} = useStorageLocation();

    return (
        <Routes>
            <Route path={"/"} element={<HomePage/>}/>
            <Route
                path={"/products"}
                element={
                    <Routes>
                        <Route path={"add"} element={<ProductAddForm addProduct={addProduct}/>}/>
                    </Routes>
                }
            />
            <Route
                path={"/storage"}
                element={<StoragePage storageLocations={storageLocations} fetchStorageLocations={fetchStorageLocations}
                                      deleteProduct={deleteProduct} addOneToProductAmount={addOneToProductAmount}/>}
            />
            <Route path={"/storage/:id"} element={<StorageComponent/>}/>
        </Routes>
    );
}

export default App;
