import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import NavComponent from "./nav/nav.component";
import homeComponent from "./Pages/home/home.component";
import FooterComponent from "./footer/footer.component"
import { AboutComponent } from './Pages/about/about.component';
import { ProductsComponent } from './Pages/products/products.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent, homeComponent, FooterComponent, AboutComponent, ProductsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app1';
}
