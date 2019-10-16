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
$('.wrap').on('click','.citylist span',function(){
    $('.wrap span').removeClass('active');
    $(this).addClass('active');
    localStorage.setItem('addressName',$(this).text())
    window.location.href = './edit.html';
})