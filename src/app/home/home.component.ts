import { Component } from "@angular/core";
import ProductComponent from "./product/product.component";
import CategoryComponent from "./category/category.component";

@Component({
    selector:"home",
    standalone:true,
    imports: [ProductComponent,CategoryComponent],
    templateUrl:"./home.component.html",
    styleUrl:"./home.component.css"
})

export default class homeComponent {
    
}