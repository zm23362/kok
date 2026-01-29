function hyoji17(){
var str17 = "吉田綾乃クリスティー、増田三莉音、黒見明香";
var cnt17 = document.timer17.moji17.value.length;
 if (cnt17 < 22) {document.timer17.moji17.value = str17.substr(0, cnt17 + 1);
 } else { document.timer17.moji17.value = ""; 
 }
// 文字列ではなく、関数名をそのまま渡す 
setTimeout(hyoji17, 1000); 
}
