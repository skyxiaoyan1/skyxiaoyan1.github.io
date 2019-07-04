
var itemToShow = 1;
function showSlide(item) {

    switch (item) {
        case 1:
            $(".slide .slide-items li:nth-child(1)").css("transition", "left 2s");
            $(".slide .slide-items li:nth-child(1)").css("left", "0%");

            $(".slide .slide-items li:nth-child(2)").css("transition", "left 0s");
            $(".slide .slide-items li:nth-child(2)").css("left", "100%");

            $(".slide .slide-items li:nth-child(3)").css("left", "-100%");

            $(".slide .slide-nav li").removeClass("active");
            $(".slide .slide-nav li:nth-child(1)").addClass("active");
            break;
        case 2:
            $(".slide .slide-items li:nth-child(2)").css("transition", "left 2s");
            $(".slide .slide-items li:nth-child(2)").css("left", "0%");

            $(".slide .slide-items li:nth-child(3)").css("transition", "left 0s");
            $(".slide .slide-items li:nth-child(3)").css("left", "100%");

            $(".slide .slide-items li:nth-child(1)").css("left", "-100%");

            $(".slide .slide-nav li").removeClass("active");
            $(".slide .slide-nav li:nth-child(2)").addClass("active");
            break;
        default:
            $(".slide .slide-items li:nth-child(3)").css("transition", "left 2s");
            $(".slide .slide-items li:nth-child(3)").css("left", "0%");

            $(".slide .slide-items li:nth-child(1)").css("transition", "left 0s");
            $(".slide .slide-items li:nth-child(1)").css("left", "100%");

            $(".slide .slide-items li:nth-child(2)").css("left", "-100%");

            $(".slide .slide-nav li").removeClass("active");
            $(".slide .slide-nav li:nth-child(3)").addClass("active");
    }

}
$(document).ready(function () {
    var autotimer = setInterval(() => {
        //切换动作
        var width = document.body.clientWidth;//得到瀏覽器的寬度 防止動畫動畫變形
        $(".slide li img").css("width", width.toString());

        var picHeight = $(".slide-items li").height();
        console.log(picHeight);
        $(".slide-items").css("height", picHeight.toString());//元素占用位置适应图片高度。

        showSlide(itemToShow);
        itemToShow++;
        if (itemToShow == 4) {
            itemToShow = 1;
        }

    }, 3000);

    //导航
    
    $(".nav .nav-bar>ul>li").hover(function(){
        $(".nav-sub").css("display","none");
        $(this).children("div.nav-sub").css("display","block");
    //如果没有子目录不变透明度
        if($(this).children("div.nav-sub").hasClass("nav-sub"))
        {
            $(".nav").css("opacity","0.9");        
        }
        else
        {
            $(".nav").css("opacity","0.6");
    
        }
    },function(){
        ;
    });
    
    $(".nav-sub").hover(function(){
        ;
    
    },function(){
        $(this).css("display","none");
        $(".nav").css("opacity","0.6");
    });




});