$('.markBox').on('click',function(){
  $('html,body').animate({scrollTop:0}, 333)
})

$('.set-Box').on('click',function(){
  if($('.left-Bar').hasClass('change')){
    $('.left-Bar').removeClass('change')
    return;
}
  $('.left-Bar').addClass('change')
})

function menuResize(){
  $(window).on('resize',function(){
    const width = window.innerWidth;
    if(!$('.left-Bar').hasClass('change'))
      return;
    
    if(width > 1020 || width < 550){
      $('.left-Bar').removeClass('change')
    }
  })
}

menuResize()