(function(){
    $('.conten').on('click','li',function(){
        localStorage.setItem('salaryName',$(this).text()); 
        window.location.href = './edit.html';       
    })
})();