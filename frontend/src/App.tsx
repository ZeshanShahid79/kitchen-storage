import {useProducts} from "./hooks/useProducts.tsx";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import ProductAddForm from "./components/productAddForm.tsx";
import {Box, List, ListItem, ListItemAvatar} from "@mui/material";


function App() {

    const {products, fetchProducts, deleteProduct} = useProducts()


    return (
        <>
            <Box alignItems={"center"}>
                <h1>Kitchen Storage</h1>
                <h3>Product List:</h3>
                <List dense={true}>
                    {products.map(product => (
                        <ListItemAvatar sx={{border: 1, m: 2, p: 2}}
                                        key={product.id}>{product.productName}<ListItem>{product.amount}</ListItem>
                            <button onClick={() => deleteProduct(product.id)}>delete</button>
                        </ListItemAvatar>
                    ))}
                </List>
                <ProductAddForm fetchProducts={fetchProducts}/>
                <ToastContainer/>
            </Box>
        </>
    );
}

export default App;
