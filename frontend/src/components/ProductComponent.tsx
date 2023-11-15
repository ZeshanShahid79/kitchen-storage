import {ListItem, ListItemAvatar} from "@mui/material";
import {Product} from "../Product.ts";


type Props = {
    product: Product
    deleteProduct: (id: string) => void
    index: number
    addOneToProductAmount: (product: Product, index: number) => Product[];
}

function ProductComponent(props: Props) {


    // function handleDecrement() {
    //     setProduct((prevProduct) => ({
    //         ...prevProduct,
    //         amount: prevProduct.amount - 1,
    //     }))
    // }
    //
    // function handleIncrement() {
    //     setProduct((prevProduct) => ({
    //         ...prevProduct,
    //         amount: prevProduct.amount + 1,
    //     }))
    // }

    function handleIncrement() {
        props.addOneToProductAmount(props.product, props.index)
    }

    return (
        <ListItemAvatar sx={{border: 1, m: 2, p: 2}}
                        key={props.product.id}>{props.product.productName}<ListItem>{props.product.amount}</ListItem>
            <button onClick={() => props.deleteProduct(props.product.id)}>delete</button>
            <button onClick={() => (console.log("hello"))}>-</button>
            <button onClick={handleIncrement}>+</button>
        </ListItemAvatar>
    );
}

export default ProductComponent;