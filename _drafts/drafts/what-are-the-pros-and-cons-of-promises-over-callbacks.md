---
title: What are the pros and cons of promises over callbacks 
categories: ["programming"] 
tags: ["JS"]
---
    Below are the list of pros and cons of promises over callbacks,
    **Pros:**
    1. It avoids callback hell which is unreadable
    2. Easy to write sequential asynchronous code with .then()
    3. Easy to write parallel asynchronous code with Promise.all()
    4. Solves some of the common problems of callbacks(call the callback too late, too early, many times and swallow errors/exceptions)

    **Cons:**
    1. It makes little complex code
    2. You need to load a polyfill if ES6 is not supported

    **[⬆ Back to Top](#table-of-contents)**

