//animate smooth
$('view-work').on('click',function(){
    const image=$('#images').position().top;
    $('html,body').animate({
        scrolltop: images

    },900);
});