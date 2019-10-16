(function(){
    var like = JSON.parse(localStorage.getItem('like')) || [];
    
    $.ajax({
        url: COLLECT_LIST_API,
        method: 'GET',
        success: function(data){
            listDOM(like);
            myScroll();
        },
        fail: function(error){
          alert('请求失败');
        }
      });


      function listDOM(data){
        var len = data.length;
        var listDOM = '';
        for(var i = 0;i < len;i++){
            listDOM += '<li class="item border-bottom">\
                                <div class="left">\
                                <img src="http://dummyimage.com/100x100" alt="">\
                                </div>\
                                <div class="center">\
                                <h3 class="title">'+data[i].company+'</h3>\
                                <p class="job">'+data[i].job+'</p>\
                                <p class="time"></p>\
                                </div><span class="iconfont icon-shoucang1 shoucang"></span>\
                                <div class="right text-center">\
                                '+data[i].salary+'\
                                </div>\
                            </li>'
        }
        $('.list').append(listDOM);
    }

    $('.list').on('click',function(){
        window.location.href = './detail.html';
    });

function myScroll(){
      // 创建滚动视图对象
  // 参数1:可以是选择器也可以是dom元素
  var myScroll = new IScroll('.content', {
    // 点击和tap, 在iscroll中，click和tap都不能触发   默认值为false
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
})();