// Check off todos by clicking
$("ul").on("click", "li", function(){
  $(this).toggleClass("completed");
});

// Click on X to delete todo
$("ul").on("click", "span", function(event){
  $(this).parent().fadeOut(500,function(){
    $(this).remove();
  });
  event.stopPropagation();// prevents events from bubbling up
});

$("input[type='text']").keypress(function(event){
  if(event.which === 13){
    // Grabs todo text from input
    var todoText = $(this).val();
    // Set input to empty
    $(this).val("");
    // Create a new li and add to ul
    $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
  }
});

$(".fa-plus").click(function(){
  $("input[type='text']").fadeToggle();
});
