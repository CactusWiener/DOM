$ (() => {
    $('#list').children().text('Very cool!');
    $('.element').children().addClass('hidden');

    $('.change-show').click(() => {
        $('.show').toggleClass('hidden');
    });

    $('.add-item').click(() => {
        $('#list').append('<li>Isnt it?</li>');
    });

    $('#leform').submit((e) => {
        e.preventDefault();
        const color1 = $('#color1').val();

        $('#list').css('color', color1);  
    });
});
