document.addEventListener('DOMContentLoaded', handler);

function handler() {

  /*Page Contacts - Form Question*/
  var question = document.querySelector('.question');
  if (question) {
    question.addEventListener('click', showFormQuestion);
  }

  var bid = document.querySelector('.bid');
  if (bid) {
    bid.addEventListener('click', showFormBid);
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

    window.addEventListener('resize', positionNavElems);
  }

  document.addEventListener('click', hideAll);
  document.addEventListener('keydown', hideAll);

  function showFormQuestion(e) {
    e = e || window.event;
    var target = e.target || e.srcElement; //for IE8

    document.body.style.overflow = "hidden";

    var str = ' \
    <div class="fogging"> \
      <form name="question" class="form" method="POST" action="http://bellydance-samara.ru/wp-content/themes/zrak-wp-dance/post.php" autocmplete> \
        <h2>Задайте вопрос</h2> \
        <label for="name" data-required="true">Ваше имя </label> \
        <input id="name" type="text" name="name" placeholder="Например: Ольга" required> \
        <label for="email"data-required="true">Ваш e-mail </label> \
        <input id="email" type="email" name="email" placeholder="Например: ivanova@mail.ru" required> \
        <label for="title">Тема</label> \
        <input id="title" type="text" name="title" placeholder="Например: Вопрос о расписании"> \
        <label for="message">Сообщение</label> \
        <textarea id="message" name="message" rows="5" placeholder="Например: Будут ли занятия в следующий четверг?"></textarea> \
        <input type="submit" name="submit-question"></input> \
        <p> - поля, обязательные для заполнения</p> \
        <div class="close"></div> \
      </form> \
    </div> \
    ';
    document.body.insertAdjacentHTML('beforeEnd', str);

    positionNavElems();
  }

  function showFormBid(e) {
    e = e || window.event;
    var target = e.target || e.srcElement; //for IE8

    document.body.style.overflow = "hidden";

    var str = ' \
    <div class="fogging"> \
      <form name="bid" class="form" method="POST" action="http://bellydance-samara.ru/wp-content/themes/zrak-wp-dance/post.php" autocmplete> \
        <h2>Заполните форму</h2> \
        <label for="name" data-required="true">Ваше имя </label> \
        <input id="name" type="text" name="name" placeholder="Например: Ольга" required> \
        <label for="tel" data-required="true">Контактный телефон </label> \
        <input id="tel" type="tel" name="tel" placeholder="Например: 927-000-11-22" required> \
        <label for="dancestyle" data-required="true">Выберите направление</label> \
        <select id="dancestyle" name="dancestyle" required> \
          <option></option> \
          <option>Восточные танцы</option> \
          <option>Фитнес</option> \
        </select> \
        <label for="halls" data-required="true">Выберите адрес зала</label> \
        <select id="halls" name="halls" required> \
          <option></option> \
          <option>ул. Мориса Тореза, 103 А (Парк Победы)</option> \
          <option>ул. Пушкина (Бр. Коростелевых), 280</option> \
          <option>ул. Стара-Загора, 164</option> \
          <option>пр-т. Металлургов, 75</option> \
        </select> \
        <label for="date">Выберите желаемую дату начала занятий</label> \
        <input id="date" type="date" name="date" min="2015-07-14" step="2"> \
        <input type="submit" name="submit-bid"></input> \
        <p> - поля, обязательные для заполнения</p> \
        <div class="close" title="Закрыть форму"></div> \
      </form> \
    </div> \
    ';
    document.body.insertAdjacentHTML('beforeEnd', str);

    var danceStyle = document.getElementById('dancestyle');
    danceStyle.addEventListener('change', filterHalls);

    positionNavElems();

    function filterHalls() {
      var bid = document.forms.bid;
      var halls = bid.elements.halls;

      halls.selectedIndex = -1;
      halls.options[2].style.display = halls.options[4].style.display = "";

      if (this.selectedIndex == 0) {
        halls.selectedIndex = -1;
        halls.options[2].style.display = halls.options[4].style.display = "";
      }

      if (this.selectedIndex == 2) {
        halls.options[2].style.display = halls.options[4].style.display = "none";
      }
    }
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
      <div class="close"></div> \
      <div class="arrows"> \
        <div class="arrow-left"></div> \
        <div class="arrow-right"></div> \
      </div> \
    </div> \
    ';
    document.body.insertAdjacentHTML('beforeEnd', str);

    var largeImg = document.querySelector('.large-img');
    var arrows = document.querySelector('.arrows');
    var close = document.querySelector('.close');

    largeImg.addEventListener('load', showGalleryNav);

    //document.removeEventListener("keydown", changeImg);
    //document.addEventListener("keydown", changeImg);
    document.onkeydown = null;
    document.onkeydown = changeImg;

    arrows.addEventListener("click", changeImg);

    function changeImg(e) {
      e = e || window.event;
      var target = e.target || e.srcElement; //for IE8

      if (e.keyCode && e.keyCode != '37' && e.keyCode != '39') return;
      if (target.classList.contains('arrows')) return;

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

    function showGalleryNav() {
      arrows.style.display = "inline-block";
      close.style.display = "inline-block";
      //arrows.style.marginTop = largeImg.offsetHeight / 2 - parseFloat(getComputedStyle(arrows).height) - 10 + 'px';
      //arrows.style.marginLeft = 0 - largeImg.clientWidth / 2 + 'px';
      //arrows.style.width = largeImg.clientWidth + 'px';
      positionNavElems();
    }
  }

  function positionNavElems() {
    if (!document.querySelector('.fogging')) return;

    var largeImg = document.querySelector('.large-img');
    var close = document.querySelector('.close');
    var arrows = document.querySelector('.arrows');
    var form = document.querySelector('.form');

    var mainElem;

    if (largeImg) {
      arrows.style.marginLeft = 0 - largeImg.clientWidth / 2 + 'px';
      arrows.style.marginTop = 0 - parseInt(getComputedStyle(arrows).height) / 2 + 'px';
      arrows.style.width = largeImg.clientWidth + 'px';

      mainElem = largeImg;
    }

    if (form) {
      mainElem = form;
    }

    close.style.marginLeft = mainElem.clientWidth / 2 - parseInt(getComputedStyle(close).width) + 'px';
    close.style.marginTop = 0 - mainElem.clientHeight / 2 + 'px';
  }

  function hideAll(e) {
    e = e || window.event;
    var target = e.target || e.srcElement; //for IE8

    if (!document.querySelector('.fogging')) return;

    if ((e.keyCode == 27) || (target.classList.contains('fogging')) || (target.classList.contains('close'))) {
      document.querySelector('.fogging').remove();
      document.body.style.overflow = "";

      // if (!document.querySelector('.arrows')) return;
      // document.querySelector('.arrows').remove();
    }
  }

}