import { Component, Input, input } from "@angular/core";
import { Product } from "../../interfaces/product.interface";

@Component({
  selector: "app-productCard",
  imports: [],
  standalone: true,
  styleUrl: "./productCard.component.css",
  templateUrl: "./productCard.component.html"
})
export default class ProductCardComponent {
  @Input() product: Product = {} as Product;
}