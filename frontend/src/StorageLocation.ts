import {AddProductRequest, Product} from "./Product.ts";

export type StorageLocation = {
    id: string
    storageName: string
    products: (AddProductRequest)[]
}

export type AddStorageLocationRequest = {

    storageName: string
    products: Product[]
}