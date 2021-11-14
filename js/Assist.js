/**
 * 第一题
 * */

$(function (){

    $(".Add").on('click',function () {
        let a = $('[type=text]').val();
        //没填写内容
        if (a.length === 0){
            alert("还没填写内容！！！");
        }else {
            //删除value
            $('.input').val(function () {
                return this.value = '';
            });
            //在输入框下面添加内容
            // let x=$('<li>');
            $('ol').prepend(`<li><span>x</span>  ${a}</li>`);
            $('span').click(function(){
                $(this).parent().remove();
            }) ;
        }
        // 清空列表
        $('.Empty').click(function () {
            $('ol').remove();
        });
    });
    $('p').prepend(`1C, 2B, 3C, 4D, 5D, 6B, 7C, 8D, 9A, 10A, 11C, 12A, 13B, 14D, 15B, 16C, 17A, 18B, 19A, 20D `);
});