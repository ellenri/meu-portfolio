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
   var hamburgerBtn = document.getElementById("hamburger-btn");

    if (navigationHeader && hamburgerBtn) {
      if (navigationHeader.classList.contains('active')) {
        navigationHeader.classList.remove('active');
        hamburgerBtn.style.display = 'block'; // Show hamburger when menu is closed
      } else {
        navigationHeader.classList.add('active');
        hamburgerBtn.style.display = 'none'; // Hide hamburger when menu is open
      }
    } else {
      console.error("Elemento com ID 'navigation-header' ou 'hamburger-btn' não encontrado.");
    }
  }

}
