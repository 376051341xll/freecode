$(document).ready(function(){
  $('#about').click(function(){
        $('html,body').animate({scrollTop:$('#div1').offset().top}, 600);
    });
    $('#div1').mouseover(function(){
        $('#about').css("background-color","white")
    });
    $('#div1').mouseout(function(){
        $('#about').css("background-color","purple")
    });
    $('#div2').mouseover(function(){
        $('#portflio').css("background-color","white")
    });
    $('#div2').mouseout(function(){
        $('#portflio').css("background-color","purple")
    });
    $('#div3').mouseover(function(){
        $('#contact').css("background-color","white")
    });
    $('#div3').mouseout(function(){
        $('#contact').css("background-color","purple")
    });
    $('#portflio').click(function(){
        $('html,body').animate({scrollTop:$('#div2').offset().top}, 600);
    });
   $('#contact').click(function(){
        $('html,body').animate({scrollTop:$('#div3').offset().top}, 600);
    });

});
