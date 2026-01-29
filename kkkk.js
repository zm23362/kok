function hyoji17(){
    // 表示する文字
    var str17 = "吉田綾乃クリスティー、増田三莉音、黒見明香";
    // 現在のテキストボックスの文字
    var currentText = document.timer17.moji17.value;
    var cnt17 = currentText.length;

    // 文字が全部表示されているか確認 (22文字)
    if (cnt17 < 22) {
        // まだ途中なら、1文字増やして表示
        document.timer17.moji17.value = str17.substr(0, cnt17 + 1);
    } else {
        // 【重要】最後まで行ったら、その場で「空」にするのではなく
        // 「最初の1文字目」を入れてしまうことでループを繋げます
        document.timer17.moji17.value = str17.substr(0, 1);
    }

    // 1秒後に自分を呼び出す（文字列""で囲まずに関数名のみを書くのが確実です）
    setTimeout(hyoji17, 1000);
