$(function(){

    
    $(".tt").click(function(){
        var me = $(this).children("h2"); //펼침
        var sib = $(this).siblings().children("h2"); //닫힘
    
        // me.addClass("on");
        // me.prev().fadeIn();
        // me.next().slideDown();
        
        if(me.hasClass("on")==true){
            //on이 있을때는 removeClass. 이미지와 p태그 보이지 않게
            me.removeClass("on");
            me.prev().fadeOut();
            me.next().slideUp();
        }else{
            //on이 없을때는 addClass. 이미지와 p태그 보이게
            me.addClass("on");
            me.prev().fadeIn();
            me.next().slideDown();
            
            sib.removeClass("on");
            sib.prev().fadeOut("on");
            sib.next().slideUp();
        }

    }) //.tt li click
        $(".logo").click(function(){
            $(".ninja h2").removeClass("on");
            $(".ninja img").fadeOut();
            $(".ninja p").slideUp();
        })



})//j

