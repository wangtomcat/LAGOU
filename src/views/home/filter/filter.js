(function(){
  
   
  if(checkLogin()){
    var select = JSON.parse(localStorage.getItem('select'));
    var info = '10秒钟定制职位';

    //拼接筛选条件
    if(select){
      info = '';
      for(var key in select){
        info += select[key] + '/';
      }
      info = info.substring(0, info.length-1);
    }
    
    var children = '<span class="info real">'+info+'</span>\
                    <span class="btn text-center">编辑</span>';
    $('.filter').append(children);
    //添加按钮点击事件,去编辑
    $('.filter').on('tap', '.btn', function(){
      console.log('去编辑');
      window.location.href='./edit.html';
    })


                                          
  }else{
    var children = '<span class="info text-v-center">10秒钟定制职位</span>\
                    <span class="btn text-center">去登录</span>';
    $('.filter').append(children);
    //添加按钮点击事件, 去登录
    $('.filter').on('tap', '.btn', function(){
      console.log('去登录');
      window.location.href='./login.html';
    })
  }


})();
