//Ejercicio #3 jQuery

$(".character").hide();
$(document).scroll(function(event){
	if($(".left").scrollTop() > 0){
		$(".right").css("top", 10);
	} else {
		$(".right").css("top", $(".left").scrollTop());
	}
});

$(".name").on("mouseenter mouseleave", function(event){
	$($(this).data("person")).fadeToggle();
});