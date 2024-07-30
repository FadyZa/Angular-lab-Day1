import { Component } from "@angular/core";
import { category } from "./category.interface";

@Component({
    selector:"app-category",
    standalone:true,
    imports:[],
    styleUrl:"./category.component.css",
    templateUrl:"./category.component.html"
})
export default class CategoryComponent {
    categories:category[] = [
        {
            imageUrl:"../../../assets/images/cat1.jpg",
            category:"Earpuds",
            desc:"Some representative placeholder content for the first slide."
        },
        {
            imageUrl:"../../../assets/images/cat2.jpg",
            category:"Mobile",
            desc:"Some representative placeholder content for the first slide."
        },
        {
            imageUrl:"../../../assets/images/cat3.jpg",
            category:"Tablet",
            desc:"Some representative placeholder content for the first slide."
        }
    ]
}