// Check your ECMAScript privilege


var checkbox = document.getElementById('checkbox');
var thanks = document.querySelector('aside');

var adaptFontSize = function(e){
  var ems = window.innerWidth / 256;
  document.body.setAttribute('style', 'font-size: ' + ems + 'em');
}

var checkPrivilege = function(e){
  this.querySelector('i').innerHTML = '&#10003;';
  this.setAttribute('aria-checked', 'true');
  this.setAttribute('class', 'privilege-checked');
  thanks.setAttribute('class', 'privilege-checked');
}

adaptFontSize();

window.addEventListener('resize', adaptFontSize);
checkbox.addEventListener('click', checkPrivilege);
