import {ChangeEvent, FormEvent, useState} from 'react';
import axios from "axios";
import {toast} from "react-toastify";
import {List} from "@mui/material";
import {StorageLocation} from "../StorageLocation.ts";
import StorageComponent from "../components/StorageComponent.tsx";
import {useNavigate} from "react-router";


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
            <h1>Storage:</h1>
            <List dense={true}>
                {props.storageLocations.map(storageLocation => (
                    <div key={storageLocation.id}>
                        <StorageComponent storageLocation={storageLocation}/>
                        <button onClick={() => props.deleteStorageLocation(storageLocation.id)}>delete</button>
                    </div>
                ))}
            </List>


            <form onSubmit={handleSubmit}>
                <input value={storageName} onChange={handleStorageLocation} placeholder={"Storage"}/>
                <button type="submit">Add</button>
            </form>
            <button onClick={() => navigateTo("/")}>Back</button>
        </>
    );
}

export default StoragePage;
