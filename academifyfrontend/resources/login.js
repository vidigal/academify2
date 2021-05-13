//Processar formulário
$('#form-login').submit(function (event) {

    event.preventDefault();

    //Criar formData
    var formData = {
        'username': $('#input-usuario').val(),
        'password':  $('#input-senha').val()
    };

    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        type: 'POST',
        url: 'http://localhost:8080/api/auth/authenticate',
        data: JSON.stringify(formData),
        dataType: 'json',
        encode: true,
        success: function (data) {
            $.cookie('jwt_token', data.jwt);
            location.href = 'index.html';
        },
        error: function (data) {
            alert("Usuário ou senha inválidos");
        }
    });
});

function sair() {
    console.log("Apagar token");
    $.removeCookie('jwt_token', {path: '/academifyfrontend'});
    console.log($.cookie('jwt_token'));
    location.href = '/academifyfrontend/login.html';
}