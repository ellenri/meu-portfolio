import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Projeto {
  imagem: string;
  titulo: string;
  descricao: string;
  stack: string;
  links: {
    site?: string;
    github: string;
    api?: string;
  };
}

@Component({
  selector: 'app-projetos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projetos.component.html',
  styleUrl: './projetos.component.css'
})
export class ProjetosComponent {
  currentPage = 0;
  projectsPerPage = 3;
  
  projetos: Projeto[] = [
    {
      imagem: 'assets/presente-dani.png',
      titulo: 'Site de vaquinha online',
      descricao: 'Plataforma de arrecadação coletiva com sistema de doações em tempo real, barra de progresso e geração automática de QR Code PIX. Desenvolvida para facilitar campanhas de financiamento colaborativo.',
      stack: 'React, TypeScript, Vite, Supabase, PIX API',
      links: {
        site: 'https://presente-dani.vercel.app/',
        github: 'https://github.com/ellenri/presente_dani'
      }
    },
    {
      imagem: 'assets/encontro_noivos_project.png',
      titulo: 'Plataforma de Sorteio',
      descricao: 'Sistema de gestão para encontros matrimoniais com algoritmo de sorteio inteligente que conecta casais de noivos com mentores de forma equilibrada. Interface moderna e responsiva.',
      stack: 'React, TypeScript, Material UI, Supabase, React Router',
      links: {
        site: 'https://projeto-encontro-noivos.vercel.app/',
        github: 'https://github.com/ellenri/projeto-encontro-noivos'
      }
    },
    {
      imagem: 'assets/siteFran_MArq.png',
      titulo: 'Site de Casamento',
      descricao: 'Website elegante para celebração de casamento com galeria de fotos, informações do evento, confirmação de presença e seção de presentes. Design romântico e responsivo.',
      stack: 'React, Vite, CSS, JavaScript',
      links: {
        site: 'https://franemarq.vercel.app/',
        github: 'https://github.com/ellenri/site_casamento_fran_marq'
      }
    },
    {
      imagem: 'assets/vaquinha_solidaria.png',
      titulo: 'Vaquinha Solidária',
      descricao: 'Plataforma solidária de arrecadação para ajudar família em momento difícil. Sistema completo com frontend em React e API robusta para gerenciamento de doações e campanhas.',
      stack: 'React, Node.js, Railway, PostgreSQL, API REST',
      links: {
        site: 'https://vaquinha-samuel.vercel.app/',
        github: 'https://github.com/ellenri/vaquinha_samuel',
        api: 'https://github.com/ellenri/vaquinh-samuel-api'
      }
    }
  ];

  get visibleProjects(): Projeto[] {
    const startIndex = 0;
    const endIndex = (this.currentPage + 1) * this.projectsPerPage;
    return this.projetos.slice(startIndex, endIndex);
  }

  get hasMoreProjects(): boolean {
    return this.visibleProjects.length < this.projetos.length;
  }

  get buttonText(): string {
    return this.hasMoreProjects ? 'mais trabalhos' : 'menos trabalhos';
  }

  loadMoreProjects(): void {
    if (this.hasMoreProjects) {
      this.currentPage++;
    } else {
      this.currentPage = 0;
    }
  }
}
