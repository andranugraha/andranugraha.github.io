$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 700) {
            $("nav").css("top" , "0px");
            $("nav").css("opacity" , "1");
        } else {
            $("nav").css("top" , "-60px");
        }
        dh = $(document).height();
        wh = $(window).height();
        var height = (scroll / (dh-wh)) * 60;
        var top = 50 - (scroll / (dh-wh)) * 30;
        $(".scrollBar").css("height" , height + "vh");
        $(".scrollBar").css("top" , top + "vh");
    })
})