---
title: Get the list of keys of any object 
categories: ["JS"] 
tags: ["JS"]
highlight: "js"
language: "js"
---
<!--more-->
You can use `Object.keys()` method which is used return an array of a given object's own property names, in the same order as we get with a normal loop. 
For example, you can get the keys of a user object,
```javascript
const user = {
  name: 'John',
  gender: 'male',
  age: 40
};

console.log(Object.keys(user)); 
//['name', 'gender', 'age']
```
