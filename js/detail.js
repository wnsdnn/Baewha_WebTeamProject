$(document).ready(function () {
  var slideCount = $('.slide li').length;
  var currentIndex = 0;

  function showSlide(index) {
    $('.slide li').eq(index).fadeIn(150).siblings().fadeOut(150);
    $('#dot ul li').eq(index).addClass('on').siblings().removeClass('on');
    $('.slide li').hide();
    $('.slide li:eq(' + index + ')').fadeIn();
    $('.dot li').removeClass('on');
    $('.dot li:eq(' + index + ')').addClass('on');
  }

  function nextSlide() {
    currentIndex++;
    if (currentIndex >= slideCount) {
      currentIndex = 0;
    }
    showSlide(currentIndex);
  }

  function prevSlide() {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = slideCount - 1;
    }
    showSlide(currentIndex);
  }

  $('.next').click(function () {
    nextSlide();
  });

  $('.prev').click(function () {
    prevSlide();
  });

  $('#dot ul li').click(function () {
    var index = $(this).index();
    currentIndex = index;
    showSlide(currentIndex);
  });

  showSlide(currentIndex);
});


var checkInButton = document.getElementById("check-in-button");
var checkInDateInput = document.getElementById("check-in-date");

checkInButton.addEventListener("click", function () {
  var selectedDate = checkInDateInput.value;
  // 여기에 체크인 동작을 수행하는 코드를 추가합니다.
  alert("체크인 날짜: " + selectedDate);
});