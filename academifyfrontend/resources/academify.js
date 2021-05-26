function GetURLParameter(sParam) {
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++)
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam)
        {
            return sParameterName[1];
        }
    }
}

function esconderAlert() {
    $('#div-alert-message').html("<a class='close' onclick='esconderAlert()'>×</a>");
    $('#div-alert-message').hide();
}

function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getUTCMonth() + 1),
        day = '' + d.getUTCDate(),
        year = d.getUTCFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

    return [year, month, day].join('-');
}

function formatDateTime(dateTime) {
    var d = new Date(dateTime),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();
        hour = d.getHours();
        minute = d.getMinutes();


    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

    if (hour.length < 2) {
        hour = '0' + hour;
    }

    if (minute.length < 2) {
        minute = '0' + minute;
    }

    dateFormated = [year, month, day].join('-');
    timeFormated = [hour, minute].join(':');

    return [dateFormated, timeFormated].join('T');
}