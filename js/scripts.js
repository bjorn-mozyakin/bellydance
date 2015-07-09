document.addEventListener('DOMContentLoaded', handler);

function handler() {
  var gallery =  document.querySelector('.gallery');
  if (!gallery) return;
  var images = gallery.querySelectorAll('a');


  [].forEach.call(images, function(img) {
    (function(img) {
      img.addEventListener("click", showImg);
    })(img);
  });

  document.addEventListener("click", hideImg);
  document.addEventListener("keydown", hideImgEsc);

  function showImg(e) {
    e = e || window.event;
    var target = e.target || e.srcElement; //for IE8

    document.body.style.overflow = "hidden";

    var div = document.createElement('div');
    div.classList.add('fogging');
    document.body.appendChild(div);

    var largeImgSrc = target.getAttribute('href');

    var largeImg = document.createElement('img');
    largeImg.classList.add('large-img');
    largeImg.setAttribute('src', largeImgSrc);

    document.body.appendChild(largeImg);

    e.preventDefault();
  }

  function hideImgEsc(e) {
    e = e || window.event;
    var target = e.target || e.srcElement; //for IE8

    if (e.keyCode == 27) {
      if (!document.querySelector('.fogging')) return;

      document.querySelector('.fogging').remove();
      document.querySelector('.large-img').remove();
      document.body.style.overflow = "";
    }
  }

  function hideImg(e) {
    e = e || window.event;
    var target = e.target || e.srcElement; //for IE8

    if (target.classList.contains('fogging')) {
      document.querySelector('.fogging').remove();
      document.querySelector('.large-img').remove();
      document.body.style.overflow = "";
    }
  }
}