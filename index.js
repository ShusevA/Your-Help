$(document).on('click', ".vector-right",function(){ 
	var carusel = $(this).parents('.reviews');
	right_carusel(carusel);
	return false;
});
//Обработка клика на стрелку влево
$(document).on('click',".vector-left",function(){ 
	var carusel = $(this).parents('.reviews');
	left_carusel(carusel);
	return false;
});
function left_carusel(carusel){
   var block_width = $(carusel).find('.reviews__el').outerWidth();
   $(carusel).find(".reviews__elems .reviews__el").eq(-1).clone().prependTo($(carusel).find(".reviews__elems")); 
   $(carusel).find(".reviews__elems").css({"left":"-"+block_width+"px"});
   $(carusel).find(".reviews__elems .reviews__el").eq(-1).remove();    
   $(carusel).find(".reviews__elems").animate({left: "0px"}, 200); 
   
}
function right_carusel(carusel){
   var block_width = $(carusel).find('.reviews__el').outerWidth();
   $(carusel).find(".reviews__elems").animate({left: "-"+ block_width +"px"}, 200, function(){
	  $(carusel).find(".reviews__elems .reviews__el").eq(0).clone().appendTo($(carusel).find(".reviews__elems")); 
      $(carusel).find(".reviews__elems .reviews__el").eq(0).remove(); 
      $(carusel).find(".reviews__elems").css({"left":"0px"}); 
   }); 
}

$(function() {
//Раскомментируйте строку ниже, чтобы включить автоматическую прокрутку карусели
	auto_right('.carousel:first');
})

// Автоматическая прокрутка
function auto_right(carusel){
	setInterval(function(){
		if (!$(carusel).is('.hover'))
			right_carusel(carusel);
	}, 3000)
}
// Навели курсор на карусель
$(document).on('mouseenter', '.reviews', function(){$(this).addClass('hover')})
//Убрали курсор с карусели
$(document).on('mouseleave', '.reviews', function(){$(this).removeClass('hover')})