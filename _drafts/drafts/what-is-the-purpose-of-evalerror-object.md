---
title: What is the purpose of EvalError object 
categories: ["programming"] 
tags: ["JS"]
---
     The EvalError object indicates an error regarding the global `eval()` function. Even though this exception is not thrown by JavaScript anymore, the EvalError object remains for compatibility. The syntax of this expression would be as below,
     ```javascript
     new EvalError([message[, fileName[, lineNumber]]])
     ```
     You can throw EvalError with in try...catch block as below,
     ```javascript
     try {
       throw new EvalError('Eval function error', 'someFile.js', 100);
     } catch (e) {
       console.log(e.message, e.name, e.fileName);              // "Eval function error", "EvalError", "someFile.js"
     ```

     **[⬆ Back to Top](#table-of-contents)**

