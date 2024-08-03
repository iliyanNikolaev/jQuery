$('#appendLi').click(function(){
    $('ul').append('<li>Appended element</li>')
})
$('#prependLi').click(function(){
    $('ul').prepend('<li>Prepended element</li>')
})
$('#beforeDemo').click(function(){
    $('ul').before('<h4>Hello (new dom element)<h4>')
})
$('#afterDemo').click(function(){
    $('ul').after('<h4>World (new dom element)<h4>')
})
$('input[name="color"]').change(function() {
    var selectedColor = $('input[name="color"]:checked').val();
    $('#radio-msg').text('Your favorite color is ' + selectedColor);
});
$('#subscribe').change(function() {
    if ($(this).is(':checked')) {
        $('#checkbox-msg').text('You are subscribed!');
    } else {
        $('#checkbox-msg').text('You are not subscribed.');
    }
});