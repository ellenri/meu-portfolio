import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
 import { HeaderComponent } from "./components/header/header.component";
import { InicioComponent } from './components/inicio/inicio.component';
// import { SobreComponent } from './components/sobre/sobre.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, InicioComponent/*, SobreComponent*/],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'meu-portfolio';
}
