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

  public scrollToElement(elementId: string, event: Event): void {
    event.preventDefault();
    
    // Fechar o menu de navegação se estiver aberto
    const navigationHeader = document.getElementById("navigation-header");
    const hamburgerBtn = document.getElementById("hamburger-btn");
    
    if (navigationHeader && navigationHeader.classList.contains('active')) {
      navigationHeader.classList.remove('active');
      if (hamburgerBtn) {
        hamburgerBtn.style.display = 'block';
      }
    }
    
    // Encontrar o elemento alvo
    const element = document.getElementById(elementId);
    
    if (element) {
      // Rolagem suave para o elemento
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    } else {
      console.error(`Elemento com ID '${elementId}' não encontrado.`);
    }
  }

}
