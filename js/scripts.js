document.addEventListener('DOMContentLoaded', handler);

function handler() {
  var galleries =  document.querySelectorAll('.gallery');
  if (!galleries) return;

  [].forEach.call(galleries, function(gallery) {

    var images = gallery.querySelectorAll('a');
    [].forEach.call(images, function(img) {
      (function(img) {
        img.addEventListener("click", showImg);
      })(img);
    });

  });

  document.addEventListener("click", hideImg);
  document.addEventListener("keydown", hideImgEsc);



  function showImg(e) {
    e = e || window.event;
    var target = e.target || e.srcElement; //for IE8

    document.body.style.overflow = "hidden";

    document.body.insertAdjacentHTML('beforeEnd', '<div class="fogging"></div>');
    var href = target.getAttribute('href');
    var str = '<img class="large-img" src="' + href + '"><div class="arrow-left"></div><div class="arrow-right"></div>';
    document.body.insertAdjacentHTML('beforeEnd', str);

    e.preventDefault();

    var imgCount = target.parentNode.querySelectorAll('a').length;

    var arrowLeft = document.querySelector('.arrow-left');
    arrowLeft.addEventListener("click", prevImg);

    var arrowRight = document.querySelector('.arrow-right');

    (function(imgCount) {
      arrowRight.addEventListener("click", nextImg);
    })(imgCount);


    function prevImg(e) {
      e = e || window.event;
      var target = e.target || e.srcElement; //for IE8

      var img = document.querySelector('.large-img');
      var src = img.getAttribute('src');
      var numberPos = src.lastIndexOf('.jpg') - 1;

      var newPos = +src.substr(numberPos, 1) - 1;
      if (newPos < 1) return;

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
      if (newPos > imgCount) return;

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
      document.querySelector('.large-img').remove();
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
      document.querySelector('.large-img').remove();
      document.querySelector('.arrow-left').remove();
      document.querySelector('.arrow-right').remove();
      document.body.style.overflow = "";
    }
  }

}