(function() {
  'use strict';
/*
 * HTML web storage provides two objects for storing data on the client:
 * window.localStorage - stores data with no expiration date
 * window.sessionStorage - stores data for one session (data is lost when the browser tab is closed)
 */

  function checkStorage() {
    if (typeof(Storage) !== "undefined") {
      return true;
    } else {
      console.log('Sorry! No Web Storage support...');
      return false;
    }
  }

  function setLocalStorageItem(key, value) {
    if (checkStorage()) {
      try {
        localStorage.setItem(key, value);
      } catch(e) {
        return false;
      }
    }
    
  }

  function getLocalStorageItem(key) {
    if (checkStorage()) {
      try {
        localStorage.getItem(key);
      } catch(e) {
        return false;
      }
    }
  }

  function deleteLocalStorageItem(key) {
    if (checkStorage()) {
      try {
        localStorage.removeItem(key);
      } catch(e) {
        return false;
      }

    }
  }

  function deleteLocalStorage() {
    if (checkStorage()) {
      try {
        localStorage.clear();
      } catch(e) {
        return false;
      }
    }
  }

  setLocalStorageItem('greeting', 'Hello world!');
  console.log(getLocalStorageItem('greeting'));

}());

