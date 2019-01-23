function gotopage(page) {
  $('html, body').animate({
      scrollTop: $(page).offset().top
  }, 1000);
}
