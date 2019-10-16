(function(){
 //编辑简历的请求
    // $.ajax({
    //   url: EDIT_RESUME_API,
    //   method: 'GET',
    //   success: function(data){
    //     if(data.status === 0){
    //       // alert('投递成功！')
    //       console.log(data.data);
          
    //       listDOM(data.data);
    //         myScroll();
    //     }else{
    //       alert('请求失败');
    //     }
    //   },
    //   fail: function(error){
    //     alert('请求失败');
    //   }
    // });
    $.ajax({
        url: EDIT_RESUME_API,
        method: 'GET',
        success: function(data){
            console.log(data.data);
            
            listDOM(data.data);
            myScroll();
        },
        fail: function(error){
          alert('请求失败');
        }
      });

    function listDOM(data){
            listDOM = '<div class="user-panel text-center">\
                        <img src="../assets/default_headpic.png" alt="">\
                        <span>wang zhiyuan</span>\
                    </div>\
                    <div class="info">\
                        <i></i>基本信息\
                    </div>\
                    <div class="text">\
                        <p><b>最高学历：</b><span>'+data.xueli+'</span></p>\
                        <p><b>工作年限：</b><span>'+data.year+'年</span></p>\
                        <p><b>联系电话：</b><span>'+data.tel+'</span></p>\
                        <p><b>联系邮箱：</b><span>'+data.email+'</span></p>\
                    </div>\
                    <div class="footer">\
                        我目前已离职，可快速到岗！\
                    </div>'
        
        $('.wrap').append(listDOM);
    }


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