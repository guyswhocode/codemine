---
title: How do you delete a cookie 
categories: ["programming"] 
tags: ["JS"]
---
    You can delete a cookie by setting the expiry date as a passed date. You don't need to specify a cookie value in this case.
    For example, you can delete a username cookie in the current page as below.
    ```javascript
    document.cookie = "username=; expires=Fri, 07 Jun 2019 00:00:00 UTC; path=/;";
    ```
    **Note:** You should define the cookie path option to ensure that you delete the right cookie. Some browsers doesn't allow to delete a cookie unless you specify a path parameter.

    **[⬆ Back to Top](#table-of-contents)**

