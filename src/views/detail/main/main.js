(function(){

//获得职位列表页面传入的参数
// 方法1
// var query = getQueryStringArgs();

// 方法2
var query = JSON.parse(sessionStorage.getItem('detail-params'));
console.log(query);

// 根据id请求职位的详情数据
function requestDetailData(){
  
  $.ajax({
    url: JOB_DETAIL_API,
    method: 'GET',
    data: {
      id: query.id
    },
    success: function(data){
      // console.log('请求成功');
      console.log(data);
      createListDOM(data.data);
      collect();
      myScroll();
    },
    fail: function(error){

    }
  });

}

requestDetailData();

function createListDOM(data){
    tmpDOM = '<div class="detatitl border-bottom">\
                <h2>'+query.job+'</h2>\
                <div class="detaleft" data-flag="0">\
                  <span class="iconfont icon-shoucang"></span>\
                  <span>收藏</span>\
                </div>\
              </div>\
              <div class="detamain border-bottom">\
                <span> <b class="iconfont icon-rmb"></b> '+data.minSalary+'k-'+data.maxSalary+'k</span>\
                <span> <b class="iconfont icon-address"></b> '+data.city+'</span>\
                <span> <b class="iconfont icon-time"></b> '+data.jobtime+'</span>\
                <span> <b class="iconfont icon-date"></b> '+data.minyear+'-'+data.maxyear+'年</span>\
                <span> <b class="iconfont icon-edu-line"></b> '+data.xueli+'</span>\
                <p>职位诱惑：'+data.jobyou+'</p>\
              </div>\
              <div class="companyde border-bottom">\
                <img src="'+data.companyPic+'" alt="">\
                <div class="text">\
                  <h2>'+query.company+'</h2>\
                  <p>'+data.jobyou+'</p>\
                </div>\
              </div>\
              <div class="positiondesctitl">\
                职位描述\
              </div>\
              <div class="positiondesc">\
                <p>'+data.jobdec+data.jobdec+data.jobdec+'</p>\
              </div>\
              <div class="positiondesctitl">\
                  面试评价（0）\
                </div>\
                <div class="positiondesc">\
                  <p>暂无评价</p>\
                </div>';

  $('.wrap').append(tmpDOM);
}

//点击收藏
$('.wrap').on('click','.wrap .detaleft',function(){
  var flag = $('.detaleft').attr('data-flag');
  if( flag == 0){
    var data = {};
    $('.detaleft').children().eq(0).removeClass();
    $('.detaleft').children().eq(0).addClass('iconfont icon-shoucang1');
    $('.detaleft').children().eq(1).text('已收藏');
    $('.detaleft').attr('data-flag',1);
    data.salary = $('.detamain').children().eq(0).text();
    data.job = query.job;
    data.company = query.company;
    data.id = query.id;
    if(localStorage.getItem('like')){
      var like = JSON.parse(localStorage.getItem('like'));
      like.push(data);
      localStorage.setItem('like',JSON.stringify(like));
    }else{
      var like = [];
      like.push(data);
      localStorage.setItem('like',JSON.stringify(like));
    }
    collectRues(data);
    alert('收藏成功！');
  }else{
    $('.detaleft').attr('data-flag',0);
    $('.detaleft').children().eq(0).removeClass();
    $('.detaleft').children().eq(0).addClass('iconfont icon-shoucang');
    $('.detaleft').children().eq(1).text('收藏');
    var like = JSON.parse(localStorage.getItem('like'));
    like.pop();
    localStorage.setItem('like',JSON.stringify(like));
    alert('取消收藏');
  }

});

var toudi = JSON.parse(localStorage.getItem('toudi')) || [];
//投递简历
$('.tools').on('click',function(){
    var flag = false;  
    var data = {};
    data.salary = $('.detamain').children().eq(0).text();
    data.job = query.job;
    data.company = query.company;
    data.id = query.id;
    if(toudi.length != 0){
      console.log(toudi.length);
      
      for(var i = 0;i<toudi.length;i++){
        if(data.company === toudi[i].company){
          console.log(data.company,toudi[i].company);
          alert('你已投递！');
          flag = false;
          break;
        }else{
            flag = true;
        }
      }
      if(flag){
        toudi.push(data);
        localStorage.setItem('toudi',JSON.stringify(toudi));
        alert('投递成功!');
      }

    }else{
      toudi.push(data);
      localStorage.setItem('toudi',JSON.stringify(toudi));
      alert('投递成功!');
    }
    delive(data);
});


//判断是否收藏
function collect(){
  var collection = JSON.parse(localStorage.getItem('like'));
  for(var i = 0, len = collection.length;i<len;i++){
    query.company
    if(query.company == collection[i].company){
      $('.detaleft').children().eq(0).removeClass();
      $('.detaleft').children().eq(0).addClass('iconfont icon-shoucang1');
      $('.detaleft').children().eq(1).text('已收藏');
      $('.detaleft').attr('data-flag',1);
    }
  }

}

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


})();


  