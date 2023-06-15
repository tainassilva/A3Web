//ouvinte de evento para o evento "submit" do formulário. 
//Dentro desse ouvinte de evento, a propriedade checkValidity() do formulário verifica se todos 
//os campos obrigatórios estão preenchidos. Se o formulário for inválido, 
//chamamos event.preventDefault() para cancelar o envio do formulário.

document.getElementById("login-form").addEventListener("submit", function(event) {
  event.preventDefault();

  var loginForm = document.getElementById("login-form");

  if (loginForm.checkValidity()) {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    var usuariosCadastrados = [ //aqui tem que conectar no banco de dados, pra deixar a quantidade de acordo com o banco de dados, no NODE imagino
      { username: "usuario1", password: "senha1" },
      { username: "usuario2", password: "senha2" },
      { username: "usuario3", password: "senha3" }
    ];

    var usuarioEncontrado = usuariosCadastrados.find(function(usuario) {
      return usuario.username === username && usuario.password === password;
    });

    if (usuarioEncontrado) {
      window.location.href = "cadastro.html";
    } else {
      alert("Usuário ou senha inválidos");
    }
  } else {
    alert("Por favor, preencha todos os campos corretamente");
  }
});


