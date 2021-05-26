$(document).ready(function () {
    if ($.cookie('jwt_token') == null || $.cookie('jwt_token') == undefined) {
        alert("Usuário não autenticado");
        location.href = "/academifyfrontend/login.html";
    }
});

//Processar formulário
$('#form-inserir-usuario').submit(function (event) {

    event.preventDefault();

    nascimento = new Date($('#input-nascimento').val());

    //Criar formData
    var formData = {
        'matricula': $('#input-matricula').val(),
        'nome': $('#input-nome').val(),
        'nascimento': nascimento.toUTCString(),
        'dataHoraCadastro': new Date().toUTCString()
    };

    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Beaver ' + $.cookie('jwt_token'),
        },
        type: 'POST',
        url: 'http://localhost:8080/api/aluno/incluir',
        data: JSON.stringify(formData),
        dataType: 'json',
        encode: true,
        success: function (data) {
            location.href = 'listarAlunos.html';
        },
        error: function (data) {
            $('#div-alert-message').prepend(data.responseText);
            $('#div-alert-message').fadeIn();
        }
    });
});