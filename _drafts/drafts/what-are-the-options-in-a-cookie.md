---
title: What are the options in a cookie 
categories: ["programming"] 
tags: ["JS"]
---
    There are few below options available for a cookie,
    1. By default, the cookie is deleted when the browser is closed but you can change this behavior by setting expiry date (in UTC time).
    ```javascript
    document.cookie = "username=John expires=Sat, 8 Jun 2019 12:00:00 UTC";
    ```
    2. By default, the cookie belongs to a current page. But you can tell the browser what path the cookie belongs to using a path parameter.
    ```javascript
    document.cookie = "username=John path=/services";
    ```

    **[⬆ Back to Top](#table-of-contents)**

