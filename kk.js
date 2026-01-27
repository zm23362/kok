function changeImageAndRevert() {// 画像を新しいソースに切り替える
 document.getElementById('logon').src = './image/zza.jpg'; // 10000ミリ秒（10秒）後に元の画像に戻す処理をスケジュール
 setTimeout(function() {document.getElementById('logon').src = './image/zo.jpg';}, 10000);}
