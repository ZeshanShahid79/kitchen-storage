import {Box} from "@mui/material";
import {StorageLocation} from "../StorageLocation.ts";
import {useNavigate} from "react-router";


type Props = {
    storageLocation: StorageLocation;
};

function StorageComponent(props: Props) {
    const navigateTo = useNavigate()
    const amount: string = props.storageLocation.products ? props.storageLocation.products.length.toString() : "0"
    return (
        <Box sx={{border: 1, m: 2, p: 2}}>
            <p>{props.storageLocation.storageName}</p>
            <p>{"Items: " + amount}</p>
            <button onClick={() => navigateTo("/storage/" + props.storageLocation.id)}>GO TO</button>
        </Box>
    );
}

export default StorageComponent;
