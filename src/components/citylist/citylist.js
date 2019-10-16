(function(){
    
    $.ajax({
        url: CITYLIST_API,
        method: 'GET',
        success: function(data){
            citylistDOM(data)
            myScroll();
        },
        fail: function(error){
          alert('请求失败');
        }
      });


      function citylistDOM(data){
        var len = data.length;
        var cityheaderDOM = '';
        
        for(var i = 0;i < len;i++){
            cityheaderDOM = '<div class="cityheader border-bottom">'+data[i].nameStr+'</div>'
            var citylistDOM = '';
            for(var j = 0 ,len1 = data[i].cityList.length ;j< len1; j++){
                citylistDOM +='<span>'+data[i].cityList[j]+'</span>';
            }

            $('.wrap').append(cityheaderDOM+' <div class="citylist border-bottom">'+citylistDOM+'</div>');
         
        }
    }
   
 
    // function citylistDOM(data){
    //     var len = data.length;
    //     var cityheaderDOM = '';
    //     for(var i = 0;i < len;i++){ 
    //     var citylistDOM = '';
    //         for(var j = 0;j<data[i].cityList.length;j++){
    //             citylistDOM += '<span>'+data[i].cityList[j]+'</span>';
    //         }
    //         cityheaderDOM +='    <div class="cityheader border-bottom">'+data[i].nameStr+'</div>\
    //         <div class="citylist border-bottom">'+
    //         citylistDOM
    //         +'</div>'
    //     }
    //     $('.wrap').append(cityheaderDOM);
        
    // } 


})();