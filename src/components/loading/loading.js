function showLoading(params){
  params = params || {};
  var top = params.top || 0;
  var bottom = params.bottom || 0;

  var loadingTemplate = '<div id="loading" class="loading">\
                          <div class="cover" style="top: '+top+'px; bottom: '+bottom+'px;"></div>\
                          <div class="loading-panel">\
                            <img src="../assets/loading.gif" alt="">\
                            <span>正在加载中...</span>\
                          </div>\
                        </div>';
  $('body').append(loadingTemplate);
}


function hideLoading(){
  $('#loading').remove();
}