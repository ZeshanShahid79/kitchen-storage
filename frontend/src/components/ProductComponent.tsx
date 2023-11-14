import {ListItem, ListItemAvatar} from "@mui/material";
import {Product} from "../Product.ts";
import {useState} from "react";

type Props = {
    product: Product
    deleteProduct: (id: string) => void
}

function ProductComponent(props: Props) {

    const [product, setProduct] = useState(props.product)

    function handleDecrement() {
        setProduct((prevProduct) => ({
            ...prevProduct,
            amount: prevProduct.amount - 1,
        }))
    }

    function handleIncrement() {
        setProduct((prevProduct) => ({
            ...prevProduct,
            amount: prevProduct.amount + 1,
        }))
    }

    return (
        <ListItemAvatar sx={{border: 1, m: 2, p: 2}}
                        key={product.id}>{product.productName}<ListItem>{product.amount}</ListItem>
            <button onClick={() => props.deleteProduct(product.id)}>delete</button>
            <button onClick={handleDecrement}>-</button>
            <button onClick={handleIncrement}>+</button>
        </ListItemAvatar>
    );
}

export default ProductComponent;