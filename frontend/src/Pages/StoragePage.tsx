import {ChangeEvent, FormEvent, useState} from 'react';
import axios from "axios";
import {toast} from "react-toastify";
import {Button, List, TextField} from "@mui/material";
import {useNavigate} from "react-router";
import {StorageLocation} from "../StorageLocation.ts";
import {Product} from "../Product.ts";
import StorageComponent from "../components/StorageComponent.tsx";
import ProductComponent from "../components/ProductComponent.tsx";




type Props = {
    storageLocations: StorageLocation[]
    fetchStorageLocations: () => void
    deleteProduct: (id: string) => void
    addOneToProductAmount: (product: Product, index: number) => void;

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
            .catch(() => {
                toast.error('Error adding product');
            });
    };


    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        addStorage()
    }

    const navigateTo = useNavigate()

    return (
        <>
            <List dense={true}>
                {props.storageLocations.map(storageLocation => (
                    <button key={storageLocation.id} onClick={() => navigateTo(`/` + storageLocation.id)}>
                        <StorageComponent storageLocation={storageLocation}/>
                    </button>
                ))}
            </List>


            <List dense={true}>
                {props.storageLocations.map(storageLocation => (
                    <section key={storageLocation.id}>
                        {storageLocation.storageName}
                        <section>
                            {storageLocation.products.map((product, index) => {
                                console.log(product);
                                return (
                                    <ProductComponent
                                        key={product.id}
                                        product={product}
                                        index={index}
                                        deleteProduct={props.deleteProduct}
                                        addOneToProductAmount={props.addOneToProductAmount}
                                    />
                                );
                            })}
                        </section>
                    </section>
                ))}
            </List>


            <form onSubmit={handleSubmit}>
                <TextField value={storageName} onChange={handleStorageLocation} label={"Storage"} size={"small"}/>
                <Button variant={'contained'} size={'large'} type="submit">ADD</Button>
            </form>
            <button onClick={() => navigateTo("/")}>Back</button>
        </>
    );
}

export default StoragePage;
