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