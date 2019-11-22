---
title: What is a storage event and its event handler 
categories: ["programming"] 
tags: ["JS"]
---
    The StorageEvent is an event that fires when a storage area has been changed in the context of another document. Whereas onstorage property is an EventHandler for processing storage events.
    The syntax would be as below
    ```javascript
     window.onstorage = functionRef;
    ```
    Let's take the example usage of onstorage event handler which logs the storage key and it's values
    ```javascript
    window.onstorage = function(e) {
      console.log('The ' + e.key +
        ' key has been changed from ' + e.oldValue +
        ' to ' + e.newValue + '.');
    };
    ```

    **[⬆ Back to Top](#table-of-contents)**

