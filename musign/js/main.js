$('.gnb li a').mouseenter(function(){
    let bar=$(this).position().left;
    console.log(bar)
    let widnum=$(this).width();
    $('.bar').animate({
        'left':bar + "px",
        'width':widnum + "px",
        'opacity':1,
    },300)

})

$('.animate').scrolla({

    mobile: false, 
    once: false,
    animateCssVersion: 4 
});


let pathH=document.querySelector('.st0')
let pathHeight=pathH.getTotalLength();
console.log(pathHeight)


$('.menuOpen .open').click(function(e){
    e.preventDefault();
    $('.menuOpen .menuWrap').addClass('on')
})

$('.menuOpen .close').click(function(e){
    e.preventDefault();
    $('.menuOpen .menuWrap').removeClass('on')
})

$(window).scroll(function(){
    let scrollTop=$(this).scrollTop();
    console.log(scrollTop);
    let offset=$('.service').offset().top; 

    if(scrollTop>offset){
        $('body').addClass('on')
    }else{
        $('body').removeClass('on')
    }
})