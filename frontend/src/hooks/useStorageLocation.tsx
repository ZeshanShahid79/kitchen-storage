import {useEffect, useState} from "react";
import {StorageLocation} from "../StorageLocation.ts";
import axios from "axios";
import {toast} from "react-toastify";

export const useStorageLocation = () => {
    const [storageLocations, setStorageLocations] = useState<StorageLocation[]>([])

    useEffect(() => {
        fetchStorageLocations()
    }, []);

    function fetchStorageLocations() {
        axios
            .get("/api/storage")
            .then(response => {
                const responseData = response.data as StorageLocation[]
                setStorageLocations(responseData)
            })
            .catch(() => {
                toast.error("Error fetching products")
            })
    }

    return {storageLocations, fetchStorageLocations}
}