import 'react-toastify/dist/ReactToastify.css';
import {Route, Routes} from "react-router";
import HomePage from "./Pages/HomePage.tsx";
import StoragePage from "./Pages/StoragePage.tsx";
import StorageComponent from "./components/StorageComponent.tsx";
import {useStorageLocation} from "./hooks/useStorageLocation.tsx";

function App() {
    const {storageLocation, storageLocations, fetchStorageLocations, getStorageById} = useStorageLocation();

    return (
        <Routes>
            <Route path={"/"} element={<HomePage/>}/>

            <Route path={"/storage"} element={<StoragePage storageLocations={storageLocations}
                                                           fetchStorageLocations={fetchStorageLocations}
                                                           getStorageById={getStorageById}/>}
            />

            <Route path={"/storage/:id"} element={<StorageComponent storageLocation={storageLocation}/>}/>
        </Routes>
    );
}

export default App;
