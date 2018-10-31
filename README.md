# cookie-vs-sessionstorage-vs-localstorage

Describe the difference between a **cookie**, **sessionStorage** and **localStorage**.
  
|                    |Cookies           |Local Storage      |Session Storage |
|--------------------|------------------|-------------------|----------------|  
|Capacity            |4kb               |10mb               |5mb             |
|Browsers            |HTML4 / HTML5     |HTML5              |HTML5           |
|Accessible from     |Any window        |Any window         |Same tab        |
|Expires             |Manually set      |Never              |On tab close    |
|Storage location    |Browser and server|Browser             Browser         |
|Sent with requests  |Yes               |No                 |No              | 

JavaScript can create, read, and delete cookies with the **document.cookie** property.

HTML web storage provides two objects for storing data on the client:
- **window.localStorage** - stores data with no expiration date
- **window.sessionStorage** - stores data for one session (data is lost when the browser tab is closed)

## References:
- https://www.w3schools.com/js/js_cookies.asp
- https://www.youtube.com/watch?v=AwicscsvGLg&t=11s
- https://developer.mozilla.org/en-US/docs/Web/API/document/cookie
- https://www.codexpedia.com/javascript/javascript-create-read-and-delete-cookies/
- https://www.w3schools.com/html/html5_webstorage.asp
- https://alligator.io/js/introduction-localstorage-sessionstorage/
- https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage

