document.addEventListener('DOMContentLoaded', handler);

function handler() {

/* Constructor for Form Question BEGIN*/
  function Question(options) {
    this.elem = options.elem;
    if (this.elem) {
      this.elem.onclick = this.onclick.bind(this);
    }
  }

  Question.prototype.onclick = function(e) {
    this.showFormQuestion();
    document.querySelector('.form').addEventListener('submit', sendForm);
  }

  Question.prototype.showFormQuestion = function(e) {
    e = e || window.event;
    var target = e.target || e.srcElement; //for IE8

    document.body.style.overflow = "hidden";

    var str = ' \
    <div class="fogging"> \
      <form name="question" class="form" method="post" action="http://bellydance-samara.ru/wp-content/themes/zrak-wp-dance/post.php" autocmplete data-name="question"> \
        <h2>Задайте вопрос</h2> \
        <label for="name" data-required="true">Ваше имя </label> \
        <input id="name" type="text" name="name" placeholder="Например: Ольга" required> \
        <label for="email"data-required="true">Ваш e-mail </label> \
        <input id="email" type="email" name="email" placeholder="Например: ivanova@mail.ru" required> \
        <label for="title">Тема</label> \
        <input id="title" type="text" name="title" placeholder="Например: Вопрос о расписании"> \
        <label for="message">Сообщение</label> \
        <textarea id="message" name="message" rows="5" placeholder="Например: Будут ли занятия в следующий четверг?"></textarea> \
        <input type="submit" name="submit"></input> \
        <p> - поля, обязательные для заполнения</p> \
        <div class="close"></div> \
      </form> \
    </div> \
    ';
    document.body.insertAdjacentHTML('beforeEnd', str);

    positionNavElems();
  }
/* END Constructor for Form Question */


/* Constructor for Form Bid BEGIN*/
  function Bid(options) {
    this.elem = options.elem;
    if (this.elem) {
      this.elem.onclick = this.onclick.bind(this);
    }
  }

  Bid.prototype.onclick = function(e) {
    this.showFormBid();
    document.querySelector('.form').addEventListener('submit', sendForm);
  }

  Bid.prototype.showFormBid = function(e) {
    e = e || window.event;
    var target = e.target || e.srcElement; //for IE8

    document.body.style.overflow = "hidden";

    var str = ' \
    <div class="fogging"> \
      <form name="bid" class="form" method="post" action="http://bellydance-samara.ru/wp-content/themes/zrak-wp-dance/post.php" autocmplete  data-name="bid"> \
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
          <option>ул. Пушкина, 280 (клуб "Планета детства")</option> \
          <option>ул. Стара-Загора, 164 (клуб "Планета детства")</option> \
          <option>пр-т. Металлургов, 75 (ДК Металлург)</option> \
        </select> \
        <label for="date">Выберите желаемую дату начала занятий</label> \
        <input id="date" type="date" name="date" min="2015-07-14" step="2"> \
        <input type="submit" name="submit"></input> \
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
/* END Constructor for Form Bid */


/* Common functions for Forms BEGIN */
  function sendForm(e){
    e.preventDefault(); //STOP default action

    var formName = document.querySelector('.form').getAttribute('data-name');
    console.log(formName);
    console.log($(this).serialize());
    $.ajax(
    {
      url : $(this).attr("action"),
      type: "POST",
      data : $(this).serialize() + "&submit=" + formName,
      success:function(data, textStatus, jqXHR)
        {
          showMsgAfterSending('Спасибо, ваше письмо отправлено');
        },
      error: function(jqXHR, textStatus, errorThrown)
        {
          showMsgAfterSending('К сожалению ваше письмо не удалось отправить. Попробуйте еще раз');
        }
    });
  }

  function showMsgAfterSending(message) {
    document.querySelector('.form').remove();

    var str = ' \
      <form name="after-submit" class="form" method="" action=""> \
        <h6>' + message + '</h6> \
        <div class="close"></div> \
      </form> \
    ';
    document.querySelector('.fogging').insertAdjacentHTML('beforeEnd', str);

    positionNavElems();
  }
/* END Common functions for Forms */


/* Constructor for Image Gallery BEGIN */
  function Gallery(options) {
    this.elem = options.elem;

    if (this.elem) {
      imgs = this.elem.querySelectorAll('img');
      this.imgCount = imgs.length;

      this.elem.onclick = this.onclick.bind(this);
    }
  }

  Gallery.prototype.onclick = function(e) {
    if (e.target.tagName != 'A') return;

    this.showImg(e);

    currentGallery = this;
  }

  Gallery.prototype.showImg = function(e) {
    e = e || window.event;
    var target = e.target || e.srcElement; //for IE8

    e.preventDefault();

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

    function showGalleryNav() {
      arrows.style.display = "inline-block";
      close.style.display = "inline-block";
      positionNavElems();
    }
  }
/* END Constructor for Image Gallery */


/* Common functions BEGIN */
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
/* END Common functions */


/* All document handlers BEGIN*/
  function keyboardHandler(e) {
    e = e || window.event;
    var target = e.target || e.srcElement; //for IE8

    if (!document.querySelector('.fogging')) return;

    if (e.keyCode == 27) {
      hideAll();
      return;
    }

    if (e.keyCode == 37 || e.keyCode == 39) {
      changeImg.call(currentGallery, e);
    }
  }

  function mouseHandler(e) {
    e = e || window.event;
    var target = e.target || e.srcElement; //for IE8

    if (!document.querySelector('.fogging')) return;

    if ((target.classList.contains('fogging')) || (target.classList.contains('close'))) {
      hideAll();
      return;
    }

    if ( (target.classList.contains('arrow-left')) || (target.classList.contains('arrow-right')) ) {
      changeImg.call(currentGallery, e);
    }
  }

  function hideAll() {
    document.querySelector('.fogging').remove();
    document.body.style.overflow = "";
  }

  function changeImg(e) {
    e = e || window.event;
    var target = e.target || e.srcElement; //for IE8

    //if (e.keyCode && e.keyCode != '37' && e.keyCode != '39') return;
    if (!document.querySelector('.large-img')) return;
    if (target.classList.contains('arrows')) return;

    var img = document.querySelector('.large-img');
    var src = img.getAttribute('src');
    var numberPos = src.lastIndexOf('.jpg') - 1;

    if ((target.classList.contains('arrow-left')) || (e.keyCode == 37)) {
      var newPos = +src.substr(numberPos, 1) - 1;

      if (newPos < 1) {
        newPos = this.imgCount;
      }
    }

    if ((target.classList.contains('arrow-right')) || (e.keyCode == 39)) {
      var newPos = +src.substr(numberPos, 1) + 1;

      if (newPos > this.imgCount) {
        newPos = 1;
      }
    }

    var newsrc = src.slice(0, numberPos) + newPos + src.slice(numberPos + 1);
    img.setAttribute('src', newsrc);
  }
/* END All document handlers */


  if (document.querySelector('.question')) {
    var question = new Question({
      elem: document.querySelector('.question')
    });
  }

  if (document.querySelector('.bid')) {
    var bid = new Bid({
      elem: document.querySelector('.bid')
    });
  }

  if (document.querySelector('.gallery')) {
    var docsBondarenko = new Gallery({
      elem: document.querySelector('.docs-bondarenko')
    });

    var docsBykova = new Gallery({
      elem: document.querySelector('.docs-bykova')
    });

    var docsBragina = new Gallery({
      elem: document.querySelector('.docs-bragina')
    });

    var hallDvorec = new Gallery({
      elem: document.querySelector('.hall-dvorec')
    });

    var hallPushkina = new Gallery({
      elem: document.querySelector('.hall-pushkina')
    });

    var hallZagora = new Gallery({
      elem: document.querySelector('.hall-zagora')
    });

    var hallMetallurg = new Gallery({
      elem: document.querySelector('.hall-metallurg')
    });
  }

  var currentGallery;

  document.addEventListener('keydown', keyboardHandler);
  document.addEventListener('click', mouseHandler);

  window.addEventListener('resize', positionNavElems);
}