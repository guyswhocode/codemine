---
title: What is ArrayBuffer 
categories: ["programming"] 
tags: ["JS"]
---
     An ArrayBuffer object is used to represent a generic, fixed-length raw binary data buffer. You can create it as below,
     ```javascript
     let buffer = new ArrayBuffer(16); // create a buffer of length 16
     alert(buffer.byteLength); // 16
     ```
     To manipulate an ArrayBuffer, we need to use a “view” object.
     ```javascript
     //Create a DataView referring to the buffer
      let view = new DataView(buffer);
     ```

     **[⬆ Back to Top](#table-of-contents)**

