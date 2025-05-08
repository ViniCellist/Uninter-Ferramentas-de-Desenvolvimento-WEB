function mostrar(secao) {
    const conteudo = document.getElementById("conteudo");
  
    const secoes = {
      sobre: `
        <h2>Sobre Mim</h2>
        <p>Olá, seja bem-vindo ao meu portfólio! Eu me chamo Vinícius de Souza Duarte, um aspirante e curioso estudante da área de TI.</p>
        <p>Começei minha jornada como Analista de Redes, trabalhei tanto na rede lógica quanto na infraestrutura. A medida que os anos se passaram, fui criando um interesse pela programação, e hoje trabalho como Desenvolvedor Front-end!</p>
        <p>Utilizando das seguintes técnologias:</p>
        <ul>
            <li>React</li>
            <li>Bootstrap</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
        </ul>
        <p>Continuo estudando e me aplicando diariamente para transformar e enriquecer meus conhecimentos.</p>
      `,
      formacao: `
        <h2>Formação</h2>
        <h3>Alura - Full-Stack Developer</h3>
        <p>Front-end: HTML5, CSS3, JavaScript, TypeScript, SASS, Tailwind, Bootstrap, React</p>
        <p>Back-end: C#</p>

      `,
      projetos: `
        <h2>Projetos</h2>
        <div class="projeto">
          <h3>Projeto 1</h3>
          <p>Descrição do projeto 1.</p>
        </div>
        <div class="projeto">
          <h3>Projeto 2</h3>
          <p>Descrição do projeto 2.</p>
        </div>
      `,
      contato: `
        <h2>Contato</h2>
        <p>Você pode me encontrar no <a href="https://github.com/seuusuario" target="_blank">GitHub</a>.</p>
      `
    };
  
    conteudo.innerHTML = secoes[secao];
  }
  
  window.onload = () => {
    mostrar('sobre');
  };
  