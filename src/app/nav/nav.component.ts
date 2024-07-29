import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export default class NavComponent {
  logoUrl:string = "../../assets/images/Jumia-Logo.png"
}
