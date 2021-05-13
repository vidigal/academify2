//Processar formulário
$('#form-inserir-usuario').submit(function (event) {

    event.preventDefault();

    //Criar formData
    var formData = {'nome': $('#input-nome').val()};

    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Beaver eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ2aWN0b3IiLCJleHAiOjE2MjA5NTE0MzQsImlhdCI6MTYyMDkxNTQzNH0.duFRUJ07-5QO8Uc4jK6HF1ROmeuAjw50E15cAEyedpY'
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