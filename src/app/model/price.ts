import { PriceDescription } from "./price-description";

export interface Price {
    title: string, 
    price: string, 
    priceItem: Array<PriceDescription>
}