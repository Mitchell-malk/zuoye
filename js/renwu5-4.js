/**
 * 第一题
 * */

{
    const all = document.querySelector('#all');
    const re = document.querySelector('#re');
    const list = document.querySelectorAll('.list input');
    //被控复选框数量
    const len = list.length;
    //选中的选框数量
    let n = 0;
    //全选、全不选
    all.onclick = function () {
        list.forEach(item => item.checked = this.checked);
        n = this.checked ? len : 0;
        /*if (this.checked){
            for (let i = 0; i < len; i++) {
                list[i].checked = true;
            }
            n = len;
        }else {
            for (let i = 0; i < len; i++) {
                list[i].checked = false;
            }
            n = 0;
        }*/
    };
    re.onclick = function () {
        // list.forEach(item => item.click());
        list.forEach(item => item.checked = !item.checked);
        n = len - n;
    };
    //反向控制
    list.forEach(function (item){
        item.onclick = function (){
             this.checked ? n++ : n--;
            all.checked = n === len;
        };
    });
}

/**
 * 第二题（1）
 * */
{
    const form1 = document.querySelector('#from1');
    form1.onsubmit = function (e){
        const name = form1.querySelector('[name = "name"]');
        const pass = form1.querySelector('[name = "pass"]');
        const sex = form1.querySelector('[name = "sex"]');
        const fav = form1.querySelector('[name = "fav"]');
        const intro = form1.querySelector('[name =" intro"]');
        let passlen = pass.value.length;
        //    姓名不为空
        if (name.value === ''){
            alert('姓名不能为空！！');
            e.preventDefault();
            return false;
        }
        //密码长度2-10
        if (passlen < 2 || passlen > 10){
            alert('密码长度2-10位');
            e.preventDefault();
            return false;
        }
    //    性别必须选一项
    //     if (!sex[0].checked && !sex[1].checked){
        if (sex[0].checked === sex[1].checked){
            alert('性别必须选一项！！！');
            e.preventDefault();
            return false;
        }
    //    爱好必须选一个
        if (fav[0].checked && fav[1].checked && fav[2].checked === 0) {
            alert('爱好必须选一个！！！');
            e.preventDefault();
            return false;
        }
    //    简介至少十个字符
        if (intro.value.length < 10){
            alert('简介至少十个字符！！！');
            e.preventDefault();
            return false;
        }
    }
}
/**
 * 第二题（2）
 * */

{
    const form2 = document.querySelector('#from2');
    form2.onsubmit = function (e) {
        const name = form2.querySelector('[name = "name"]');
        const pass = form2.querySelector('[name = "pwd"]');
        const sex = form2.querySelector('[name = "sex"]');
        const course = form2.querySelector('[name =" course"]');
    //    Name is not empty
        if (name.value === ''){
            alert('Name is not empty！！');
            e.preventDefault();
            return false;
        }
        //Password length 2-10
        if (pass.value.length < 2 || pass.value.length > 10){
            alert('Password length 2-10!!!');
            e.preventDefault();
            return false;
        }
        //    Gender must choose one
        if (sex[0].checked === sex[1].checked){
            alert('Gender must choose one！！！');
            e.preventDefault();
            return false;
        }
    //    Choose at least two courses
        if (course[0].checked + course[1].checked + course[2].checked < 2){
            alert('Choose at least two courses！！！');
            e.preventDefault();
            return false;
        }
    }
}