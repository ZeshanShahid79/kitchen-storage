import {ListItemAvatar} from "@mui/material";
import ProductComponent from "./ProductComponent.tsx";
import {StorageLocation} from "../StorageLocation.ts";

type Props = {
    storageLocation: StorageLocation
}

function StorageComponent(props: Props) {
    return (
        <ListItemAvatar sx={{border: 1, m: 2, p: 2}}>
            {props.storageLocation.storageName}
            {props.storageLocation.products.map((product, index) => {
                console.log(product);
                return (
                    <ProductComponent
                        key={product.id}
                        product={product}
                        index={index}
                        deleteProduct={}
                        addOneToProductAmount={}
                    />
                );
            })}
        </ListItemAvatar>
    );
}

export default StorageComponent;