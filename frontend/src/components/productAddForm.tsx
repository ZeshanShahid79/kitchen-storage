import {ChangeEvent, FormEvent, useState} from 'react';
import {Button, TextField} from '@mui/material';
import {useNavigate} from "react-router";
import {AddProductRequest, Product} from "../Product.ts";


type Props = {
    addProduct: (product: AddProductRequest) => Promise<Product>;
}

function ProductAddForm(props: Props) {
    const [productName, setProductName] = useState<string>("");
    const [amount, setAmount] = useState<number>(0);


    function handleProductNameInput(event: ChangeEvent<HTMLInputElement>) {
        setProductName(event.target.value);
    }

    function handleProductAmount(event: ChangeEvent<HTMLInputElement>) {
        setAmount(event.target.valueAsNumber);
    }

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        props.addProduct({productName, amount})
            .then((_product) => {         // hier könnte man das promise entgegen nehmen und die werte nutzen z.B für validation usw.
                setProductName("")
                setAmount(0)
            })
            .catch(console.log) // hier könnte eine spezifische fehlermeldung genutzt werden zur validation

    }

    const navigateTo = useNavigate()

    return (
        <>
            <form onSubmit={handleSubmit}>
                <TextField value={productName} onChange={handleProductNameInput} label={'ProductName'} size={'small'}/>
                <TextField value={amount} onChange={handleProductAmount} label={'Amount'} size={'small'}
                           type={"number"}/>
                <Button variant={'contained'} size={'large'} type="submit">
                    Add
                </Button>
            </form>
            <button onClick={() => navigateTo("/products")}>Back</button>
        </>
    );
}

export default ProductAddForm;
