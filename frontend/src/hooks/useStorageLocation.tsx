import {useEffect, useState} from "react";
import {StorageLocation} from "../StorageLocation.ts";
import axios from "axios";
import {toast} from "react-toastify";

export const useStorageLocation = () => {
    const [storageLocations, setStorageLocations] = useState<StorageLocation[]>([])
    const [storageLocation, setStorageLocation] = useState<StorageLocation>()

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

    function getStorageById(id: string) {
        axios
            .get(`api/storage/${id}`)
            .then(response => {
                const responseData = response.data as StorageLocation
                setStorageLocation(responseData)
            })
            .catch(error => console.log(error))
    }

    return {storageLocation, storageLocations, fetchStorageLocations, getStorageById}
}