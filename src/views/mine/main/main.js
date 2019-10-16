(function() {
  var isLogin = checkLogin();
  if (!isLogin) {
    // 没有登录
    $(".user-panel").addClass("hide");
    $(".logout").remove();
    // 没有登录，任意的点击都是跳转到登录界面
    $("#login-btn").on("click", function() {
      console.log('login');
      window.location.href = "./login.html";
    });
    $(".list").on("click", ".item", function() {
      window.location.href = "./login.html";
    });
  } 
  else {
    // 登录了
    $(".login").addClass("hide");

    $('#resume').on('click', function(){
      window.location.href = './resume.html';
    })

    $(".list").on("click", ".item", function() {
      var index = $(this).index();
      switch (index) {
        case 0:
          // 去投递页面
          window.location.href = "./deliver.html";
          break;
        case 1:
          // 去面试页面
          window.location.href = "./interview.html";
          break;
        case 2:
          // 去收藏页面
          window.location.href = "./like.html";
          break;
      }
    });

    //退出的点击事件
    $('.logout').on('click', function(){
      logout(function(){
        // 退出成功
        localStorage.removeItem('isLogin');
        // 刷新个人中心页面
        window.location.reload();
      });
    })
  }
})();
