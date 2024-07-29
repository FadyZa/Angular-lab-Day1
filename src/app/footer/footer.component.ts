import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export default class FooterComponent {
  logoUrl: string = "../../assets/images/Jumia-Logo.png";
}
