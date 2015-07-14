document.addEventListener('DOMContentLoaded', handler);

function handler() {

  /*Page Contacts - Form Question*/
  var question = document.querySelector('.question');
  if (question) {
    question.addEventListener('click', showForm);
  }

  var galleries =  document.querySelectorAll('.gallery');
  if (galleries) {

    [].forEach.call(galleries, function(gallery) {

      var images = gallery.querySelectorAll('a');
      [].forEach.call(images, function(img) {
        (function(img) {
          img.addEventListener('click', showImg);
        })(img);
      });

    });

    window.addEventListener('resize', resizeImg);
  }

  document.addEventListener('click', hideAll);
  document.addEventListener('keydown', hideAll);

  function showForm(e) {
    e = e || window.event;
    var target = e.target || e.srcElement; //for IE8

    document.body.style.overflow = "hidden";

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

  function showImg(e) {
    e = e || window.event;
    var target = e.target || e.srcElement; //for IE8

    e.preventDefault();

    var imgCount = target.parentNode.querySelectorAll('a').length;

    document.body.style.overflow = "hidden";

    var href = target.getAttribute('href');
    var str = ' \
    <div class="fogging"> \
      <img class="large-img" src="' + href + '"> \
    </div> \
    <div class="arrows"> \
      <div class="arrow-left"></div> \
      <div class="arrow-right"></div> \
    </div> \
    ';
    document.body.insertAdjacentHTML('beforeEnd', str);

    var largeImg = document.querySelector('.large-img');
    var arrows = document.querySelector('.arrows');

    arrows.style.display = "none";
    largeImg.addEventListener('load', showArrows);

    //document.removeEventListener("keydown", changeImg);
    //document.addEventListener("keydown", changeImg);
    document.onkeydown = null;
    document.onkeydown = changeImg;

    arrows.addEventListener("click", changeImg);

    function changeImg(e) {
      e = e || window.event;
      var target = e.target || e.srcElement; //for IE8

      if (e.keyCode && e.keyCode != '37' && e.keyCode != '39') return;

      var img = document.querySelector('.large-img');
      var src = img.getAttribute('src');
      var numberPos = src.lastIndexOf('.jpg') - 1;

      if ((target.classList.contains('arrow-left')) || (e.keyCode == "37")) {
        var newPos = +src.substr(numberPos, 1) - 1;

        if (newPos < 1) {
          newPos = imgCount;
        }
      }

      if ((target.classList.contains('arrow-right')) || (e.keyCode == "39")) {
        var newPos = +src.substr(numberPos, 1) + 1;

        if (newPos > imgCount) {
          newPos = 1;
        }
      }

      var newsrc = src.slice(0, numberPos) + newPos + src.slice(numberPos + 1);
      img.setAttribute('src', newsrc);
    }

    function showArrows() {
      arrows.style.display = "";
      arrows.style.marginTop = largeImg.offsetHeight / 2 - parseFloat(getComputedStyle(arrows).height) - 10 + 'px';
    }
  }

  function resizeImg() {
    if (!document.querySelector('.large-img')) return;

    var largeImg = document.querySelector('.large-img');
    var arrows = document.querySelector('.arrows');

    arrows.style.marginTop = largeImg.offsetHeight / 2 - parseFloat(getComputedStyle(arrows).height) - 10 + 'px';
  }

  function hideAll(e) {
    e = e || window.event;
    var target = e.target || e.srcElement; //for IE8

    if (!document.querySelector('.fogging')) return;

    if ((e.keyCode == 27) || (target.classList.contains('fogging'))) {
      document.querySelector('.fogging').remove();
      document.body.style.overflow = "";

      if (!document.querySelector('.arrows')) return;
      document.querySelector('.arrows').remove();
    }
  }

}