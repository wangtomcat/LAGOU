(function(){
  
  // 发送验证码
  var interval = null;
  $('#send-code-btn').on('click', function(){
    
    if(interval){
      return;
    }
    // 获得手机号码
    var tel = $('.tel input').val();
    if(tel){//校验手机号码格式正确
      sendCode(tel, function(){
        //发送成功的回调
        // 开始倒计时
        var num = 61;
        var timer = function(){
          num--;
          $('#send-code-btn').text(num+'s');
          if(num <= 0){
            //清除定时器
            clearInterval(interval);
            $('#send-code-btn').text('重新获取验证码');
            interval = null;
          }
        };
        timer();
        interval = setInterval(timer, 1000);
      });
    }
  })


  // 注册的点击事件
  $('#regiester').on('click', function(){
    // 获得输入框的内容
    var tel = $('.tel input').val();
    var code = $('.code input').val();
    if(tel && code){//验证格式正确吗？
      regiester(tel, code, function(){
        // 修改登录的状态
        localStorage.setItem('isLogin', true);
        // 跳转到个人页面
        window.location.href = './mine.html';
      });
    }else{
      // 提示用户
    }
  })

})()