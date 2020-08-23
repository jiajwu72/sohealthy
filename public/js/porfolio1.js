// ------------- VARIABLES ------------- //
// alert('porfolio1.js')
var vids = $("video");
$.each(vids, function(){
       this.controls = false;
       if (this.paused) {
         console.log("pause");
         this.play();
       } else {
         console.log("play");
       }

});
//Loop though all Video tags and set Controls as false

$("video").click(function() {
  //console.log(this);
  if (this.paused) {
    this.play();
  } else {
    this.pause();
  }
});
$(document).ready(function(){
  var isWebkit = navigator && navigator.userAgent.match(/webkit/i);
  var $root = $(isWebkit ? 'body' : 'html');
  var elements = $('div'), elcount = elements.length;
  var scrolling = false;
  // Replacing the CSS attr(... url)
  elements.css('background-image', function(i){
    return 'url('+$(this).data('img')+')';
  });
  //Add permalinks
  elements.each(function(i){
    var $t = $(this);
    var id = $t.attr('id');
    if(!id) return;
    $('<a>').addClass('permalink')
            .attr('href', '#'+id)
            .appendTo($t);
  });
  $root.keydown(function(e){
    if(e.keyCode != 37 && e.keyCode != 39) return;
    var current = scrolling || 0;
    if(scrolling === false)
    {
      var bsT = $root.scrollTop(), t;
      while(current < elcount && (t = elements.eq(current).offset().top) < bsT)
        current++;
    }
    if(e.keyCode == 37) current--;
    else if(scrolling !== false || t == bsT) current++;
    current = (current + elcount) % elcount;
    $root.stop().animate({scrollTop: elements.eq(current).offset().top}, function(){scrolling = false;});
    scrolling = current;
  });
});
