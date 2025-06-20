# Claude.md - Regras de Desenvolvimento

## 🎯 Objetivo do Projeto
Este é um portfólio pessoal em Angular 18 para Ellen, desenvolvedora Full Stack júnior. O foco é apresentar experiência profissional, projetos e habilidades técnicas de forma elegante e responsiva.

## 🧠 Metodologia de Trabalho

### SEMPRE PENSAR ANTES DE AGIR
1. **Análise**: Compreender completamente o contexto da solicitação
2. **Planejamento**: Definir a abordagem e possíveis impactos
3. **Validação**: Considerar alternativas e melhores práticas
4. **Execução**: Implementar com foco na qualidade

### Processo Obrigatório para Cada Tarefa
```
1. 🤔 ANÁLISE: O que precisa ser feito?
2. 📋 PLANEJAMENTO: Como fazer da melhor forma?
3. ⚠️ IMPACTOS: Que arquivos/componentes serão afetados?
4. 🎯 EXECUÇÃO: Implementar com qualidade
5. ✅ VALIDAÇÃO: Verificar se atende aos requisitos
```

## 🏗️ Regras Arquiteturais

### Estrutura do Projeto
- **Componentes**: Separados por responsabilidade (header, inicio, sobre, projetos, footer)
- **Estilos**: CSS modular com classes específicas por componente
- **Assets**: Organizados por tipo (imagens, ícones, fontes)
- **Responsividade**: Mobile-first approach

### Padrões de Desenvolvimento
- **Angular 18**: Utilizar recursos mais recentes (standalone components, signals)
- **TypeScript**: Tipagem forte e interfaces bem definidas
- **CSS**: Animações suaves, transições consistentes
- **Acessibilidade**: Semântica HTML5, atributos ARIA quando necessário

## 🚫 Restrições e Limitações

### NÃO FAZER:
- Não alterar a estrutura base do projeto sem justificativa
- Não adicionar dependências desnecessárias
- Não quebrar a responsividade existente
- Não remover funcionalidades sem consulta prévia
- Não fazer mudanças que afetem o SEO/SSR

### SEMPRE FAZER:
- Manter compatibilidade com Angular 18
- Preservar animações e transições existentes
- Garantir que mudanças sejam responsivas
- Comentar código complexo
- Seguir convenções de nomenclatura Angular

## 🎨 Diretrizes de Design

### Identidade Visual
- **Cores**: Manter paleta existente (verde, roxo, gradientes)
- **Tipografia**: Inter font family
- **Animações**: Suaves e profissionais
- **Layout**: Clean, moderno, foco na usabilidade

### Responsividade
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: 1024px+
- **Breakpoints**: Usar variáveis CSS customizadas

## 🔧 Regras Técnicas

### Componentização
```typescript
// Estrutura padrão de componente
@Component({
  selector: 'app-nome-componente',
  standalone: true,
  imports: [],
  templateUrl: './nome-componente.component.html',
  styleUrl: './nome-componente.component.css'
})
```

### Estilos CSS
- Usar classes específicas por componente
- Evitar !important
- Utilizar CSS Grid/Flexbox para layouts
- Manter consistência nas animações (transition: 0.3s ease)

### Performance
- Lazy loading para imagens
- OnPush change detection strategy quando possível
- Minificar assets
- Otimizar animações CSS

## 📝 Workflow de Desenvolvimento

### Antes de Qualquer Mudança:
1. **Entender o contexto**: Qual problema está sendo resolvido?
2. **Avaliar impacto**: Que partes do sistema serão afetadas?
3. **Planejar solução**: Qual a melhor abordagem?
4. **Considerar alternativas**: Existe uma forma mais simples/elegante?

### Durante o Desenvolvimento:
1. **Implementar incrementalmente**: Pequenas mudanças testáveis
2. **Manter funcionalidades**: Não quebrar o que já funciona
3. **Documentar decisões**: Comentários em código complexo
4. **Testar continuamente**: Verificar em diferentes resoluções

### Após Implementação:
1. **Validar responsividade**: Testar em mobile, tablet, desktop
2. **Verificar performance**: Tempo de carregamento, animações
3. **Confirmar funcionalidade**: Todos os recursos continuam funcionando
4. **Revisar código**: Limpeza e otimização

## 🎯 Contexto Específico do Projeto

### Sobre Ellen (Desenvolvedora)
- **Experiência**: 1 ano e 7 meses em fintech
- **Formação**: Agronomia (UFG), Engenharia de Software (Estácio)
- **Bootcamp**: Gama Academy (2022)
- **Stack Principal**: C# .NET, Angular, TypeScript

### Projetos em Destaque
1. **Vaquinha Online**: React + TypeScript + Supabase + PIX
2. **Encontro de Noivos**: React + TypeScript + Material UI

### Tecnologias do Portfolio
- **Core**: Angular 18, TypeScript, CSS3
- **Server**: Express.js, Angular SSR
- **Estilo**: Animações personalizadas, design responsivo

## ⚡ Princípios de Qualidade

### Performance
- Tempo de carregamento < 3s
- Animações 60fps
- Imagens otimizadas
- Lazy loading implementado

### Usabilidade
- Navegação intuitiva
- Feedback visual em interações
- Acessibilidade (WCAG 2.1)
- Compatibilidade cross-browser

### Manutenibilidade
- Código limpo e bem estruturado
- Componentes reutilizáveis
- Separação de responsabilidades
- Documentação adequada

## 🚨 Alertas Importantes

### ANTES DE MODIFICAR QUALQUER ARQUIVO:
1. Explicar o que será alterado e por quê
2. Listar arquivos que serão afetados
3. Descrever o impacto na funcionalidade
4. Confirmar se mantém a responsividade
5. Validar se preserva a identidade visual

### PERGUNTAS OBRIGATÓRIAS:
- Esta mudança melhora a experiência do usuário?
- Mantém a performance atual?
- É compatível com todos os dispositivos?
- Preserva a acessibilidade?
- Está alinhada com o objetivo do portfólio?

---

**Lembre-se**: Este é um portfólio profissional que representa Ellen como desenvolvedora. Cada mudança deve agregar valor e manter a qualidade técnica e visual do projeto.