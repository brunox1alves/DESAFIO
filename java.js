
  // Função para mudar a cor da página com base na entrada do usuário
  function mudarCorPagina() {
    // Solicitar uma cor ao usuário
    var inputCor = prompt("Digite uma cor em hexadecimal (#ff0000) ou em nome em inglês:");

    // Verificar se o usuário digitou algo
    if (inputCor !== null && inputCor.trim() !== "") {
      // Verificar se a entrada é um valor válido
      if (/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(inputCor) || /^(red|blue|green|yellow|purple|orange)$/i.test(inputCor)) {
        document.body.style.backgroundColor = inputCor;
      } else {
        alert("Erro: A cor fornecida não está em um formato válido.");
      }
    } else {
      alert("Erro: Nenhuma cor foi inserida.");
    }
  }

  // Chama a função para mudar a cor quando a página estiver carregada
  window.onload = mudarCorPagina;

  
