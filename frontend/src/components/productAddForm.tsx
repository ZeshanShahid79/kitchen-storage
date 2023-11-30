import {ChangeEvent, FormEvent, useState} from 'react'
import {AddProductRequest} from "../Product.ts";

type Props = {
    updateId: string
    addProduct: (product: AddProductRequest) => void
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
        setProductName("")
        setAmount(0)
    }


    return (

            <form onSubmit={handleSubmit}>
                <input value={productName} onChange={handleProductNameInput} placeholder={'ProductName'}/>
                <input value={amount} onChange={handleProductAmount} placeholder={""}
                       type={"number"}/>
                <button type="submit">
                    Add
                </button>
            </form>
    );
}

export default ProductAddForm;
