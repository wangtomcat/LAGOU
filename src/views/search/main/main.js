function myScroll(){
    var myScroll = new IScroll('.content', {
 
        click: true,
        tap: true,
   
        // Y轴滚动   默认值为true
        scrollY: true,
    
    
        // 滚动的起始位置
        startX: 0,
        startY: 0,
    
    
        // 正在滚动的侦听级别
        probeType: 3,//1,2,3
    
        // pc端需要将滚轮打开
        mouseWheel: true
        
        
      });
}

$('.left-btn').on('click',function(){
    $('.content').css('display','block');
    $('.searchdiv b').css('display','inline-block');
    $('.main').css('display','none');
    $('.searword').css('display','none');
    myScroll();
    $('.wrap').on('click','.citylist span',function(){
        $('.wrap span').removeClass('active');
        $('.left-btn').children().eq(0).text($(this).text());
        $('.content').css('display','none');
        $('.searchdiv b').css('display','none');
        $(this).addClass('active');
          
    });
    $('.searchdiv b').on('click',function(){
        $('.searword').css('display','block');
        $('.content').css('display','none');
        $('.searchdiv b').css('display','none');
        if($('.main').css('display') == 'none'){
            $('.main').css('display','none');
        }else{
            $('.main').css('display','block');
        }
        
    })
});


