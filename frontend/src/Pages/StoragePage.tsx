import {ChangeEvent, FormEvent, useState} from 'react';
import axios from "axios";
import {toast} from "react-toastify";
import {Button, TextField} from "@mui/material";


function StoragePage() {

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
            .catch(() => {
                toast.error('Error adding product');
            });
    };


    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        addStorage()
    }

    return (
        <form onSubmit={handleSubmit}>
            <TextField value={storageName} onChange={handleStorageLocation} label={"Storage"} size={"small"}/>
            <Button variant={'contained'} size={'large'} type="submit">ADD</Button>
        </form>
    );
}

export default StoragePage;