$(document).ready(function(){
    $("#myBtn1").click(function(){
        $("p").prepend("<span>Xow gelmisiz</span>")
    })
    $("#myBtn2").click(function(){
        $("p").append("<span>Xow gelmisiz</span>")
    })
})


$(function(){
    $(".number").keypress(function(e){
        if(e.which<48 || e.which>57){
            $("#errMsg").html("Reqem yaz").stop().slow().fadeOut("5000")
        }
    })
})



$(document).ready(function(){
    setInterval(function(){
        moveRight();
    },3000);


    var slideCount = $("#slider ul li").length;
    var slideWidth = $("#slider ul li").width();
    var slideHeight = $("#slider ul li").height();
    var slideUlWidth = slideCount * slideWidth;

    $('#slider').css({
        width: slideWidth,
        height: slideHeight
    });

    $('#slider ul').css({
        width: slideUlWidth,
        marginLeft: - slideWidth
    });

    $('#slider ul li:last-child').prependTo('#slider ul');

    function moveleft(){
        $('#slider ul').animate({
            left: + slideWidth
        },200,function(){
            $('#slider ul li:last-child').prependTo('#slider ul');
            $('#slider ul').css('left','')
        });
    };

    function moveRight(){
        $('#slider ul').animate({
            left: - slideWidth
        },200,function(){
            $('#slider ul li:first-child').appendTo('#slider ul');
            $('#slider ul').css('left','')
        });
    };

    $('.control_prev').click(function(){
        moveleft();
    })
    $('.control_next').click(function(){
        moveRight();
    });


});
