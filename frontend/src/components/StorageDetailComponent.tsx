import {useNavigate, useParams} from "react-router";
import {FormEvent, useEffect, useState} from "react";
import {StorageLocation} from "../StorageLocation.ts";
import axios from "axios";
import ProductAddForm from "./productAddForm.tsx";
import {AddProductRequest} from "../Product.ts";


function StorageDetailComponent() {
    const [storageLocation, setStorageLocation] = useState<StorageLocation>({id: "", storageName: '', products: []});
    const {id} = useParams();
    const navigateTo = useNavigate()

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
        console.log(updatedProducts);
        setStorageLocation(prevState => ({...prevState, products: updatedProducts}));
    };
    const addProduct = (product: AddProductRequest) => {
        setStorageLocation(prevState => ({...prevState, products: [...prevState.products, product]}));
    }

    function updateStorage(id: string) {
        console.log(storageLocation);
        const {storageName, products} = storageLocation
        axios
            .put(`/api/storage/${id}`, {storageName, products})
            .then(response => {
                console.log(response);
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
        <>
            <form onSubmit={handleSubmit}>
                <h1>{storageLocation.storageName}</h1>
                {(storageLocation.products || []).map((product, index) => (
                    <div key={product.productName}>

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
            <ProductAddForm updateId={storageLocation.id}
                            addProduct={addProduct}/>
            <button onClick={() => navigateTo("/storage")}>Back</button>
        </>
    );
}

export default StorageDetailComponent;
