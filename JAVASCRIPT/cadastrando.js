document.getElementById('cadastro-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var cpf = document.getElementById('cpf').value;
    var phone = document.getElementById('phone').value;
 
    fetch('/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            email: email,
            password: password,
            cpf: cpf,
            phone: phone
        })
    })
    .then(function(response) {
        if (response.ok) {
            return response.text();
        }
        throw new Error('Erro ao enviar o cadastro do cliente.');
    })
    .then(function(data) {
        console.log(data);
        window.location.href= '/cadastro.html';
    })
    .catch(function(error) {
        console.log(error);
    });
 });
 