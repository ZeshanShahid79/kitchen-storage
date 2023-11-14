import {useNavigate} from "react-router";


function HomePage() {

    const navigateTo = useNavigate()


    return (
        <div>
            <h1>Kitchen Storage</h1>
            <button onClick={() => navigateTo("/storage")} className={"page-button"}>StoragePage</button>
        </div>
    );
}

export default HomePage;