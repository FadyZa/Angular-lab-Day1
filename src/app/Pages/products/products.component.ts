import { Product } from './../../../interfaces/product.interface';
import { Component } from "@angular/core";
import ProductCardComponent from '../../productCard/productCard.component';

@Component({
    selector: "app-products",
    standalone: true,
    imports: [ProductCardComponent],
    templateUrl: "./products.component.html",
    styleUrl: "./products.component.css"
})

export class ProductsComponent {
    products: Product[] = [
        {
            imageUrl: "../../../assets/images/1.jpg",
            title: "labtop",
            price: 3000,
            onSale: true
        },
        {
            imageUrl: "../../../assets/images/2.jpg",
            title: "usb cable",
            price: 140,
            onSale: false
        },
        {
            imageUrl: "../../../assets/images/3.jpg",
            title: "printer",
            price: 5670,
            onSale: true
        },
        {
            imageUrl: "../../../assets/images/4.jpg",
            title: "labtop",
            price: 5600,
            onSale: false
        },
        {
            imageUrl: "../../../assets/images/5.jpg",
            title: "labtop",
            price: 7100,
            onSale: true
        },
        {
            imageUrl: "../../../assets/images/6.jpg",
            title: "labtop",
            price: 4200,
            onSale: true
        },
        {
            imageUrl: "../../../assets/images/7.jpg",
            title: "labtop",
            price: 6100,
            onSale: false
        },
        {
            imageUrl: "../../../assets/images/8.jpg",
            title: "labtop",
            price: 8400,
            onSale: true
        },
        {
            imageUrl: "../../../assets/images/9.jpg",
            title: "labtop",
            price: 4580,
            onSale: false
        },
        {
            imageUrl: "../../../assets/images/9.jpg",
            title: "labtop",
            price: 4580,
            onSale: true
        },
        {
            imageUrl: "../../../assets/images/10.jpg",
            title: "labtop",
            price: 6720,
            onSale: true
        },
    ]
}