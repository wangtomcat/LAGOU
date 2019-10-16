(function(){

  // 封装请求职位的列表数据
  function requestData(params, callback){
    $.ajax({
      url: HOME_JOBS_API,
      method: 'GET',
      data: params,
      success: function(data){
        if(data.status === 0){
          
          console.log(data);
          // 得到数据，构建首屏的dom
          var dom = createListDOM(data.data);
          // 将结果传给外部提供的回调函数
          callback(dom);
          
        }else{
          alert('请求失败');
        }
      },
      fail: function(error){
        alert('请求失败');
      }
    })
  };


  // 构建列表，返回值为列表的dom。但是不处理dom
  function createListDOM(data){
    var tmpDOM = '';
    for(var i = 0, count = data.length; i < count; i++){
      var item = data[i];
      tmpDOM += '<li class="item border-bottom" data-id="'+item.id+'" data-job="'+item.job+'" data-company="'+item.company+'">\
                  <div class="left">\
                    <img src="'+item.companyPic+'" alt="">\
                  </div>\
                  <div class="center">\
                    <h3 class="title">'+item.company+'</h3>\
                    <p class="job">'+item.job+'['+item.city+']</p>\
                    <p class="time">'+item.publish+'</p>\
                  </div>\
                  <div class="right text-center">\
                    '+item.minSalary+'k-'+item.maxSalary+'k\
                  </div>\
                </li>';
    }
    return tmpDOM;
  }



  // 构建滚动视图
  var scroll = new Scroll('.content', {
    tap: true,
    click: true,
    // 下拉刷新的方法
    refreshData: function(endRefresh){
      // 重新请求最新的数据
      // 修改请求条件
      params.page = 1;
      // 关闭下拉刷新的开关
      scroll.setCanRefresh(false);
      // 发送请求
      requestData(params, function(dom){
        // 得到结果，设置dom
        $('.list').html(dom);
        // 关闭刷新
        endRefresh();
        // 重新打开下拉刷新的开关
        scroll.setCanRefresh(true);
      });
    },
    // 上拉加载更多的方法
    loadmoreData: function(endLoadMore){
      // 修改请求条件
      params.page++;
      // 关闭可以加载更多的开关
      scroll.setCanLoadmore(false);
      //请求下一页数据
      requestData(params, function(dom){
        // 得到结果，设置dom
        $('.list').append(dom);
        // 关闭加载更多的动画效果
        endLoadMore();
        // 重新打开可以加载更多的开关
        scroll.setCanLoadmore(true);
      });

    }
  });


 // 初始化发送ajax请求，请求首屏
  var params = {
    page: 1,
    count: 10
  }
  // 显示loading
  showLoading({top: 94, bottom: 49});
  // 发送请求
  requestData(params, function(dom){
    // 插入dom
    $('.list').html(dom);
    // 隐藏loading
    hideLoading();
    // 打开上下拉刷新的开关
    scroll.setCanRefresh(true);
    scroll.setCanLoadmore(true);
  });

  // 给每一个item添加点击事件
  $('.list').on('click', '.item', function(){
    console.log('点击了');
    console.log($(this).index());
    console.log($(this).attr('data-id'));

    var id = $(this).attr('data-id');
    var job = $(this).attr('data-job');
    var company = $(this).attr('data-company');

    // 方法1
    // window.location.href = '../detail/detail.html?id='+id+'&job='+job;

    // 方法2
    sessionStorage.setItem('detail-params', JSON.stringify({
      id: id,
      job: job,
      company: company

    }));
    window.location.href = './detail.html';
    
  })

  


  

})();