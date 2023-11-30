import {ChangeEvent, FormEvent, useState} from 'react';
import axios from "axios";
import {toast} from "react-toastify";
import {StorageLocation} from "../StorageLocation.ts";
import StorageComponent from "../components/StorageComponent.tsx";
import {useNavigate} from "react-router";
import "./StoragePage.css"


type Props = {
    storageLocations: StorageLocation[]
    fetchStorageLocations: () => void
    deleteStorageLocation: (id: string) => void

}

function StoragePage(props: Props) {
    const [storageName, setStorageName] = useState("")

    function handleStorageLocation(event: ChangeEvent<HTMLInputElement>) {
        setStorageName(event.target.value)
    }


    const addStorage = (): void => {
        axios
            .post('api/storage', {storageName})
            .then(() => {
                toast.success('Added: ' + storageName);
                setStorageName("")
            })
            .then(props.fetchStorageLocations)
            .catch(() => {
                toast.error('Error adding product');
            });
    };

    const navigateTo = useNavigate()

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        addStorage()
    }


    return (
        <>
            <h1>Storages:</h1>

            {props.storageLocations.map(storageLocation => (
                <div key={storageLocation.id}>
                    <StorageComponent storageLocation={storageLocation}/>
                    <button className={"delete-button"}
                            onClick={() => props.deleteStorageLocation(storageLocation.id)}>delete
                    </button>
                </div>
            ))}


            <form onSubmit={handleSubmit}>
                <input value={storageName} onChange={handleStorageLocation} placeholder={"Storage"}/>
                <button className={"add-button"} type="submit">+</button>
            </form>
            <button onClick={() => navigateTo("/")}>Back</button>
        </>
    );
}

export default StoragePage;
