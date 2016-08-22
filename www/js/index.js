$(document).ready(function(){
    window.open = cordova.InAppBrowser.open;
    app.init('welcome','1');
    app.goTimer();
    console.log('ready');
    $('i').click(function (e) {
        var data_page_num=$(this).attr('data-page-num');

       //console.log()
        switch (data_page_num){
            case '1':
                app.init('welcome',data_page_num)

                break;
            case '2':
                app.init('links',data_page_num)
                break;
            case '3':
                app.init('mail',data_page_num)
                break;
        }
    })
})

var app={
    init:function(id,page){
        var min=3000;
        setInterval(function(){
            app.goTimer()
        },min)


        $('div[role="page"]').hide();
        $('i').css({color:'white'});
        window.location='#'+id
        $('#'+id).show();
        $('i[data-page-num='+page+']').css({color:'#dfcc20'});
    },
    goTimer:function(){

        var finishData=new Date(2016,11,1,0,0,0);
        var date=new Date();
        var result=finishData-date;
        var days=result/1000/60/60/24;
        var hour=days%1*24;
        var min=hour%1*60;
        $('#day').text(parseInt(days));
        $('#hour').text(parseInt(hour));
        $('#min').text(parseInt(min));
        console.log('d: '+days+'h:'+hour+'m:'+min)
        $('.blockTimer').show();


        //console.log("finish=>"+finishData+" curr=>"+date);

    }

}