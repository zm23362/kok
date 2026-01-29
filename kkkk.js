function hyoji17(){
    // 表示する文字列
    var str17 = "吉田綾乃クリスティー、増田三莉音、黒見明香";
    
    // フォームの要素を変数に入れて、エラーを防ぐ
    var target = document.timer17.moji17;
    var cnt17 = target.value.length;

    // 全22文字。もし22文字以上（最後まで）表示されていたらリセット
    if (cnt17 >= 22) {
        target.value = ""; // 一旦空にする
    } else {
        // 1文字増やす
        target.value = str17.substr(0, cnt17 + 1);
    }

    // 文字列としてではなく、関数名として呼び出す（これが最も重要です）
    setTimeout(hyoji17, 1000);
}
