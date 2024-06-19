function onEntry(entry) {
    entry.forEach(change => {
    if (change.isIntersecting) {
    change.target.classList.add('element-show');
    }
    });
}

let options = {threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');

for (let elm of elements) {
    observer.observe(elm);
}




document.querySelectorAll(".ourVac__body-box-start-item").forEach((el) => {
    el.addEventListener('click', ()=> {
        let cont = el.querySelector('.ourVac__body-box-start-item-acc');
        let con = cont.parentNode;
        if (cont.style.maxHeight) {
            document.querySelectorAll('.ourVac__body-box-start-item-acc').forEach((el)=> el.style.maxHeight = null)
            document.querySelectorAll('.ourVac__body-box-start-item').forEach((el)=> el.classList.remove('open'))
            con.lastElementChild.firstElementChild.textContent = 'Подробнее'
        } else {
            document.querySelectorAll('.ourVac__body-box-start-item-acc').forEach((el)=> el.style.maxHeight = null)
            document.querySelectorAll('.ourVac__body-box-start-item').forEach((el)=> el.classList.remove('open'))
            con.classList.add('open')
            con.lastElementChild.firstElementChild.textContent = 'Скрыть'
            cont.style.maxHeight = cont.scrollHeight + 'rem';
        }
    })
})
document.querySelectorAll(".ourVac__body-box-end-item").forEach((el) => {
    el.addEventListener('click', ()=> {
        let cont = el.querySelector('.ourVac__body-box-end-item-acc');
        let con = cont.parentNode;
        if (cont.style.maxHeight) {
            document.querySelectorAll('.ourVac__body-box-end-item-acc').forEach((el)=> el.style.maxHeight = null)
            document.querySelectorAll('.ourVac__body-box-end-item').forEach((el)=> el.classList.remove('open'))
            con.lastElementChild.firstElementChild.textContent = 'Подробнее'
        } else {
            document.querySelectorAll('.ourVac__body-box-end-item-acc').forEach((el)=> el.style.maxHeight = null)
            document.querySelectorAll('.ourVac__body-box-end-item').forEach((el)=> el.classList.add('open'))
            con.classList.add('open')
            con.lastElementChild.firstElementChild.textContent = 'Скрыть'
            cont.style.maxHeight = cont.scrollHeight + 'rem';
        }
    })
})

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
    if ($("#inp__file").val() == ''){
        $("#inp__file").parent('div').removeClass('ok')
        $("#inp__file").parent('div').addClass('error')
    } else if ($('#inp__file')[0].files[0].size/ 1024 >= 2048){
        $("#inp__file").parent('div').removeClass('ok')
        $("#inp__file").parent('div').addClass('error')
        alert('Размер файла больше 2 Мб')
    }else if ($('#inp__file')[0].files[0].type != 'application/pdf'){
        alert('Тип файла не .pdf')
        $("#inp__file").parent('div').removeClass('ok')
        $("#inp__file").parent('div').addClass('error')
    }
    else {
        $("#inp__file").parent('div').removeClass('error')
        $("#inp__file").parent('div').addClass('ok')
    }
}
$('.form__body-btn').on('click' , function(e){
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

$("#inp__file").on('change', function(e){
    $('.input__file-button-text').text(`${$(this)[0].files[0].name}`)
    $(this).next('label').children('.add').addClass('none')
    $(this).next('label').children('.trash').removeClass('none')
})
$('.trash').on('click' , function(e){
    $("#inp__file").val('')
    $('.input__file-button-text').text('Прикрепить резюме (Формат pdf, размер файла не более 2 мб)')
})

$('select').on('change', function(e){
    $(this).addClass('choose')
})



$('.burger').on('click', function(e){
    if ($('.header__mobile').hasClass('active')){
        $('.header__mobile').removeClass('active')
        $('body').removeClass('hidden')
        $(this).removeClass('active')
    }else{
        $('.header__mobile').addClass('active')
        $('body').addClass('hidden')
        $(this).addClass('active')
    }
})

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
}
$('.call__btn').on('click', function(e){
    $('.call').addClass('active')
    $('body').addClass('hidden')
})
$('.call__body-btn').on('click' , function(e){
    Form()
    let check = false
    if ($('#check').prop('checked')){
        check = true
        $('#check').next('span').removeClass('error')
    }else{
        check = false
        $('#check').next('span').addClass('error')
    }
    console.log(check)
    $('.text').each(function(e){
        console.log($(this))
        if ($(this).val().length == 0 || !check){

        }else{
            $('.call__body').addClass('none')
            $('.modalpo__body').removeClass('none')
        }
    })
})
// $('.modal__any-body-btn').each(function(el){
//     $(this).on('click' , function(e){
//         Form()
//         let check = false
//         console.log($(this).prev().children('.custom-checkbox').children('input[type=checkbox]'))
//         if ($(this).parent().children('.checkbox').children('.custom-checkbox').children('input[type=checkbox]').prop('checked')){
//             check = true
//             $(this).parent().children('.checkbox').children('.custom-checkbox').children('input[type=checkbox]').removeClass('error')
//         }else{
//             check = false
//             $(this).parent().children('.checkbox').children('.custom-checkbox').children('input[type=checkbox]').addClass('error')
//         }
//         $(this).parent().children('.modal__any-body-form-item').children('.text').each(function(e){
//             if ($(this).val().length == 0 || !check){
    
//             }else{
//                 $('.modal__any').remove('active')
//             }
//         })
//     })
// })
$('.modal__any-body').on('click', function(e){
    if($('.modal__any-body-close').is(e.target) || $('.modal__any-body-close svg').is(e.target) || $('.modal__any-body-close svg path').is(e.target)){
        $('.modal__any').removeClass('active')
        $('body').removeClass('hidden')
    }
})
$('.modalpo__body').on('click', function(e){
    if ($('.modalpo__body-btn').is(e.target)){
        window.location.href = 'main.html'
    }else if($('.call__body-close').is(e.target) || $('.modalpo__body-close svg').is(e.target) || $('.modalpo__body-close svg path').is(e.target)){
        $('.call').removeClass('active')
        $('body').removeClass('hidden')
    }
})
$('.call__body').on('click', function(e){
    if($('.call__body-close').is(e.target) || $('.call__body-close svg').is(e.target) || $('.call__body-close svg path').is(e.target)){
        $('.call').removeClass('active')
        $('body').removeClass('hidden')
    }
})

$('.prod__btn').on('click', function(e){
    $('.product').addClass('active')
    $('body').addClass('hidden')
})
$('.product__body').on('click', function(e){
    if($('.product__body-close').is(e.target) || $('.product__body-close svg').is(e.target) || $('.product__body-close svg path').is(e.target)){
        $('.product').removeClass('active')
        $('body').removeClass('hidden')
    }
})


$('.any__btn').each(function(e){
    $(this).on('click', function(el){
        let num = $(this).attr('data-num')
        $('.modal__any').each(function(element){
            if($(this).attr('data-type') == num){
                $(this).addClass('active')
                $('body').addClass('hidden')
            }
        })
    })
})


var splide = new Splide( '#splide', {
    type   : 'loop',
    pagination: true,
    arrows: false,
    } );

splide.mount();
var splide = new Splide( '#splide__news', {
    type   : 'loop',
    pagination: false,
    gap: '24px',
    arrows: true,
    } );

splide.mount();