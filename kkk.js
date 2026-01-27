// 全ての画像を取得
const images = document.querySelectorAll('#slideshow img'); let currentIndex = 0;
function showNextImage() {// 現在表示されている画像から active クラスを消す 
  images[currentIndex].classList.remove('active');
 // 次の画像の番号を計算（最後の次は最初に戻る）
  currentIndex = (currentIndex + 1) % images.length;
 // 次の画像に active クラスをつける 
  images[currentIndex].classList.add('active');
}
// 3000ミリ秒（3秒）ごとに showNextImage 関数を実行 
setInterval(showNextImage, 3000);
