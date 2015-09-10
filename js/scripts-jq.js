$(document).on('ready', function() {

  $('.question').on('click', showFormQuestion);
  $('.bid').on('click', showFormBid);

  var currentGallery;
  $('.gallery').on('click', showGallery);

  $(document).on('keydown', keyboardHandler);
  $(document).on('click', mouseHandler);

  $(window).on('resize', positionNavElems);


/* FORMS */
  function showFormQuestion(e) {
    var target = e.target;

    e.preventDefault(); //if bid - class of link (not button)

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
    $('body').append(str);

    positionNavElems();

    $('.form').on('submit', sendForm);
  }

  function showFormBid(e) {
    var target = e.target;

    e.preventDefault(); //if bid - class of link (not button)

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
          <option>ул. Степана Разина, 174 (клуб "Планета детства")</option> \
        </select> \
        <label for="date">Выберите желаемую дату начала занятий</label> \
        <input id="date" type="date" name="date"> \
        <input type="submit" name="submit"></input> \
        <p> - поля, обязательные для заполнения</p> \
        <div class="close" title="Закрыть форму"></div> \
      </form> \
    </div> \
    ';
    $('body').append(str);

    $('#dancestyle').on('change', filterHalls);

    positionNavElems();

    $('.form').on('submit', sendForm);
  }

  function sendForm(e){
    var target = e.target;

    e.preventDefault(); //STOP default action

    var formName = $('.form').attr('data-name');

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
    $('.form').remove();

    var str = ' \
      <form name="after-submit" class="form" method="" action=""> \
        <h6>' + message + '</h6> \
        <div class="close"></div> \
      </form> \
    ';
    $('.fogging').append(str);

    positionNavElems();
  }

  function filterHalls() {
    var bid = document.forms.bid;
    var halls = bid.elements.halls;

    halls.selectedIndex = -1;
    halls.options[2].style.display = halls.options[5].style.display = "";

    if (this.selectedIndex == 0) {
      halls.selectedIndex = -1;
      halls.options[2].style.display = halls.options[5].style.display = "";
    }

    if (this.selectedIndex == 2) {
      halls.options[2].style.display = halls.options[5].style.display = "none";
    }
  }

/* GALLERIES */
  function showGallery(e) {
    var target = e.target;

    e.preventDefault();

    $('body').css({'overflow': 'hidden'});
    var href = $(target).closest('a').attr('href');
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
    $('body').append(str);

    $('.large-img').on('load', showGalleryNav);
    //largeImg.off('load', showGalleryNav);
    currentGallery = this;

    function showGalleryNav() {
      $('.arrows').css({'display': 'inline-block'});
      $('.close').css({'display': 'inline-block'});
      positionNavElems();
    }
  }

/* Common functions BEGIN */
  function positionNavElems() {
    if (!$('.fogging').length) return;

    var largeImg = $('.large-img');
    var close = $('.close');
    var arrows = $('.arrows');
    var form = $('.form');

    var mainElem;

    if (largeImg.length) {
      arrows.css({'margin-left': 0 - largeImg.innerWidth() / 2 + 'px'});
      arrows.css({'margin-top': 0 - parseInt(arrows.css('height')) / 2 + 'px'});
      arrows.css({'width': largeImg.innerWidth() + 'px'});

      mainElem = largeImg;
    }

    if (form.length) {
      mainElem = form;
    }

    close.css({'margin-left': mainElem.innerWidth() / 2 - parseInt(close.css('width')) + 'px'});
    close.css({'margin-top': 0 - mainElem.innerHeight() / 2 + 'px'});
  }
/* END Common functions */

/* All document handlers BEGIN*/
  function keyboardHandler(e) {
    var target = e.target;

    if (!$('.fogging').length) return;

    if (e.keyCode == 27) {
      hideAll();
      return;
    }

    if (e.keyCode == 37 || e.keyCode == 39) {
      changeImg(e, currentGallery);
    }
  }

  function mouseHandler(e) {
    var target = e.target;

    if (!$('.fogging').length) return;

    if ($(target).hasClass('fogging') || $(target).hasClass('close')) {
      hideAll();
      return;
    }

    if ( ($(target).hasClass('arrow-left')) || ($(target).hasClass('arrow-right')) ) {
      changeImg(e, currentGallery);
    }
  }

  function hideAll() {
    $('.fogging').remove();
    $('body').css({'overflow': ''});
  }

  function changeImg(e, currentGallery) {
    var target = e.target;

    //if (e.keyCode && e.keyCode != '37' && e.keyCode != '39') return;
    if (!$('.large-img').length) return;
    if ($(target).hasClass('arrows')) return;

    var img = $('.large-img');
    var src = img.attr('src');
    var numberPos = src.lastIndexOf('.jpg') - 1;

    if (($(target).hasClass('arrow-left')) || (e.keyCode == 37)) {
      var newPos = +src.substr(numberPos, 1) - 1;

      if (newPos < 1) {
        newPos = $(currentGallery).find('img').length;
      }
    }

    if (($(target).hasClass('arrow-right')) || (e.keyCode == 39)) {
      var newPos = +src.substr(numberPos, 1) + 1;

      if (newPos > $(currentGallery).find('img').length) {
        newPos = 1;
      }
    }

    var newsrc = src.slice(0, numberPos) + newPos + src.slice(numberPos + 1);
    img.attr('src', newsrc);
  }
/* END All document handlers */
});