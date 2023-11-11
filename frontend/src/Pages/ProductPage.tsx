import {Product} from "../Product.ts";
import {Box, List, ListItem, ListItemAvatar} from "@mui/material";
import {useNavigate} from "react-router";


type Props = {
    products: Product[]
    deleteProduct: (id: string) => void
    fetchProducts: () => void
}

function ProductPage(props: Props) {

    const navigateTo = useNavigate()

    return (
        <Box alignItems={"center"}>
            <h3>Product List:</h3>
            <List dense={true}>
                {props.products.map(product => (
                    <ListItemAvatar sx={{border: 1, m: 2, p: 2}}
                                    key={product.id}>{product.productName}<ListItem>{product.amount}</ListItem>
                        <button onClick={() => props.deleteProduct(product.id)}>delete</button>
                    </ListItemAvatar>
                ))}
            </List>
            <button onClick={() => navigateTo("/products/add")}>Add Product</button>
            <button onClick={() => navigateTo("/")}>Back</button>
        </Box>
    );
}

export default ProductPage;