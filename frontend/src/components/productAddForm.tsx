import {ChangeEvent, FormEvent, useState} from 'react';
import axios from 'axios';
import {toast} from 'react-toastify';
import {Button, TextField} from '@mui/material';
import {useNavigate} from "react-router";

type Props = {
    fetchProducts: () => void;
}

function ProductAddForm(props: Props) {
    const [productName, setProductName] = useState<string>('');
    const [amount, setAmount] = useState<string>('');


    const addProduct = (): void => {
        axios
            .post('/api/products', {productName, amount})
            .then(() => {
                toast.success('Added: ' + productName);
                props.fetchProducts()
            })
            .catch(() => {
                toast.error('Error adding product');
            });
    };

    function handleProductNameInput(event: ChangeEvent<HTMLInputElement>) {
        setProductName(event.target.value);
    }

    function handleProductAmount(event: ChangeEvent<HTMLInputElement>) {
        setAmount(event.target.value);
    }

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        addProduct();
        setProductName('')
        setAmount("")
    }

    const navigateTo = useNavigate()

    return (
        <>
        <form onSubmit={handleSubmit}>
            <TextField value={productName} onChange={handleProductNameInput} label={'ProductName'} size={'small'}/>
            <TextField value={amount} onChange={handleProductAmount} label={'Amount'} size={'small'} type={"number"}/>
            <Button variant={'contained'} size={'large'} type="submit">
                Add
            </Button>
        </form>
            <button onClick={() => navigateTo("/products")}>Back</button>
        </>
    );
}

export default ProductAddForm;
