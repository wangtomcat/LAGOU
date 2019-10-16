(function(){
    $('.conten').on('click','li',function(){
        localStorage.setItem('jobName',$(this).text()); 
        window.location.href = './edit.html';       
    })
})();