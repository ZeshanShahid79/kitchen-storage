import {useParams} from "react-router";
import {FormEvent, useEffect, useState} from "react";
import {StorageLocation} from "../StorageLocation.ts";
import axios from "axios";

function StorageDetailComponent() {
    const [storageLocation, setStorageLocation] = useState<StorageLocation>({id: "", storageName: '', products: []});
    const {id} = useParams();

    useEffect(() => {
        if (id) {
            getStorageById(id);
        }
    }, [id]);

    function getStorageById(id: string) {
        axios
            .get(`/api/storage/${id}`)
            .then(response => {
                const responseData = response.data as StorageLocation;
                setStorageLocation(responseData);
            })
            .catch(error => console.log(error));
    }

    const handleAmountChange = (productIndex: number, newAmount: number) => {
        const updatedProducts = [...storageLocation.products];
        updatedProducts[productIndex] = {
            ...updatedProducts[productIndex],
            amount: newAmount,
        };
        setStorageLocation(prevState => ({...prevState, products: updatedProducts}));
    };

    function updateStorage(id: string) {
        axios
            .put(`/api/storage/${id}`, storageLocation)
            .then(response => {
                const responseData = response.data as StorageLocation;
                setStorageLocation(responseData);
            })
            .catch(error => console.log(error));
    }

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        updateStorage(storageLocation.id)
    }

    if (!storageLocation) {
        return <div>Loading...</div>;
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>{storageLocation.storageName}</h1>
            {storageLocation.products.map((product, index) => (
                <div key={product.id}>

                    <div>
                        {product.productName}
                    </div>
                    <div>
                        {product.amount}
                    </div>
                    <button type={"button"} onClick={() => handleAmountChange(index, product.amount - 1)}>-</button>
                    <button type={"button"} onClick={() => handleAmountChange(index, product.amount + 1)}>+</button>
                </div>
            ))}
            <button type={"submit"}>Save</button>
        </form>
    );
}

export default StorageDetailComponent;
