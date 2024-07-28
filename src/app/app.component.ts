import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import NavComponent from "./nav/nav.component";
import homeComponent from "./home/home.component";
import FooterComponent from "./footer/footer.component"
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavComponent, homeComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app1';
}
