console.log("textDisplay1");
setInterval(function(){
  i %= 4;
  $('.bounce_in_animation').html("temp");
  switch(i) {
    case 0:
      $('.bounce_in_animation').textAnimation(250, 50, 'bounceIn');
      break;
    case 1:
      $('.bounce_in_animation').textAnimation(250, 50, 'slideDown');
      break;
    case 2:
      $('.bounce_in_animation').textAnimation(250, 50, 'slideUp');
      break;
    default:
      $('.bounce_in_animation').textAnimation(250, 50, 'spinIn');
          }
  i++;
}, 45600)
