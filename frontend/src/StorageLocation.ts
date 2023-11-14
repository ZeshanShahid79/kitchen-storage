import {Product} from "./Product.ts";

export type StorageLocation = {
    id: string
    storageName: string
    products: Product[]
}

export type AddStorageLocationRequest = {

    storageName: string
    products: Product[]
}