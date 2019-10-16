(function(){
    $('.conten').on('click','li',function(){
        localStorage.setItem('companyName',$(this).text()); 
        window.location.href = './edit.html';       
    })
})();