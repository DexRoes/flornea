$('#burger').click(function () {
    $('#menu').addClass('open');
});

document.querySelectorAll('#menu *').forEach((item) => {
    item.onclick = () => {
        $('#menu').removeClass('open');
    }
});


$('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    asNavFor: '.slider-for',
    arrows: true,
    dots: true,
    focusOnSelect: true,
    responsive: [
        {
            breakpoint: 1231,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                dots: false,
                arrows: false
            }
        },
        {
            breakpoint: 921,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                dots: false,
                arrows: false

            }
        }
    ]
});
$('.slider-for').slick({
    // slidesToShow: 2,
    slidesToScroll: 3,
    arrows: true,
    fade: true,
    asNavFor: '.slider-nav',
    responsive: [
        {
            breakpoint: 1230,
            settings: {
                slidesToScroll: 3,
                arrows: true,
                fade: true,
                asNavFor: '.slider-nav',
            }
        },
        {
            breakpoint: 921,
            settings: {
                slidesToScroll: 2

            }
        }
    ]
});

$('.slider-big').slick({
    // slidesToShow: 2,
    slidesToScroll: 2,
    arrows: true,
    fade: true,
    asNavFor: '.slider-nav'
});





$('#form-button').click(function () {
    let formName = $('#form-name');
    let formNumb = $('#form-numb');
    let formCheckbox = document.getElementById('form-checkbox');
    let checkFormCheckbox = document.getElementById('form-checkbox');
    let mainFormInvisible = $('.main-form-invisible');
    let formSelect = $('#form-select');

    $('.form-input').css('outline', 'none');
    mainFormInvisible.hide()

    if (!formName.val()) {
        formName.css('outline', 'red 1px solid').next().show();
    }
    if (!formNumb.val()) {
        formNumb.css('outline', 'red 1px solid').next().show();
        return;
    }
    if (!formCheckbox.checked) {
        alert("Подтвердите обработку персональных данных");
    } else {
        $.ajax({
            method: "POST",
            url: "https://testologia.site/checkout",
            data: {name: formName.val(), phone: formNumb.val(), product: formSelect.val()}
        })

            .done(function (msg) {
                console.log(msg)
                if (!msg.success) {
                    $('.main-hide').hide();
                    $('.main-show').css('display', 'inline-block');
                    $('.main-form').css('background-color', '#f7f5f263').css('backdrop-filter', 'blur(15px)');
                    $('.main-form-close').css('display', 'block');
                } else {
                    alert("Введены неверные данные!")
                }
            })
        $('.main-form-close').click(function () {
            if (1) {
                $('.main-hide').show();
                $('.main-show').css('display', 'none');
                $('.main-form').css('background-color', '#f7f5f2').css('backdrop-filter', 'blur(0)');
                $('.main-form-close').css('display', 'none');
            }
        })
    }
});

new WOW({
    animateClass: 'animate__animated'
}).init();

let footerButton = $('#footer-button');
footerButton.click(function () {
    let footerEmail = $('#footer-email');
    let footerSubscribe = $('#footer-subscribe');
    let footerSubscribeDisable = $('#footer-subscribe-disable');
    if (!footerEmail.val()) {
        footerEmail.css({"borderColor": "red"})
        footerButton.css({"backgroundColor": "red"})
    } else {
        footerSubscribe.css({"display": "none"});
        footerSubscribeDisable.css({"display": "block"})
    }
})













