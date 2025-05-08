function mostrar(secao) {
    const conteudo = document.getElementById("conteudo");
  
    const secoes = {
      sobre: `
        <div class="sobreMim">
          <h2>Sobre Mim</h2>
          <p>Olá, seja bem-vindo ao meu portfólio! Eu me chamo Vinícius, um aspirante e curioso estudante da área de TI.</p>
          <p>Começei minha jornada como Analista de Redes, trabalhei tanto na rede lógica quanto na infraestrutura. A medida que os anos se passaram, fui criando um interesse pela programação, e hoje trabalho como Desenvolvedor Front-end!</p>
          <p>Utilizando das seguintes técnologias: React, Bootstrap, JavaScript e TypeScript</p>
          <p>Continuo estudando e me aplicando diariamente para transformar e enriquecer meus conhecimentos.</p>
        </div>
        
      `,
      formacao: `
        <h2>Formação</h2>
        <h3>Alura - Full-Stack Developer</h3>
        <p>Tempo de curso: 1 ano</p>
        <p>Técnologias: HTML5, CSS3, JavaScript, TypeScript, SASS, Tailwind, Bootstrap, React, C#.</p>

        <h3>Curso em Vídeo</h3>
        <p>Tempo de curso: 1 ano</p>
        <p>Técnologias: HTML5, CSS3, JavaScript, Git, Github, MySQL</p>

        <h3>Wizard - Inglês</h3>
        <p>Tempo de curso: 6 anos</p>
        <p>Aprendizado de inglês avançado.</p>

        <h3>Academia do Provedor</h3>
        <p>Tempo de curso: 1 ano</p>
        <p>Gestão de projetos, desenvolvimento e implementação de redes FTTx.</p>

        <h3>ETEC - Administração</h3>
        <p>Tempo de curso: 1 ano e 6 meses</p>
        <p>Aprendizado para gerencimento de negócios.</p>
      `,
      projetos: `
        <h2>Projetos</h2>

        <div class="projeto">
          <h3>Projeto Cordel</h3>
          <p>Criação de um site para amostra do efeito Paralax.</p>
                    
          <a href="https://alura-book-mobile.vercel.app" target="_blank">Acessar site</a>

          <div style="margin-top: 1rem;">
            <iframe 
              src="https://curso-em-video-cordel.vercel.app" 
              width="100%" 
              height="500" 
              style="border: 1px solid #ccc; border-radius: 8px;"
              loading="lazy">
            </iframe>
          </div>
        </div>

        <div class="projeto">
          <h3>Alura Meteora</h3>
          <p>Criação de uma vitrine de site para venda de itens de moda.</p>
                    
          <a href="https://alura-book-mobile.vercel.app" target="_blank">Acessar site</a>

          <div style="margin-top: 1rem;">
            <iframe 
              src="https://alura-meteora-gilt.vercel.app" 
              width="100%" 
              height="500" 
              style="border: 1px solid #ccc; border-radius: 8px;"
              loading="lazy">
            </iframe>
          </div>
        </div>

        <div class="projeto">
          <h3>Alura Books</h3>
          <p>Criação de uma vitrine de site para venda de livros.</p>
                    
          <a href="https://alura-book-mobile.vercel.app" target="_blank">Acessar site</a>

          <div style="margin-top: 1rem;">
            <iframe 
              src="https://alura-book-mobile.vercel.app" 
              width="100%" 
              height="500" 
              style="border: 1px solid #ccc; border-radius: 8px;"
              loading="lazy">
            </iframe>
          </div>
        </div>


      `,
      contato: `
        <h2>Contato</h2>
        <div>
          <div>
            <a class="instagram">link instagram</a>
            <a class="facebook">link facebook</a>
            <a class="linkedin">link linkedin</a>
          </div>
          <form action="#" method="post">
            <label for="nome">Nome:</label>
            <input class="inputForm" type="text" id="nome" name="nome" required>

            <label for="email">Email:</label>
            <input class="inputForm" type="email" id="email" name="email" required>

            <label for="mensagem">Mensagem:</label>
            <textarea id="mensagem" name="mensagem" required></textarea>

            <button class="buttonform" type="submit">Enviar</button>
          </form>
        </div>
      `
    };
  
    conteudo.innerHTML = secoes[secao];
  }
  
  window.onload = () => {
    mostrar('sobre');
  };
  