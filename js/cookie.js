(function() {
  'use strict';

 /*
  * JavaScript can create, read, and delete cookies with the document.cookie property.
  */

  function setCookie(key, value, expDay) {
    var d = new Date();
    d.setTime(d.getTime() + (expDay * 24 * 60 * 60 * 1000));
    var expires = 'expires='+d.toUTCString();
    document.cookie = key + '=' + encodeURIComponent(value) + ';' + expires + ';path=/';
  }

  function getCookie(key) {
      var name = key + '=';
      var ca = document.cookie.split(';');
      for(var i = 0; i < ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0) == ' ') {
              c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
              return c.substring(name.length, c.length);
          }
      }
      return '';
  }

  function checkCookie() {
      var greeting = getCookie('greeting');
      if (greeting != '') {
          alert("Greeting: " + 'Hello world!');
      } else {
          greeting = prompt('Please enter a greeting:', '');
          if (greeting != '' && greeting != null) {
              setCookie('greeting', greeting, 365);
          }
      }
  }

  return function() {
    checkCookie();
  } 

}());

