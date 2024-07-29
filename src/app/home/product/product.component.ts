import { Component } from "@angular/core";
import { product } from "./product.interface";

@Component({
    selector:"app-product",
    imports:[],
    standalone:true,
    styleUrl:"./product.component.css",
    templateUrl:"./product.component.html"
})
export default class ProductComponent {
    products: product[] = [
        {
            imageUrl:"../../../assets/images/1.jpg",
            title:"labtop",
            price:3000,
            onSale:true
        },
        {
            imageUrl:"../../../assets/images/2.jpg",
            title:"usb cable",
            price:140,
            onSale:false
        },
        {
            imageUrl:"../../../assets/images/3.jpg",
            title:"printer",
            price:5670,
            onSale:true
        },
]
}