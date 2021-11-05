document.write('<h2>第一题</h2>');
{
    // let rStr = s => s.split('.').reverse().join('.');
    function rStr(s){
        let arr = s.split('.');
        arr.reverse();
        return arr.join('.');
    }
    document.write(rStr('1.2.3.4')+'<br>');
    document.write(rStr('b.p.m.f.d.t.n.l')+'<br>');
    document.write(rStr('a1.a2.a3......an-1.an')+'<br>');
}
document.write('<hr>');

document.write('<h2>第二题</h2>');
// let cutIP = ip => ip.slice(0,ip.lastIndexOf('.')+1) + '*';

function cutIP(ip,n=1){
    let arr = ip.split('.');
    let len = arr.length;
    for (let i = 1; i <= n; i++) {
        arr[len - i] = '*';
    }
    return arr.join('.');
}


/*function cutIP(ip) {
     return ip.slice(0,ip.lastIndexOf('.')+1) + '*';
 }*/

/*function cutIP(ip) {
    let arr = ip.split('.');
    arr[3] = '*';
    return arr.join('.');
}*/

/*function cutIP(ip) {
    let n = ip.lastIndexOf('.');
    ip = ip.slice(0,n+1);
    return ip + '*';
}*/
document.write(cutIP('192.168.1.123',3));
document.write('<hr>');

document.write('<h2>第三题</h2>');
const time = document.querySelector('#time');

/*function zero(n) {
     n = n < 10 ? '0' + n + n : n;
    if (n < 10){
        n = '0' + n;
    }else {
        n = n;
    }
    return n;
}*/
let week = '日一二三四五六';
let zero = n => n < 10 ? '0' + n + n : n;
function showTime() {
    let data = new Date();
    let [Y,M,D,h,m,s,w] = [
        data.getFullYear(),
        zero(data.getMonth() + 1),
        zero(data.getDate()),
        zero(data.getHours()),
        data.getMinutes(),
        zero(data.getSeconds()),
        week[data.getDay()]
    ];
    time.textContent = (`${Y}年${M}月${D}日${h}时${m}分${s}秒星期${w}`);
}

showTime(); // 补充0-1秒的显示
setInterval(showTime,1000); // 1秒后开始周期显示

document.write('<hr>');

document.write('<h2>第四题</h2>');
let ss = '123';
let len = ss.length;
let sss = '';
if (len < 2 || len > 10){
    sss = '不';
}
document.write(`字符串长度${sss}符合要求`);
document.write('练习五第二题');
for (let i = 0; i < 4; i++) {
    let n = Math.floor(Math.random() * 10);
    s += n;
}
document.write(s);
document.write('<hr>');
document.write('四则运算');
{
    const one = document.querySelector('#one');
    const two = document.querySelector('#two');
    const op = document.querySelector('#op');
    const calc = document.querySelector('#calc');
    const result = document.querySelector('#result');
    calc.onclick = function () {
        let [a,b] = [one.value.trim(),two.value.trim()];
        if (a === '' || b === ''){
            result.value = '数据输入不完整';
        }else if (isNaN(a) || isNaN(b)){
            result.value = '请输入数字';
        }else if (op.value === '/' && b === 0){
            result.value = '不能除以0';
        }else {
            [a,b]=[+a,+b];
            let o = op.value;
            switch (o) {
                case '+': result.value = a + b;
                break;
                case '-': result.value = a - b;
                break;
                case '*': result.value = a * b;
                break;
                case '/': result.value = a / b;
                break;
                // result.value = eval(`${a}${o}${b}`);
            }
        }
    }
}
