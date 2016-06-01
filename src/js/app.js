$(document).ready(function() {

    document.getElementById("todoInput").focus();

    $('ol').on('click', 'li', function(e) {
        $(e.target).remove();
    });

    $('#submitbtn').click(function() {
        $('ol').first().append('<li>' + $("#todoInput").val() + '</li>');
        //$('#inputForm').children('input').val('')
        $('#todoInput').val('');
        document.getElementById("todoInput").focus();

    })

});
