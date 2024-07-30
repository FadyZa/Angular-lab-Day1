import { Routes } from '@angular/router';
import homeComponent from './Pages/home/home.component';
import { AboutComponent } from './Pages/about/about.component';
import { ProductsComponent } from './Pages/products/products.component';

export const routes: Routes = [
    { path: "", redirectTo: "home", pathMatch: "full" },
    { path: "home", component: homeComponent },
    { path: "about", component: AboutComponent },
    { path: "products", component: ProductsComponent }
];
