(function(){
  // 返回上一页
  $('.back-action').on('click', function(){
    history.back();
  })

  // 返回首页
  $('.home-action').on('click', function(){
    window.location.href = '/src/views/home/home.html';
  })
})();