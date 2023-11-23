import {Box} from "@mui/material";
import {StorageLocation} from "../StorageLocation.ts";


type Props = {
    storageLocation: StorageLocation;
};

function StorageComponent(props: Props) {

    console.log(props.storageLocation)
    return (
        <Box sx={{border: 1, m: 2, p: 2}}>
            <p>{props.storageLocation.storageName}</p>
            {props.storageLocation.products.map((product, index) => (
                <p key={index}>{product.productName}</p>
            ))}
        </Box>
    );
}

export default StorageComponent;
