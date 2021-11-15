/**
 * 第一题
 * */
const input = $('input').eq(0);
const addBtn = $('.Add');
const list = $('ol').eq(0);
const cleanBtn = $('.Empty');
addBtn.click(function () {
    let val = input.val();
    if (val === ''){
        alert('还没填写内容');
    }else {
        input.val('');
        list.prepend(`<li><span>&times;</span> ${val}</li>`);
        list.find('ol span').click(function () {
           $(this).parent().remove();
        });
    }
})