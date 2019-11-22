---
title: How do you declare strict mode 
categories: ["programming"] 
tags: ["JS"]
---
    The strict mode is declared by adding "use strict"; to the beginning of a script or a function.
    If declare at the beginning of a script, it has global scope.
    ```javascript
    "use strict";
    x = 3.14; // This will cause an error because x is not declared
    ```
    and if you declare inside a function, it has local scope
    ```javascript
    x = 3.14;       // This will not cause an error.
    myFunction();

    function myFunction() {
      "use strict";
      y = 3.14;   // This will cause an error
    }
    ```

    **[⬆ Back to Top](#table-of-contents)**

