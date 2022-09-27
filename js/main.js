$('.navbar_gnb, .sub_shadow').on('mouseenter mouseleave',function(aa){
if( $(window).width() > 1169){
    if(aa.type == 'mouseenter'){
        $('.sub').stop().slideDown();
        $('.sub_shadow').stop().fadeIn();
    } else {
        $('.sub').stop().slideUp(200, function(){
            $('.sub').removeAttr('style');
        });
        $('.sub_shadow').stop().fadeOut(200,function(){
            $(this).removeAttr('style');
        });
    }
}
})

//mobile main menu, click submenu
const $mainBtn = $('.navbar_gnb > li > a'); //mainmenu

$mainBtn.click(function(){
    if( $(window).width() < 1170){ //mobile only
        if( !$(this).parents('li').hasClass('on')){ //클릭한 a의 부모 li에 on 클라스가 없을때
            $('.sub').slideUp(300);
            $(this).siblings('.sub').slideDown(400);
            $('.navbar_gnb > li').removeClass('on');
            $(this).parents('li').addClass('on');
        } else { //클릭한 부분이 이미 열려있는 상태(on클라스가 있는 상태)
            $('.sub').slideUp(300);
            $(this).parents('li').removeClass('on');
        }
    }
})

//모바일 상태에서 햄버거 누르면 사이드바가 열리고 닫힘
$('.trigger').click(function(){
    $(this).toggleClass('open'); //toggle class 'open' upon click

    if($(this).hasClass('open')){ //has class 
        $('.gnb').animate({right:0});
        $('header').animate({left:-250},400);
    } else { //does not have class
        $('.gnb').animate({right: -250});
        $('header').animate({left:0},400);
    }
})

//모바일 상태에서 서브메뉴를 열고 데스크탑상태로 바꾸면 서브가 그냥 보인다
// li에 on클라스가 계속 있는 상태 수정
$(window).resize(function(){
    if($(window).width() > 1169){
        $('.sub').removeAttr('style');
        $('.navbar_gnb > li').removeClass('on');
    }
})