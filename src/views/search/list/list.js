(function(){
    keyWordDOM();
    function Scroll(dom, options){
        options = options || {};
        options.probeType = 3;
        // 控制上下拉刷新的条件
        options.canrefresh = false;
        options.canLoadmore = false;
        
        var myScroll = new IScroll(dom, options);
        
        myScroll.scrollTo(0, -50, 0);
        
        
        
        var refreshImg = document.querySelector('.refresh img');
        var refreshText = document.querySelector('.refresh span');
        var loadmoreImg = document.querySelector('.loadmore img');
        var loadmoreText = document.querySelector('.loadmore span');
      
        var loadingPath = '../assets/loading.gif';
        var arrowPath = '../assets/arrow.jpg';
      
      
        // 提供刷新dom的方法
        myScroll.on('beforeScrollStart', function(){
          // 识别当前可以滚动的最新高度
          myScroll.refresh();
        })
        
        
        // 监听正在滚动，处理下拉刷新
        myScroll.on('scroll', function(){
          if(myScroll.y >= 0){
            //达到了可以下拉刷新的条件
            refreshImg.className = 'active';
            refreshText.innerText = '释放立即刷新...';
          }else{
            //没有达到条件
            refreshImg.className = '';
            refreshText.innerText = '下拉可以刷新...';
          }
        })
        
        // 监听滚动停止的事件，处理下拉刷新
        myScroll.on('scrollEnd', function(){
          if(myScroll.y >= 0){
            //达到了可以下拉刷新的条件，触发下拉刷新
            refreshImg.src = loadingPath;
            refreshText.innerText = '正在刷新...';
            //告诉外部下拉刷新触发了。让外部执行相关操作
            (options.canrefresh && options.refreshData) && options.refreshData(function(){
              // 刷新
              myScroll.refresh();
              //停止下拉刷新的方法
              refreshImg.src = arrowPath;
              refreshText.innerText = '下拉可以刷新...';
              myScroll.scrollTo(0, -50, 300);
            });
            
          }
          else if(myScroll.y > -50 && myScroll.y < 0){
            //可以看见部分下拉可以刷新的dom，收回下拉可以刷新的dom
            myScroll.scrollTo(0, -50, 300);
          }
          else{//myScroll.y < -50 ,正常滚动
        
          }
        })
      
        // 控制是否可以下拉刷新
        this.setCanRefresh = function(bool){
          options.canrefresh = bool;
        }
      
      
        // 监听正在滚动，处理上拉加载更多
        myScroll.on('scroll', function(){
          var maxY = myScroll.maxScrollY;
          var y = myScroll.y;
          if(maxY >= y){
            //触发了
            loadmoreImg.className = 'active';
            loadmoreText.innerText = '释放立即加载更多...';
          }
          else{
            //没有触发
            loadmoreImg.className = '';
            loadmoreText.innerText = '上拉可以加载更多...';
          }
        })
      
        // 监听滚动停止的事件，处理上拉加载更多
        myScroll.on('scrollEnd', function(){
          var maxY = myScroll.maxScrollY;
          var minY = maxY + 50;
          var y = myScroll.y;
          // console.log('maxY:', maxY, 'y:', y);
          if(y >= minY){
            //正常滚动
          }
          else if(y < minY && y > maxY){
            //可以看见部分上拉可以加载更多的dom结构，收回
            myScroll.scrollTo(0, minY, 300);
          }
          else if(y <= maxY){
            //可以看见全部上拉可以加载更多的dom结构，触发上拉加载更多
            loadmoreImg.src = loadingPath;
            loadmoreText.innerText = '正在加载中...';
            // 告诉外部触发了加载更多
            (options.canLoadmore && options.loadmoreData) && options.loadmoreData(function(){
              // 刷新
              myScroll.refresh();
              loadmoreImg.src = arrowPath;
            loadmoreText.innerText = '上拉可以加载更多...';
            });
          }
        })
      
        // 控制是否可以上拉加载更多的方法
        this.setCanLoadmore = function(bool){
          options.canLoadmore = bool;
        }
      
      }



// 封装请求职位的列表数据
function requestData(params, callback){
    $.ajax({
      url: SEARCH_JOBS_API,
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
  var scroll = new Scroll('.main', {
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
    
  });
    var params = {
        page: 1,
        count: 10,
    }  
      
  $('.rightinput').on('click','span',function(){
    $('.main').css('display','block');
    $('.searword').css('display','none');
     // 初始化发送ajax请求，请求首屏
   params.city = $('.left-btn').children().eq(0).text();
   params.job = $('.rightinput input').val();
   console.log(params.job,params.city);
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


    //关键字
    if(params.job){
        var keyWords = JSON.parse(sessionStorage.getItem('keyWord')) || [];
        console.log(keyWords);
        
        if(keyWords.length != 0){
            for(var i = 0;i<keyWords.length;i++){
                if(params.job == keyWords[i]){
                    console.log(0);
                    break;
                }else{
                    keyWords.push(params.job);
                    sessionStorage.setItem('keyWord',JSON.stringify(keyWords));
                    console.log(1);
                    
                }
            }
           
        }else{
            keyWords.push(params.job);
            sessionStorage.setItem('keyWord',JSON.stringify(keyWords));
        }
    }

    keyWordDOM();
});
//创建关键字的dom
function keyWordDOM(){
   if(JSON.parse(sessionStorage.getItem('keyWord'))){
    var key = JSON.parse(sessionStorage.getItem('keyWord'));
    var html = '';
    for(var i = 0;i<key.length;i++){
        html +='<li class="border-bottom"><span>'+key[i]+'</span> <b>X</b></li>'
    }
    $('.searword .keyword').append(html);
   }
   else{
       return;
   }
}

$('.searword').on('click','b',function(){
    var key = JSON.parse(sessionStorage.getItem('keyWord'));
    var word = $(this).prev().text();
    for(var i = 0;i<key.length;i++){
        if(key[i] == word){
            key.splice(i, 1);
        }    
    }
    sessionStorage.setItem('keyWord',JSON.stringify(key));
    $(this).parent().remove();

});



})();