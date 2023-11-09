import {useNavigate} from "react-router";


function HomePage() {

    const navigateTo = useNavigate()


    return (
        <div>
            <button onClick={() => navigateTo("/products")}>ProductPage</button>
            <button onClick={() => navigateTo("/storage")}>StoragePage</button>
        </div>
    );
}

export default HomePage;