jQuery(document).ready(function($) {
  var windowHeight = $(window).height();
  $('#intro').height(windowHeight - 60);
  $('#usage').css('min-height', windowHeight);
});

