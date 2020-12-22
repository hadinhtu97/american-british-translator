$(document).ready(function () {
    $('#form').submit((event) => {

        $.ajax({
            url: '/api/translate',
            type: 'POST',
            data: $('form').serialize(),
            success: data => {
                data.error ? $('#output').html('<span class="error">' + data.error + '</span>') : $('#output').html(data.translation);
            }
        })

        event.preventDefault();
    })
})