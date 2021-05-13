var id_aluno = GetURLParameter("id");

$(document).ready(function () {
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Beaver eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ2aWN0b3IiLCJleHAiOjE2MjA5NTE0MzQsImlhdCI6MTYyMDkxNTQzNH0.duFRUJ07-5QO8Uc4jK6HF1ROmeuAjw50E15cAEyedpY'
        },
        url: 'http://localhost:8080/api/aluno/get/' + id_aluno,
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            $("#input-nome").val(data.nome);
        }
    })

});

$('#form-editar-usuario').submit(function (event) {
    event.preventDefault();

    var formData = {
        'id': id_aluno,
        'nome': $('#input-nome').val()
    };

    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Beaver eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ2aWN0b3IiLCJleHAiOjE2MjA5NDk2OTksImlhdCI6MTYyMDkxMzY5OX0.zFQylPievrht6DgHTTPc4QxCPW66PfRq3UPU1FvLJiw'
        },
        type: 'PUT',
        url: 'http://localhost:8080/api/aluno/editar',
        data: JSON.stringify(formData),
        dataType: 'json',
        encode: true,
        success: function (data) {
            location.href = "listarAlunos.html";
        },
        error: function (data) {
            alert("Ocorreu um erro ao editar o aluno");
        }
    })

});