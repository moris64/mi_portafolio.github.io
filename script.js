$.fn.scrollView = function () {
  return this.each(function () {
    $('html, body').animate({
      scrollTop: $(this).offset().top
    }, 1000);
  });
}
$('#home-a').click(function (event) {
  event.preventDefault();
  $('#home-div').scrollView();
});
$('#about-a').click(function (event) {
  event.preventDefault();
  $('#about-div').scrollView();
});
$('#exp-a').click(function (event) {
  event.preventDefault();
  $('#exp-div').scrollView();
});
$('#portafolio-a').click(function (event) {
  event.preventDefault();
  $('#portafolio-div').scrollView();
});
$('#contact-a').click(function (event) {
  event.preventDefault();
  $('#contact-div').scrollView();
});