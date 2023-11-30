import 'react-toastify/dist/ReactToastify.css';
import {Route, Routes} from "react-router";
import HomePage from "./Pages/HomePage.tsx";
import StoragePage from "./Pages/StoragePage.tsx";
import {useStorageLocation} from "./hooks/useStorageLocation.tsx";
import StorageDetailComponent from "./components/StorageDetailComponent.tsx";

function App() {
    const {storageLocations, fetchStorageLocations, deleteStorageLocation} = useStorageLocation();

    return (
        <Routes>
            <Route path={"/"} element={<HomePage/>}/>

            <Route path={"/storage"} element={<StoragePage storageLocations={storageLocations}
                                                           fetchStorageLocations={fetchStorageLocations}
                                                           deleteStorageLocation={deleteStorageLocation}
            />}/>

            <Route path={"/storage/:id"} element={<StorageDetailComponent/>}/>
        </Routes>
    );
}

export default App;
