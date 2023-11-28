import {Box} from "@mui/material";
import {StorageLocation} from "../StorageLocation.ts";


type Props = {
    storageLocation: StorageLocation;
};

function StorageComponent(props: Props) {


    return (
        <Box sx={{border: 1, m: 2, p: 2}}>
            <p>{props.storageLocation.storageName}</p>
            {props.storageLocation.products.map((product) => (
                <p key={product.id}>{product.productName}</p>
            ))}
        </Box>
    );
}

export default StorageComponent;
