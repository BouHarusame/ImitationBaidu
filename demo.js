
var oUl = $('#search ul')[0];
var oInput = $('#search input')[0];
var oBtn = $('#btn');
$(window).resize(function(){
   init();
});
init();
function init(){
    $('.slider-nav').css('height',$(window).innerHeight() + 'px');
    $('.wrapper').css('height',$(window).innerHeight() + 'px');
    bindEvent();
}
function createScript(val){
    if(val.length >0){
        var oScript = document.createElement('script');
        oScript.src = 'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd='+ val +'&cb=search';
        document.body.appendChild(oScript);
        oUl.style.display = 'block';
        document.body.removeChild(oScript);
    }
}
function bindEvent(){
    $(oInput).on('focus',function(){
        $(this).parent().addClass('focus');
    });
    $(oInput).on('blur',function(){
        $(this).parent().removeClass('focus');
    });
    $(oInput).on('input',function(){
        var value = this.value;
        createScript(value);
    });
    $(oInput).on('keydown',function(event){
        var e = event || window.event;
        if(oInput.value){
            if(e.keyCode == 13){
                window.location.href = 'https://www.baidu.com/s?ie=utf-8&f=3&rsv_bp=1&rsv_idx=1&tn=baidu&wd='+ oInput.value;
                console.log(1);
            }
        }

    });
    $(oBtn).on('click',function(){
        if(oInput.value) {
            window.location.href = 'https://www.baidu.com/s?ie=utf-8&f=3&rsv_bp=1&rsv_idx=1&tn=baidu&wd=' + oInput.value;
        }
     });

    $('.set-up').parent().mouseenter(function(){
        $('.nav-set').show();
    });
    $('.set-up').parent().mouseleave(function(){
        $('.nav-set').hide();
    });
    $('.more').find('a').mouseenter(function(){
        $('.slider-nav').css('display','block');
    });
    $('.slider-nav').mouseleave(function(){
        $('.slider-nav').css('display','none');
    });
}
function search(data){
    var str = '';
    var aList = data.s;
    aList.forEach(function(ele,index){
        str += '<li><a target="_blank" href="https://www.baidu.com/s?ie=utf-8&f=3&rsv_bp=0&rsv_idx=1&tn=baidu&wd='+ ele+'">'+ ele +'</a></li>'
    });
    oUl.innerHTML = str;
}
