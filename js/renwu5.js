// 提示信息
const Button = document.querySelector(".Button");
const content = document.querySelector(".content");
function overShow() {
  content.style.display = "block";
}
function overHidden() {
  content.style.display = "none";
}
Button.addEventListener("mouseover", overShow);
Button.addEventListener("mouseout", overHidden);

//获取元素（两种方式都可以）
var input = document.querySelector("input");
var imgs = document.getElementById("eyes");
//下面是一个判断每次点击的效果
var flag = 0;
imgs.onclick = function () {
  if (flag == 0) {
    input.type = "text";
    eyes.src = "../image/2.png"; //睁眼图
    flag = 1;
  } else {
    input.type = "password";
    eyes.src = "../image/1.png"; //闭眼图
    flag = 0;
  }
};

let login = document.getElementById("login");
let bg = document.getElementById("bg");
// 1.点击"点击，弹出登陆框",弹出登陆窗口和遮盖层
let adminBtn = document.getElementById("adminBtn");
adminBtn.onclick = function () {
  login.style.display = "block";
  bg.style.display = "block";
  return false;
};
// 2.点击"关闭",隐藏登陆窗口和遮盖层
let closeBtn = document.getElementById("closeBtn");
closeBtn.onclick = function () {
  login.style.display = "none";
  bg.style.display = "none";
  return false;
};

// 关键字
document.querySelector("#t-c .input").onfocus = function () {
  document.querySelector("#t-c .input").value = "";
};
document.querySelector("#t-c .input").onblur = function () {
  if (document.querySelector("#t-c .input").value == "") {
    document.querySelector("#t-c .input").value = "请输入";
  }
};
// 图片切换

document.querySelector("#sencend .i-1").onmouseover = function () {
  document.querySelector("#sencend .i-5").src = "../image/1.1.png";
};
document.querySelector("#sencend .i-2").onmouseover = function () {
  document.querySelector("#sencend .i-5").src = "../image/2.2.png";
};
document.querySelector("#sencend .i-3").onmouseover = function () {
  document.querySelector("#sencend .i-5").src = "../image/3.3.png";
};
document.querySelector("#sencend .i-4").onmouseover = function () {
  document.querySelector("#sencend .i-5").src = "../image/4.4.png";
};
