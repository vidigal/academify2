$(document).ready(function () {
    if ($.cookie('jwt_token') == null || $.cookie('jwt_token') == undefined) {
        alert("Usuário não autenticado");
        location.href = "/academifyfrontend/login.html";
    }

    $.ajax({
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Beaver ' + $.cookie('jwt_token'),
        },
        url: 'http://localhost:8080/api/aluno/listar',
        type: 'get',
        dataType: 'json',
        success: function (result) {
            var html = '';
            $.each(result, function (i, data) {
                html += `<tr><td>` + data.matricula + `</td>`;
                html += `<td>` + data.nome + `</td>`;
                html += `<td><a href="editarAluno.html?id=` + data.id + `"><i class="bi bi-pencil-fill"></i></a>`;
                html += ` <a href="visualizarAluno.html?id=` + data.id + `"><i class="bi bi-search"></i></a>`;
                html += ` <a href="#" onclick="removerAluno(` + data.id + `)"><i class="bi bi-archive-fill"></i></a></td></tr>`;

                $("#tbListarAlunosBody").html(html);
            });
        }
    })



    listarImagens();


});

function removerAluno(id_aluno) {
    var r = confirm("Confirma a exclusão?");
    if (r == true) {

        var formData = {
            'id': id_aluno,
        };

        $.ajax({
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Beaver ' + $.cookie('jwt_token'),
            },
            type: 'POST',
            url: 'http://localhost:8080/api/aluno/remover',
            data: JSON.stringify(formData),
            dataType: 'json',
            encode: true,
            success: function (result) {
                location.reload();
            },
            error: function (result) {
                console.log(result);
            }
        })

    }

}
