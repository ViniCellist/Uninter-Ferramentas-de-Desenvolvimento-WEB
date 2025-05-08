//a função mostrar() recebe o valor passado pelo <button> e exibe o contéudo presente no objeto

function mostrar(secao) {
  const conteudo = document.getElementById("conteudo");

  const secoes = {

    //ao clicar no botão "Sobre mim" aparecerá o conteúdo dentro do objeto 'sobre'

    sobre: `
      <div class="sobreMim">
        <h2>Sobre Mim</h2>
        <div class="eu"></div>
        <p>Olá, seja bem-vindo ao meu portfólio! Eu me chamo <span>Vinícius</span>, um aspirante e curioso estudante da área de TI.</p>
        <p>Começei minha jornada como Analista de Redes, trabalhei tanto na rede lógica quanto na infraestrutura. A medida que os anos se passaram, fui criando um interesse pela programação, e hoje trabalho como <span>Desenvolvedor Front-end!</span></p>
        <p>Utilizando das seguintes técnologias: <span>React, Bootstrap, JavaScript e TypeScript</span></p>
        <p>Continuo estudando e me aplicando diariamente para transformar e enriquecer meus conhecimentos.</p>
      </div>
      
    `,

    //ao clicar no botão "Formação" aparecerá o conteúdo dentro do objeto 'formacao'

    formacao: `
      <div class="formacaoContainer">
        <h2 class="titleAlign">Formação</h2>
        <div>
          <h3>Alura - Full-Stack Developer</h3>
          <p>Tempo de curso: 1 ano</p>
          <p>Técnologias: HTML5, CSS3, JavaScript, TypeScript, SASS, Tailwind, Bootstrap, React, C#.</p>
        </div>
        <div>
          <h3>Curso em Vídeo</h3>
          <p>Tempo de curso: 1 ano</p>
          <p>Técnologias: HTML5, CSS3, JavaScript, Git, Github, MySQL</p>
        </div>
        <div>
            <h3>Wizard - Inglês</h3>
          <p>Tempo de curso: 6 anos</p>
          <p>Aprendizado de inglês avançado.</p>
        </div>
        <div>
          <h3>Academia do Provedor</h3>
          <p>Tempo de curso: 1 ano</p>
          <p>Gestão de projetos, desenvolvimento e implementação de redes FTTx.</p>
        </div>
        <div>
          <h3>ETEC - Administração</h3>
          <p>Tempo de curso: 1 ano e 6 meses</p>
          <p>Aprendizado para gerencimento de negócios.</p>
        </div>
      </div>
    `,

    //ao clicar no botão "Projetos" aparecerá o conteúdo dentro do objeto 'projetos'

    projetos: `
    <div class="projetoContainer">
      <h2 class="titleAlign">Projetos</h2>
      <div class="projeto">
        <h3>Projeto Cordel</h3>
        <p>Criação de um site para amostra do efeito Paralax.</p>      
        <a class="projetoLink" href="https://alura-book-mobile.vercel.app" target="_blank">Acessar site</a>
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
        <a class="projetoLink" href="https://alura-book-mobile.vercel.app" target="_blank">Acessar site</a>
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
        <a class="projetoLink" href="https://alura-book-mobile.vercel.app" target="_blank">Acessar site</a>
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
    </div>
    `,

    //ao clicar no botão "Contato" aparecerá o conteúdo dentro do objeto 'contato'

    contato: `
      <h2 class="titleAlign">Contato</h2>
      <div>
        <div class="social">
          <a href="https://www.instagram.com/vinicius_duartesd/" target="_blank">
            <div class="instagram"></div>
          </a>
          <a href="https://www.facebook.com/share/1FUjgZ2zvZ/?mibextid=wwXIfr" target="_blank">
            <div class="facebook"></div>
          </a>
          <a href="https://www.linkedin.com/in/viniciussouzaduarte/" target="_blank">
            <div class="linkedin"></div>
          </a>
        </div>
        <form action="#" method="post">
          <label for="nome">Nome:</label>
          <input class="inputForm" type="text" id="nome" name="nome" required>

          <label for="email">Email:</label>
          <input class="inputForm" type="email" id="email" name="email" required>

          <label for="mensagem">Mensagem:</label>
          <textarea id="mensagem" name="mensagem" required></textarea>

          <button id="btn" class="buttonform" type="submit" disabled>Enviar</button>
        </form>
      </div>
    `
  };

  // o innerHTML se encarrega de inserir o HTML presente nos objetos lá na tag <main>

  conteudo.innerHTML = secoes[secao];

  // como um dos requisitos era apenas fazer a parte visual do formulário e usar um javascript "livre", sem um backend ou uma biblioteca para enviar...o formulário não funciona!

  //a lógica abaixo verifica se os campos do formulário foram preenchidos antes de habilitar o botão "Enviar", e exibe uma mensagem fictícia que a mensagem foi enviada através de um alert()

  if (secao === 'contato') {
    const nome = document.getElementById("nome");
    const email = document.getElementById("email");
    const mensagem = document.getElementById("mensagem");
    const btn = document.getElementById("btn");

    function verificarCampos() {
      if (nome.value.trim() && email.value.trim() && mensagem.value.trim()) {
        btn.disabled = false;
      } else {
        btn.disabled = true;
      }
    }

    nome.addEventListener("input", verificarCampos);
    email.addEventListener("input", verificarCampos);
    mensagem.addEventListener("input", verificarCampos);

    btn.addEventListener("click", (event) => {
      event.preventDefault();
      alert("Mensagem enviada!");
    });
  }  
}

// e por ultimo, esta função abaixo faz que página já seja carregada com o parametro 'sobre', ja exibindo o conteúdo antes mesmo de clicar.

window.onload = () => {
  mostrar('sobre');
}
