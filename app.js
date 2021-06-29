$(document).on('click', ".vector-right", function () {
    var carusel = $(this).parents('.reviews');
    right_carusel(carusel);
});

$(document).on('click', ".vector-left", function () {
    var carusel = $(this).parents('.reviews');
    left_carusel(carusel);
});

function left_carusel(carusel) {
    $(carusel).find(".reviews-inline").eq(-1).prependTo($(carusel).find(".reviews__elems"));
    let elem = $('.reviews .slide');
    let i = 0;
    for (i; i <= elem.length; i++) {
        if (elem[i].className === "slide active") {
            if (i == 0){
                return $(carusel).find(".slide").removeClass("active").eq(-1).addClass("active");
            }
            elem[i].className = 'slide';
            elem[i].previousElementSibling.className = "slide active";
            return
        }
    }

}
function right_carusel(carusel) {
    $(carusel).find(".reviews-inline").eq(0).appendTo($(carusel).find(".reviews__elems"));
    let elem = $('.reviews .slide');
    const elemsLength = elem.length
    let i = 0;
    for (i; i <= elem.length; i++) {
        if (elem[i].className === "slide active") {
            if (i == elemsLength - 1){
              return $(carusel).find(".slide").removeClass("active").eq(0).addClass("active");
            }
            elem[i].className = 'slide';
            elem[i].nextElementSibling.className = "slide active";
            return
        }
    }
}



$(document).on('click', ".hamburger", function () {
    this.classList.toggle("active");
});


