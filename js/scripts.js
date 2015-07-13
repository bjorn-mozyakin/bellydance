document.addEventListener('DOMContentLoaded', handler);

function handler() {
  var galleries =  document.querySelectorAll('.gallery');
  if (!galleries) return;

  [].forEach.call(galleries, function(gallery) {

    var images = gallery.querySelectorAll('a');
    [].forEach.call(images, function(img) {
      (function(img) {
        img.addEventListener('click', showImg);
      })(img);
    });

  });

  document.addEventListener('click', hideImg);
  document.addEventListener('keydown', hideImgEsc);

  var question = document.querySelector('.question');
  if (question) {
    question.addEventListener('click', showForm);
  }

  window.onresize = function() {
    if (!document.querySelector('.fogging')) return;

    var largeImg = document.querySelector('.large-img');
    var leftArrow = document.querySelector('.arrow-left');
    var rightArrow = document.querySelector('.arrow-right');

    leftArrow.style.marginTop = rightArrow.style.marginTop = largeImg.offsetHeight / 2 - parseFloat(getComputedStyle(leftArrow).height) - 10 + 'px';
  }

  function showImg(e) {
    e = e || window.event;
    var target = e.target || e.srcElement; //for IE8

    document.body.style.overflow = "hidden";

    //document.body.insertAdjacentHTML('beforeEnd', '<div class="fogging"></div>');
    var href = target.getAttribute('href');
    var str = ' \
    <div class="fogging"> \
      <img class="large-img" src="' + href + '"> \
    </div>';
    document.body.insertAdjacentHTML('beforeEnd', str);

    e.preventDefault();

    var imgCount = target.parentNode.querySelectorAll('a').length;

    var largeImg = document.querySelector('.large-img');

    var str = '<div class="arrow-left"></div><div class="arrow-right"></div>';
    document.body.insertAdjacentHTML('beforeEnd' , str);

    var leftArrow = document.querySelector('.arrow-left');
    var rightArrow = document.querySelector('.arrow-right');
    leftArrow.style.display = rightArrow.style.display = "none";

    largeImg.onload = function() {
      leftArrow.style.display = rightArrow.style.display = "";
      leftArrow.style.marginTop = rightArrow.style.marginTop = largeImg.offsetHeight / 2 - parseFloat(getComputedStyle(leftArrow).height) - 10 + 'px';
    }

    var arrowLeft = document.querySelector('.arrow-left');
    arrowLeft.addEventListener("click", prevImg);

    var arrowRight = document.querySelector('.arrow-right');

    arrowRight.addEventListener("click", nextImg);

    function prevImg(e) {
      e = e || window.event;
      var target = e.target || e.srcElement; //for IE8

      var img = document.querySelector('.large-img');
      var src = img.getAttribute('src');
      var numberPos = src.lastIndexOf('.jpg') - 1;

      var newPos = +src.substr(numberPos, 1) - 1;

      if (newPos < 1) {
        newPos = imgCount;
      }

      var newsrc = src.slice(0, numberPos) + newPos + src.slice(numberPos + 1);
      img.setAttribute('src', newsrc);
    }

    function nextImg(e) {
      e = e || window.event;
      var target = e.target || e.srcElement; //for IE8

      var img = document.querySelector('.large-img');
      var src = img.getAttribute('src');
      var numberPos = src.lastIndexOf('.jpg') - 1;

      var newPos = +src.substr(numberPos, 1) + 1;

      if (newPos > imgCount) {
        newPos = 1;
      }

      var newsrc = src.slice(0, numberPos) + newPos + src.slice(numberPos + 1);
      img.setAttribute('src', newsrc);
    }
  }

  function hideImgEsc(e) {
    e = e || window.event;
    var target = e.target || e.srcElement; //for IE8

    if (e.keyCode == 27) {
      if (!document.querySelector('.fogging')) return;

      document.querySelector('.fogging').remove();
      //document.querySelector('.container').remove();
      //document.querySelector('.large-img').remove();
      document.querySelector('.arrow-left').remove();
      document.querySelector('.arrow-right').remove();
      document.body.style.overflow = "";
    }
  }

  function hideImg(e) {
    e = e || window.event;
    var target = e.target || e.srcElement; //for IE8

    if (target.classList.contains('fogging')) {
      document.querySelector('.fogging').remove();
      //document.querySelector('.container').remove();
      //document.querySelector('.large-img').remove();
      document.querySelector('.arrow-left').remove();
      document.querySelector('.arrow-right').remove();
      document.body.style.overflow = "";
    }
  }

  function showForm(e) {
    e = e || window.event;
    var target = e.target || e.srcElement; //for IE8

    document.body.style.overflow = "hidden";
//    document.body.insertAdjacentHTML('beforeEnd', '<div class="fogging"></div>');

    var str = ' \
    <div class="fogging"> \
    <form name="question" class="form" method="POST" action="http://bellydance-samara1.ru/wp-content/themes/zrak-wp-dance/post.php" autocmplete> \
      <h2>Задайте вопрос</h2> \
      <label for="name" data-required="true">Ваше имя </label> \
      <input id="name" type="text" name="name" placeholder="Например: Ольга" required> \
      <label for="email"data-required="true">Ваш e-mail </label> \
      <input id="email" type="email" name="email" placeholder="Например: ivanova@mail.ru" required> \
      <label for="title">Тема</label> \
      <input id="title" type="text" name="title" placeholder="Например: Вопрос о расписании"> \
      <label for="message">Сообщение</label> \
      <textarea id="message" name="message" rows="5" placeholder="Например: Будут ли занятия в следующий четверг?"></textarea> \
      <input type="submit" name="submit">Отправить</input> \
      <p> - поля, обязательные для заполнения</p> \
    </form> \
    </div> \
    ';
    document.body.insertAdjacentHTML('beforeEnd', str);
  }
}