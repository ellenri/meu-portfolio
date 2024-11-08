import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {


  constructor() { }

  public toggleSidebar() {

   var navigationHeader = document.getElementById("navigation-header");

    if (navigationHeader) {

      if (navigationHeader.classList.contains('active')) {
        navigationHeader.classList.remove('active');
      } else {
        navigationHeader.classList.add('active');
      }
    } else {
      console.error("Elemento com ID 'navigation-header' não encontrado.");
    }
  }

}
