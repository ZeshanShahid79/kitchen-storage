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
        const updatedProduct =
            product ? {...product, amount: product.amount - 1} : product;
        setProduct(updatedProduct)
    }

    function handleIncrement() {
        const updatedProduct =
            product ? {...product, amount: product.amount + 1} : product;
        setProduct(updatedProduct)
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