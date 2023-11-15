import React from "react";
import ProductComponent from "../components/ProductComponent.tsx";


const MemoizedProduct = React.memo(ProductComponent);

export default MemoizedProduct;