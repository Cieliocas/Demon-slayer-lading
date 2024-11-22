
# **Projeto: Landing Page - Demon Slayer**  

## **Descrição do Projeto**
Este projeto é uma landing page inspirada na série *Demon Slayer*, combinando design moderno, interatividade e responsividade. O site possui diversas seções, incluindo um herói visualmente impressionante, cartões informativos, e componentes interativos como navegação e carrossel.  

---

## **Recursos e Tecnologias**
- **HTML5**: Estrutura semântica bem organizada para todas as seções do site.  
- **SCSS (Sass)**: Estilização avançada e organizada, utilizando recursos como:  
  - Variáveis para controle de cores e consistência visual.  
  - Mixins para reutilização de estilos.  
  - Modulação de arquivos para facilitar manutenção.  
- **JavaScript**: Adiciona interatividade e dinamismo ao site, incluindo:  
  - Menu de navegação responsivo com alternância visível no mobile.  
  - Carrossel dinâmico de projetos com o Swiper.js.  
  - Alteração de estilo de header ao rolar a página.  
- **Bootstrap**: Utilizado para estruturação responsiva e dark mode.  
- **Metodologia BEM**: Organização clara e escalável de classes CSS.  
- **Gulp.js**: Automatização de tarefas, como:  
  - Compilação de SCSS para CSS.  
  - Otimização de imagens.  

---

## **Funcionalidades**
1. **Seção Hero**:  
   - Navegação responsiva com menu expansível no mobile.  
   - Título animado e botões com estilos primário e outline.  
2. **Seção de Personagens**:  
   - Cartões interativos com imagens, nomes e efeitos de hover.  
   - Layout responsivo para diferentes tamanhos de tela.  
3. **Seção de Projetos (Swiper.js)**:  
   - Carrossel funcional com múltiplos projetos e links clicáveis.  
   - Suporte a deslizar para dispositivos móveis.  
4. **Dark Mode**:  
   - Implementação de tema escuro apenas com Bootstrap.  

---

## **Como Utilizar o Projeto**
1. Clone este repositório:  
   ```bash
   git clone https://github.com/cieliocas/demon-slayer-landing-page.git
   ```
2. Instale as dependências do projeto:  
   ```bash
   npm install
   ```
3. Execute o servidor local para visualização:  
   ```bash
   gulp
   ```
4. Abra o arquivo `index.html` no navegador ou utilize o *Live Server*.  

---

## **Estrutura de Diretórios**
```plaintext
├── images/                     # Imagens do site
├── js/                         # Scripts JavaScript
│   └── main.js                 # Scripts principais
├── scss/                       # Arquivos SCSS organizados
│   ├── _colors.scss            # Paleta de cores
│   ├── _hero.scss              # Estilização da seção Hero
│   ├── _characters.scss        # Estilização da seção de personagens
│   ├── _swiper.scss            # Estilos personalizados do carrossel
│   └── main.scss               # Estilos gerais e imports
├── gulpfile.js                 # Configuração do Gulp.js
├── package.json                # Configuração do projeto
├── index.html                  # Estrutura HTML principal
└── README.md                   # Documentação do projeto
```

---

## **Roadmap**
- [ ] Finalizar todos os links dos projetos no carrossel.  
- [ ] Adicionar animações CSS extras para transições entre seções.  
- [ ] Melhorar a acessibilidade e compatibilidade com leitores de tela.  
- [ ] Testar e corrigir bugs em navegadores antigos.  

---

## **Contribuições**
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.  

---

## **Licença**
Este projeto é open-source e está licenciado sob os termos da [MIT License](LICENSE).  



# **Project: Landing Page - Demon Slayer**  

## **Project Description**
This project is a landing page inspired by the *Demon Slayer* series, combining modern design, interactivity, and responsiveness. The website features multiple sections, including a visually striking hero, informative cards, and interactive components like navigation and carousel.  

---

## **Features and Technologies**
- **HTML5**: Well-organized semantic structure for all sections of the site.  
- **SCSS (Sass)**: Advanced and organized styling, using features like:
  - Variables for color control and visual consistency.  
  - Mixins for style reuse.  
  - File modularity for easier maintenance.  
- **JavaScript**: Adds interactivity and dynamism to the site, including:
  - Responsive navigation menu with visible toggle on mobile.  
  - Dynamic project carousel using Swiper.js.  
  - Header style change on page scroll.  
- **Bootstrap**: Used for responsive structuring and dark mode.  
- **BEM Methodology**: Clear and scalable CSS class organization.  
- **Gulp.js**: Task automation, such as:
  - SCSS to CSS compilation.  
  - Image optimization.  

---

## **Functionalities**
1. **Hero Section**:  
   - Responsive navigation with expandable menu on mobile.  
   - Animated title and buttons with primary and outline styles.  
2. **Characters Section**:  
   - Interactive cards with images, names, and hover effects.  
   - Responsive layout for different screen sizes.  
3. **Projects Section (Swiper.js)**:  
   - Functional carousel with multiple projects and clickable links.  
   - Mobile swipe support.  
4. **Dark Mode**:  
   - Dark theme implementation using Bootstrap only.  

---

## **How to Use the Project**
1. Clone this repository:  
   ```bash
   git clone https://github.com/cieliocas/demon-slayer-landing-page.git
   ```
2. Install the project dependencies:  
   ```bash
   npm install
   ```
3. Run the local server for preview:  
   ```bash
   gulp
   ```
4. Open the `index.html` file in the browser or use *Live Server*.  

---

## **Directory Structure**
```plaintext
├── images/                     # Website images
├── js/                         # JavaScript scripts
│   └── main.js                 # Main scripts
├── scss/                       # Organized SCSS files
│   ├── _colors.scss            # Color palette
│   ├── _hero.scss              # Hero section styling
│   ├── _characters.scss        # Characters section styling
│   ├── _swiper.scss            # Custom styles for the carousel
│   └── main.scss               # General styles and imports
├── gulpfile.js                 # Gulp.js configuration
├── package.json                # Project configuration
├── index.html                  # Main HTML structure
└── README.md                   # Project documentation
```

---

## **Roadmap**
- [ ] Finalize all project links in the carousel.  
- [ ] Add extra CSS animations for section transitions.  
- [ ] Improve accessibility and compatibility with screen readers.  
- [ ] Test and fix bugs in older browsers.  

---

## **Contributions**
Contributions are welcome! Feel free to open issues or submit pull requests.  

---

## **License**
This project is open-source and licensed under the terms of the [MIT License](LICENSE).  

