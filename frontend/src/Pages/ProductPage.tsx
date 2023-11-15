import {Product} from "../Product.ts";
import {Box, List} from "@mui/material";
import {useNavigate} from "react-router";
import MemoizedProduct from "./MemoizedProduct.tsx";


type Props = {
    products: Product[]
    deleteProduct: (id: string) => void
    fetchProducts: () => void
    addOneToProductAmount: (product: Product, index: number) => Product[];
}

function ProductPage(props: Props) {

    const navigateTo = useNavigate()


    return (
        <Box alignItems={"center"}>
            <h3>Product List:</h3>
            <List dense={true}>
                {props.products.map((product, index) => (
                    <MemoizedProduct key={product.id} product={product} deleteProduct={props.deleteProduct}
                                      index={index} addOneToProductAmount={props.addOneToProductAmount}/>
                ))}
            </List>
            <button onClick={() => navigateTo("/products/add")}>Add Product</button>
            <button onClick={() => navigateTo("/")}>Back</button>
        </Box>
    );
}

export default ProductPage;