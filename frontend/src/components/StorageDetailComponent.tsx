import {useParams} from "react-router";
import {useEffect, useState} from "react";
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

    if (!storageLocation) {
        return <div>Loading...</div>;
    }

    const handleAmountChange = (productIndex: number, newAmount: number) => {
        const updatedProducts = [...storageLocation.products];
        updatedProducts[productIndex] = {
            ...updatedProducts[productIndex],
            amount: newAmount,
        };
        setStorageLocation(prevState => ({...prevState, products: updatedProducts}));
    };
    console.log(storageLocation)
    storageLocation.products.forEach(product => {
        console.log(product.id);
    });
    return (
        <form>
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
