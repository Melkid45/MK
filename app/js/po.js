function Form(){
    $('.text').each(function(e){
        if ($(this).val().length == 0){
            $(this).parent('div').children('.ok').addClass('none')
            $(this).parent('div').addClass('error')
            $(this).next('.err').removeClass('none')
            $(this).parent('div').removeClass('ok')
        }else{
            $(this).next('.err').addClass('none')
            $(this).parent('div').children('.ok').removeClass('none')
            $(this).parent('div').removeClass('error')
            $(this).parent('div').addClass('ok')
        }
    })
    $('select').each(function(e){
        if ($(this).val().length == 0){
            $(this).removeClass('ok')
            $(this).addClass('error')
        }else{
            $(this).removeClass('error')
            $(this).addClass('ok')
        }
    })
    
}
$('.po__body-card-form-btn').on('click' , function(e){
    Form()
})
$.fn.setCursorPosition = function(pos) {
    if ($(this).get(0).setSelectionRange) {
        $(this).get(0).setSelectionRange(pos, pos);
    } else if ($(this).get(0).createTextRange) {
        var range = $(this).get(0).createTextRange();
        range.collapse(true);
        range.moveEnd('character', pos);
        range.moveStart('character', pos);
        range.select();
    }
};
$("input[type=tel]").click(function(){
    $(this).setCursorPosition(3);
}).mask("+7(999) 999-9999");
$("input[type=tel]").mask("+7(999) 999-9999");
$('select').on('change', function(e){
    $(this).addClass('choose')
})

$('.po__body-card-choose-item').on('click' , function(e){
    let Choose = $(this).attr('data-choose')
    $(this).addClass('active')
    $('.po__body-card-choose-item').not(this).removeClass('active')
    $('.po__body-card-form').each(function(e){
        if ($(this).attr('data-ch') == Choose){
            $(this).removeClass('none')
        }else{
            $(this).addClass('none')
        }
    })
})