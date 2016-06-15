

$("#primero").click(function(){
    $("<li>Siguiente elemento</li>").appendTo("ul");
});

$("#segundo").click(function(){
    $("li").remove(":first-child");
    event.stopPropagation();
});