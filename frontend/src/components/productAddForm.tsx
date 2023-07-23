import {ChangeEvent, FormEvent, useState} from 'react';
import axios from 'axios';
import {toast} from 'react-toastify';
import {Button, TextField} from '@mui/material';

type Props = {
    fetchProductsAfterAdd: () => void;
}

function ProductAddForm(props: Props) {
    const [productName, setProductName] = useState<string>('');


    const addProduct = (): void => {
        axios
            .post('api/products', {productName: productName})
            .then(() => {
                toast.success('Added: ' + productName);
                props.fetchProductsAfterAdd()
            })
            .catch(() => {
                toast.error('Error adding product');
            });
    };

    function handleProductNameInput(event: ChangeEvent<HTMLInputElement>) {
        setProductName(event.target.value);
    }

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        addProduct();
        setProductName('');

    }

    return (
        <form onSubmit={handleSubmit}>
            <TextField value={productName} onChange={handleProductNameInput} label={'ProductName'} size={'small'}/>
            <Button variant={'contained'} size={'large'} type="submit">
                Add
            </Button>
        </form>
    );
}

export default ProductAddForm;
