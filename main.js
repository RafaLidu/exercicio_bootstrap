document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
  
    console.log("Nome:", nome);
    console.log("Email:", email);
    console.log("Telefone:", telefone);
  
    alert("Cadastro realizado com sucesso!");
  });