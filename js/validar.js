// Função para validar o formulário
function validarFormulario() {
    // Obter os valores dos campos do formulário
    var nome = document.getElementById('nome').value;
    var telefone = document.getElementById('telefone').value;
    var email = document.getElementById('email').value;
    var opiniao = document.getElementById('opiniao').value;
  
    // Verificar se o campo 'nome' está vazio ou tem menos de 10 caracteres
    if (nome === '' || nome.length < 10) {
      alert('O campo nome deve conter no mínimo 10 caracteres.');
      return false; // Impedir o envio do formulário
    }
  
    // Verificar se o campo 'telefone' está vazio ou não tem exatamente 10 caracteres
    if (telefone === '' || telefone.length !== 10) {
      alert('O campo telefone deve conter exatamente 10 caracteres.');
      return false; // Impedir o envio do formulário
    }
  
    // Verificar se o campo 'email' está vazio ou não é um e-mail válido
    if (email === '' || !validarEmail(email)) {
      alert('O campo e-mail deve ser preenchido com um e-mail válido.');
      return false; // Impedir o envio do formulário
    }
  
    // Verificar se o campo 'opiniao' está vazio, tem menos de 10 caracteres ou mais de 50 caracteres
    if (opiniao === '' || opiniao.length < 10 || opiniao.length > 50) {
      alert('O campo opinião deve conter entre 10 e 50 caracteres.');
      return false; // Impedir o envio do formulário
    }
  
    // Se todas as validações passaram, permitir o envio do formulário
    return true;
  }
  
  // Função para validar o formato do e-mail utilizando uma expressão regular
  function validarEmail(email) {
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
  