// Sticky menu background  
$(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() >= 50) {
      $('nav').addClass('scrolled');
    } else {
      $('nav').removeClass('scrolled');
    }
  });
});

// Smooth Scrolling
$('.smooth-scroll').on('click', function (e) {
  e.preventDefault()

  $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top,
    },
    500,
    'linear'
  )
})
// Parallax Effect showcase
$(window).scroll(function () {
  const scroll_position = $(window).scrollTop() / 2.5;
  $('#showcase').css({
    'background-position-y': -scroll_position + 'px',
  });
});

// Parallax effect Home Form
$(window).scroll(function () {
  const scroll_position = ($(window).scrollTop() / 3) - 750;
  $('#contact').css({
    'background-position-x': -scroll_position + 'px',
  });
});

// Parallax effect Contact
$(window).scroll(function () {
  const scroll_position = $(window).scrollTop() / 2.5;
  $('#showcase-contact').css({
    'background-position-y': -scroll_position + 'px',
  });
});

// Parallax effect Services
$(window).scroll(function () {
  const scroll_position = $(window).scrollTop() / 2.5;
  $('#showcase-services').css({
    'background-position-y': -scroll_position + 'px',
  });
});

// Services Output
$('.anchor-tag').on('click', function (e) {
  e.preventDefault()
});

function loadEvaluation() {
  $('#servicesContent').load('s-descriptions.html #evaluation');
};

function loadAccompagnement() {
  $('#servicesContent').load('s-descriptions.html #accompagnement');
};

function loadConferences() {
  $('#servicesContent').load('s-descriptions.html #conferences');
};

// Carousel


$('.carousel').carousel({
  interval: 999999,
  keyboard: true,
  pause: 'true',
  wrap: true,
  touch: true,
});

$('#equipe-slider').on('slide.bs.carousel', function () {
  console.log('SLIDE!');
});

$('#equipe-slider').on('slid.bs.carousel', function () {
  console.log('SLID!');
});

// Validate Form
// Form Blur Event Listeners
document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('phone').addEventListener('blur', validatePhone);

function validateName() {
  const name = document.getElementById('name');
  const re = /^[a-zA-Z]{3,}(?: [a-zA-Z]+){0,3}$/;

  if (!re.test(name.value)) {
    name.classList.add('is-invalid');
  } else {
    name.classList.remove('is-invalid');
  }
}

function validateEmail() {
  const email = document.getElementById('email');
  const re = /^([a-z0-9_\-\.]+)@([a-z0-9_\-\.]+)\.([a-z]{2,5})$/i;

  if (!re.test(email.value)) {
    email.classList.add('is-invalid');
  } else {
    email.classList.remove('is-invalid');
  }
}

function validatePhone() {
  const phone = document.getElementById('phone');
  const re = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;

  if (!re.test(phone.value)) {
    phone.classList.add('is-invalid');
  } else {
    phone.classList.remove('is-invalid');
  }
}


// Navbar dropdown on touch
$('.dropdown').on('show.bs.dropdown', function (e) {
  $(this).find('.dropdown-menu').first().stop(true, true).slideDown(300);
});

$('.dropdown').on('hide.bs.dropdown', function (e) {
  $(this).find('.dropdown-menu').first().stop(true, true).slideUp(300);
});