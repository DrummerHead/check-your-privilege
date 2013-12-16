var body = document.querySelector('body');

var adaptFontSize = function(e){
  var ems = window.innerWidth / 256;
  body.setAttribute('style', 'font-size: ' + ems + 'em');
}

adaptFontSize();

window.addEventListener('resize', adaptFontSize);
