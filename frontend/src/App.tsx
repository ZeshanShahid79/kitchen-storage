import {useProducts} from "./hooks/useProducts.tsx";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import ProductAddForm from "./components/productAddForm.tsx";
import {List, ListItem, Stack} from "@mui/material";


function App() {

    const {products} = useProducts()

    return (

        <Stack alignItems={"center"} justifyContent={"center"}>
            <h6>Kitchen Storage</h6>
            <h3>Product List:</h3>
            <List dense={true} sx={{}}>
                {products.map(product => (
                    <ListItem key={product.id}>{product.productName}</ListItem>
                ))}
            </List>
            <ProductAddForm/>
            <ToastContainer/>
        </Stack>

    );
}

export default App;
