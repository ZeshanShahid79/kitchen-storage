import {useProducts} from "../hooks/useProducts.tsx";
import ProductPage from "./ProductPage.tsx";
import StoragePage from "./StoragePage.tsx";
import ProductAddForm from "../components/productAddForm.tsx";


function HomePage() {

    const {products, fetchProducts, deleteProduct} = useProducts()
    return (
        <div>
            <button>ProductPage</button>
            <button>StoragePage</button>
            <ProductPage products={products} deleteProduct={deleteProduct} fetchProducts={fetchProducts}/>
            <StoragePage/>
            <ProductAddForm fetchProducts={fetchProducts}/>
        </div>
    );
}

export default HomePage;