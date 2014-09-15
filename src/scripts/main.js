jQuery(document).ready(function($) {
  var windowHeight = $(window).height(),
      shortWindowHeight = windowHeight - 60;
  $('#intro').css('min-height', shortWindowHeight);
  $('#usage').css('min-height', windowHeight);
});

