import {useProducts} from "./hooks/useProducts.tsx";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import ProductAddForm from "./components/productAddForm.tsx";
import {Box, List, ListItemAvatar} from "@mui/material";


function App() {

    const {products, fetchProductsAfterAdd} = useProducts()

    return (
        <>
            <Box alignItems={"center"}>
                <h1>Kitchen Storage</h1>
                <h3>Product List:</h3>
                <List dense={true}>
                    {products.map(product => (
                        <ListItemAvatar sx={{border: 1, m: 2, p: 2}}
                                        key={product.id}>{product.productName}</ListItemAvatar>
                    ))}
                </List>
                <ProductAddForm fetchProductsAfterAdd={fetchProductsAfterAdd}/>
                <ToastContainer/>
            </Box>
        </>
    );
}

export default App;
