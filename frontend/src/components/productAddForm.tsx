import {ChangeEvent, FormEvent, useState} from 'react';
import axios from 'axios';
import {toast} from 'react-toastify';
import {Button, TextField} from '@mui/material';
import {ProductWithoutId} from "../Product.ts";


type Props = {
    fetchProducts: () => void;
}

function ProductAddForm(props: Props) {
    const [productName, setProductName] = useState<string>("");
    const [image, setImage] = useState<File>();


    const addProduct = (): void => {
        const data = new FormData()
        const ProductWithoutId: ProductWithoutId = {
            productName: productName
        }


        if (image) {
            data.append("file", image)
        }
        data.append("data", new Blob([JSON.stringify(ProductWithoutId)], {type: "application/json"})) // oder wenn es ein Object ist, statt [productname,{options}] nehmen wir dann  [JSON.stringify(object),{options}] --- Frage muss es hier ein Blob geben

        axios
            .post('api/products', data, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
            .then(() => {
                toast.success('Added: ' + productName);
                props.fetchProducts()
                setProductName('');
                setImage(undefined)
            })
            .catch((error: string) => {
                toast.error('Error adding product' + error); // Frage an Florian wie komme ich an den statusText
            });
    };

    function handleProductNameInput(event: ChangeEvent<HTMLInputElement>) {
        setProductName(event.target.value);
    }

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        addProduct();
    }

    function handleImageInput(event: ChangeEvent<HTMLInputElement>) {
        if (event.target.files) {
            setImage(event.target.files[0])
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <TextField value={productName} onChange={handleProductNameInput} label={'ProductName'} size={'small'}/>
            <input type={"file"} onChange={handleImageInput}/>
            <Button variant={'contained'} size={'large'} type="submit">
                Add
            </Button>
        </form>
    );
}

export default ProductAddForm;
