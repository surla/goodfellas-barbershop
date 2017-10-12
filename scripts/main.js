const navigation = $("nav");
    stickyDiv = "sticky";
    header = $('header').height();

$(window).scroll(function() {
  if( $(this).scrollTop() > header ) {
    navigation.addClass(stickyDiv);
    $('#navbar > a').css("color", "#e7e7e7");
  } else {
    navigation.removeClass(stickyDiv);
    $('#navbar > a').css("color", "#000000")
  }
});
