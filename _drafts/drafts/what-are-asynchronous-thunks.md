---
title: What are asynchronous thunks 
categories: ["programming"] 
tags: ["JS"]
---
     The asynchronous thunks are useful to make network requests.  Let's see an example of network requests,
     ```javascript
     function fetchData(fn){
       fetch('https://jsonplaceholder.typicode.com/todos/1')
       .then(response => response.json())
       .then(json => fn(json))
     }


     const asyncThunk = function (){
        return fetchData(function getData(data){
           console.log(data)
       })
     }

     asyncThunk()
     ```
     The `getData` function won't be called immediately but it will be invoked only when the data is available from API endpoint. The setTimeout function is also used to make our code asynchronous. The best real time example is redux state management library which uses the asynchronous thunks to delay the actions to dispatch.

     **[⬆ Back to Top](#table-of-contents)**

