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

  function setSessionStorageItem(key, value) {
    if (checkStorage()) {
      try {
        sessionStorage.setItem(key, value);
      } catch(e) {
        return false;
      }
    }
    
  }

  function getSessionStorageItem(key) {
    if (checkStorage()) {
      try {
        sessionStorage.getItem(key);
      } catch(e) {
        return false;
      }
    }
  }

  function deleteSessionStorageItem(key) {
    if (checkStorage()) {
      try {
        sessionStorage.removeItem(key);
      } catch(e) {
        return false;
      }

    }
  }

  function deleteSessionStorage() {
    if (checkStorage()) {
      try {
        sessionStorage.clear();
      } catch(e) {
        return false;
      }
    }
  }

  setSessionStorageItem('greeting', 'Hello world!');
  console.log(getSessionStorageItem('greeting'));
  
}());

