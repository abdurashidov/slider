let sliderIndex = 1;
let img = document.querySelectorAll('.carousel__item');
let back = document.querySelector('.btn__prev');
let next = document.querySelector('.btn__next');
let dotsWrap = document.querySelector('.carousel__dots');
let dots = document.querySelectorAll('.dot');


showSlides(sliderIndex);

function showSlides(n) {
  if (n > img.length) {
    sliderIndex = 1;
  }
  if (n < 1) {
    sliderIndex = img.length;
  }

  img.forEach((item) => item.style.display = 'none');
  dots.forEach((item) => item.classList.remove('dot-active'));

  img[sliderIndex - 1].style.display = 'block';
  dots[sliderIndex - 1].classList.add('dot-active');
}

function plusSlides(n) {
  showSlides(sliderIndex += n);
}

back.addEventListener('click', function () {
  plusSlides(-1);
});

next.addEventListener('click', function () {
  plusSlides(1);
});

function currentSlides(n) {
  showSlides(sliderIndex = n);
}

dotsWrap.addEventListener('click', function (event) {
  for (let i = 0; i < dots.length + 1; i++) {
    if (event.target.classList.contains('dot') && event.target == dots[i - 1]) {
      currentSlides(i);
    }
  };
});
