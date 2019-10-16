(function(){ 
    var select={};  
    if(localStorage.getItem('jobName')){
        $('.item a').eq(0).text(localStorage.getItem('jobName'));
        $('.item a').eq(0).css('color','#000');
        select.jobName = localStorage.getItem('jobName');
    }
    if(localStorage.getItem('addressName')){
        $('.item a').eq(1).text(localStorage.getItem('addressName'));
        $('.item a').eq(1).css('color','#000');
        select.addressName = localStorage.getItem('addressName');
    }
    if(localStorage.getItem('salaryName')){
        $('.item a').eq(2).text(localStorage.getItem('salaryName'));
        $('.item a').eq(2).css('color','#000');
        select.salaryName = localStorage.getItem('salaryName');
    }
    if(localStorage.getItem('companyName')){
        $('.item a').eq(3).text(localStorage.getItem('companyName'));
        $('.item a').eq(3).css('color','#000');
    }
    
    $('.nav').on('click',function(){
        localStorage.setItem('select',JSON.stringify(select));
        window.location.href = './home.html';
    })
})();