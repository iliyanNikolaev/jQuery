$('input').focus(function(){
    $(this).css('background', 'lightgreen')
});
$('input').blur(function(){
    $(this).css('background', 'white')
});
$('input').keyup(function(){
    var inputVal = $(this).val();
    var msgSpan = $(this).next('.msg');

    if (isNaN(inputVal)) {
        msgSpan.text('not a number')
    } else if(inputVal == ''){
        msgSpan.text('empty string')
    } else {
        msgSpan.text('number')
    }
});
$('select#dropdown').change(function(){
    console.log('changed', $(this).val());

});