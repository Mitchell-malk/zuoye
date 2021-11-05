/**
 * 第一题
 * */

$(function() {
    //全选/全不选
    $("#all").click(function() {
        $("[name=items]:checkbox").prop("checked", this.checked);
    });
    $("[name=items]:checkbox").click(function() {
        let flag = true;
        $("[name=items]:checkbox").each(function() {
            if(!this.checked) {
                flag = false;
            }
        });
        $("#all").attr("checked", flag);
    });
    //反选
    $("#reverse").click(function() {
        $("[name=items]:checkbox").each(function() { //遍历每一个复选框
            // $(this).attr("checked",!$(this).attr("checked")); //jQuery方法取复选框的反向值
            this.checked = !this.checked; //js方法
        });
    });
});

/**
 * 第二题
 * */
const f = document.querySelector("#f");
let name = document.querySelector("#a");
let pw = document.querySelector("#b");
let man = document.querySelector("#c1");
let woman = document.querySelector("#c2");
let like1 = document.querySelector("#like1");
let like2 = document.querySelector("#like2");
let like3 = document.querySelector("#like3");
let resume = document.querySelector("#resume");
f.onsubmit = function (r) {
    let pw1 = pw.value.length;
    let resumelen = resume.value.length;
    if (name.value === "") {
        r.preventDefault();
        alert("姓名不能为空");
    } else if (pw1 < 2 || pw1 > 10) {
        r.preventDefault();
        alert("密码长度二到十位");
    } else if (man.checked === false && woman.checked === false) {
        r.preventDefault();
        alert("必须选一个性别");
    } else if (
        like1.checked === false &&
        like2.checked === false &&
        like3.checked === false
    ) {
        r.preventDefault();
        alert("必须选择一个爱好");
    } else if (resumelen < 10) {
        r.preventDefault();
        alert("简介必须是十个字符");
    }
};

/**
* 第三题
 * */

let p2 = document.querySelector("#p2");
const form2 = document.querySelector("#form2");
let name2 = document.querySelector("#name2");
let pwd2 = document.querySelector("#pwd2");
let radio21 = document.querySelector("#radio21");
let radio22 = document.querySelector("#radio22");
let like21 = document.querySelector("#like21");
let like22 = document.querySelector("#like22");
let like23 = document.querySelector("#like23");
let check = document.getElementsByName("checkbox2");

form2.onsubmit = function (o) {
    let pwd2len = pwd2.value.length;
    let num = 0;
    for (let i = 0; i < check.length; i++) {
        if (check[i].checked === true) {
            num++;
        }
    }
    if (name2.value === "") {
        o.preventDefault();
        alert("姓名不能为空");
    } else if (pwd2len < 2 || pwd2len > 10) {
        o.preventDefault();
        alert("密码长度2-10位");
    } else if (radio21.checked === false && radio22.checked === false) {
        o.preventDefault();
        alert("性别必须选择一项");
    } else if (num < 2) {
        o.preventDefault();
        alert("课程至少选择两项");
    }
};