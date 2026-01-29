function hyoji17(){ var str17 = "吉田綾乃クリスティー、増田三莉音、黒見明香";
var cnt17 = document.timer17.moji17.value.length;
if (cnt17 < 22) { // 1文字ずつ増やしていく
document.timer17.moji17.value = str17.substr(0, cnt17 + 1);
} else { // 最後まで行ったら空文字に戻す
 document.timer17.moji17.value = ""; }
// ifの外に書くことで、増殖中もリセット後も必ず1秒後にまた実行される
 setTimeout(hyoji17, 1000); }
