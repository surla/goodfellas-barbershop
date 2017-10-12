const navigation = $("nav");
stickyDiv = "sticky";
header = $('header').height();

$(window).scroll(function() {
  if ($(this).scrollTop() > header) {
    navigation.addClass(stickyDiv);
    $('#navbar > a').css("color", "#e7e7e7");
  } else {
    navigation.removeClass(stickyDiv);
    $('#navbar > a').css("color", "#000000")
  }
});


// Gallery

$(function() {
  $(".img-w").each(function() {
    $(this).wrap("<div class='img-c'></div>")
    let imgSrc = $(this).find("img").attr("src");
    $(this).css('background-image', 'url(' + imgSrc + ')');
  })
})
