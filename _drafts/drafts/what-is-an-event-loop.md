---
title: What is an event loop 
categories: ["programming"] 
tags: ["JS"]
---
     The Event Loop is a queue of callback functions. When an async function executes, the callback function is pushed into the queue. The JavaScript engine doesn't start processing the event loop until async function has finished executing the code.
     **Note:** It allows Node.js to perform non-blocking I/O operations eventhough JavaScript is single-threaded.

     **[⬆ Back to Top](#table-of-contents)**

