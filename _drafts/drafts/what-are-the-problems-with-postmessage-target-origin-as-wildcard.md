---
title: What are the problems with postmessage target origin as wildcard 
categories: ["programming"] 
tags: ["JS"]
---
     The second argument of postMessage method specifies which origin is allowed to receive the message. If you use the wildcard “*” as an argument then any origin is allowed to receive the message. In this case, there is no way for the sender window to know if the target window is at the target origin when sending the message. If the target window has been navigated to another origin, the other origin would receive the data. Hence, this may lead to XSS vulnerabilities.
     ```javascript
     targetWindow.postMessage(message, '*');
     ```

     **[⬆ Back to Top](#table-of-contents)**

