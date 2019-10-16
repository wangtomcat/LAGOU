function checkLogin(){
  var isLogin = localStorage.getItem('isLogin') === 'true' ? true : false;
  return isLogin;
}

function sendCode(tel, cb/*有成功和失败的情况*/){
  // 发送验证码的请求
  $.ajax({
    url: SEND_CODE_API,
    method: 'GET',
    data: {
      tel: tel
    },
    success: function(data){
      console.log(data);
      if(data.status === 0){
        console.log('成功');
        cb();
      }else{
        console.log('请求失败');
      }
    },
    fail: function(error){
      console.log('请求失败');
    }
  })

}


function regiester(tel, code, cb/*有成功和失败的情况*/){
  // 发送注册的请求
  $.ajax({
    url: REGIESTER_API,
    method: 'POST',
    data: {
      tel: tel,
      code: code
    },
    success: function(data){
      if(data.status === 0){
        console.log('注册成功');
        cb();
      }else{
        console.log('注册请求失败');
      }
    },
    fail: function(error){
      console.log('注册请求失败');
    }
  })
}

function login(tel, code, cb/*有成功和失败的情况*/){
  // 发送登录的请求
  $.ajax({
    url: LOGIN_API,
    method: 'POST',
    data: {
      tel: tel,
      code: code
    },
    success: function(data){
      if(data.status === 0){
        console.log('登录成功');
        cb();
      }else{
        console.log('登录请求失败');
      }
    },
    fail: function(error){
      console.log('登录请求失败');
    }
  })
}

function logout(cb/*有成功和失败的情况*/){
  // 发送注册的请求
  $.ajax({
    url: LOGOUT_API,
    method: 'GET',
    success: function(data){
      if(data.status === 0){
        console.log('退出成功');
        cb();
      }else{
        console.log('退出请求失败');
      }
    },
    fail: function(error){
      console.log('退出请求失败');
    }
  })
}

//投递简历的请求
function delive(data){
  $.ajax({
    url: DELIVE_RESUME_API,
    method: 'GET',
    data:data.id,
    success: function(data){
      if(data.status === 0){
        // alert('投递成功！')
      }else{
        alert('请求失败');
      }
    },
    fail: function(error){
      alert('请求失败');
    }
  })
}

//收藏的请求
function collectRues(data){
  $.ajax({
    url: COLLECT_API,
    method: 'GET',
    data:data.id,
    success: function(data){
      if(data.status === 0){
        // alert('收藏成功！')
      }else{
        alert('请求失败');
      }
    },
    fail: function(error){
      alert('请求失败');
    }
  })
}