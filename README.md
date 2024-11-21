
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
