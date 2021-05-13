$(document).ready(function () {

    $.ajax({
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Beaver eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ2aWN0b3IiLCJleHAiOjE2MjA5NDk2OTksImlhdCI6MTYyMDkxMzY5OX0.zFQylPievrht6DgHTTPc4QxCPW66PfRq3UPU1FvLJiw'
        },
        url: 'http://localhost:8080/api/aluno/listar',
        type: 'get',
        dataType: 'json',
        success: function (result) {
            var html = '';
            $.each(result, function (i, data) {
                html += `<tr><td>` + data.nome + `</td>`;
                html += `<td><a href="editarAluno.html?id=` + data.id + `"><i class="bi bi-pencil-fill"></i></a>`;
                html += ` <a href="visualizarAluno.html?id=` + data.id + `"><i class="bi bi-search"></i></a>`;
                html += ` <a href="#" onclick="removerAluno(` + data.id + `)"><i class="bi bi-archive-fill"></i></a></td></tr>`;

                $("#tbListarAlunosBody").html(html);
            });
        }
    })

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
                'Authorization': 'Beaver eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ2aWN0b3IiLCJleHAiOjE2MjA5NTE0MzQsImlhdCI6MTYyMDkxNTQzNH0.duFRUJ07-5QO8Uc4jK6HF1ROmeuAjw50E15cAEyedpY'
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

