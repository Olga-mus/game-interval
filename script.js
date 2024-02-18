const btnLetters = document.querySelector('.screensaver_btn');

const input = document.querySelector('.screensaver_input');

const clue = document.querySelector('.screensaver_clue');

const startPage = document.querySelector('.screensaver');

input.focus();
btnLetters.addEventListener('click', function () {
  const inputLetters = input.value.toLowerCase().split('');

  if (
    inputLetters.includes('п') &&
    inputLetters.includes('а') &&
    inputLetters.includes('н') &&
    inputLetters.includes('л') &&
    inputLetters.length === 4
  ) {
    console.log('верно');
    console.log('--------------------------');
    console.log('input', input.value);
    startPage.classList.add('hidden');
    startPage.classList.add('hidden');
    document.body.innerHTML = `<h1 class="title">Посмотри на интервалы и послушай их. Услышав полутон - жми на сердечко. Каждый верный ответ
    будет уменьшать жизни у дракона и приблизит тебя к цели. Победив дракона, ты получишь очередной ключ</h1>
<div class="main">
    <div class="main_note main_note-one">
        <img class="main_img" src="./image/1.jpg" alt="">
        <button class="main_note__one-btn">Слушать</button>
        <button class="main_note-one__heart change"></button>
    </div>

    <div class="main_note main_note-two">
        <img class="main_img" src="./image/2.jpg" alt="">
        <button class="main_note__one-btn">Слушать</button>
        <button class="main_note-one__heart"></button>
    </div>

    <div class="main_note main_note-three">
        <img class="main_img" src="./image/3.jpg" alt="">
        <button class="main_note__one-btn">Слушать</button>
        <button class="main_note-one__heart change"></button>
    </div>

    <div class="main_note main_note-four">
        <img class="main_dragon" src="./image/dragon.png" alt="изображение дракона">
        <div class="clue hidden">O</div>
<img class="main_piano" src="./image/piano.png">
    </div>

    <div class="main_note main_note-five">
        <img class="main_img" src="./image/4.jpg" alt="">
        <button class="main_note__one-btn">Слушать</button>
        <button class="main_note-one__heart change"></button>
    </div>

    <div class="main_note main_note-six">
        <img class="main_img" src="./image/5.jpg" alt="">
        <button class="main_note__one-btn">Слушать</button>
        <button class="main_note-one__heart change"></button>
    </div>
    <div class="main_note main_note-seven">
        <img class="main_img" src="./image/6.jpg" alt="">
        <button class="main_note__one-btn">Слушать</button>
        <button class="main_note-one__heart"></button>
    </div>

</div>

<div class="progress">
    <label for="dragon">ЖИЗНИ ДРАКОНА:</label>
    <progress id="dragon" max="4" value="4" aria-label="Количество жизней дракона">100%</progress>
    <div class="progress__live-dragon">
      <img class="progress__heart" src="./image/heart.png" alt="">
      <div class="progress__live">4</div>
    </div>
  

 


</div>
<audio src="./audio/1.wav" class="track"></audio>
    <audio src="./audio/2.wav" class="track"></audio>
    <audio src="./audio/3.wav" class="track"></audio>
    <audio src="./audio/4.wav" class="track"></audio>
    <audio src="./audio/5.wav" class="track"></audio>
    <audio src="./audio/6.wav" class="track"></audio>
`;

    //вешаем обработчик на прослушивание аудио
    const btnsListening = document.querySelectorAll('.main_note__one-btn');
    console.log(btnsListening.length);
    const audio = document.querySelectorAll('.track');
    console.log('audio', audio);
    btnsListening.forEach(function (el, i) {
      el.addEventListener('click', function (e) {
        audio[i].play();
      });
    });

    //клик по сердечкам с полутонами
    const btnsHeart = document.querySelectorAll('.main_note-one__heart');
    console.log('btnsHeart', btnsHeart);
    btnsHeart.forEach(function (el, i) {
      console.log(el, i);
      el.addEventListener('click', function (e) {
        if (el.classList.contains('change')) {
          console.log('ИЗМЕНИТЬ');
          el.style.backgroundImage = 'url(./image/blue.png)';
          document.querySelector('#dragon').value--;
          if (document.querySelector('#dragon').value === 0) {
            document.querySelector('.clue').classList.remove('hidden');
          }
          document.querySelector('.progress__live').textContent--;
        }
      });
    });
  } else {
    console.log('неверно');
    console.log('--------------------------');

    clue.classList.remove('hidden');
    setTimeout(() => {
      clue.classList.add('hidden');
    }, 2000);
    input.focus();
    // input.value = ' ';
    return;
  }
});

// btnListening.forEach(function (el) {
//   console.log(el);
// });
