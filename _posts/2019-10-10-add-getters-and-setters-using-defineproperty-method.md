---
layout: snippet
title: Can I add getters and setters using defineProperty method 
categories: ["JS"]
language: 'js'
tags: ["JS"]
---
```javascript
var counterObj = {counter : 0};
Object.defineProperty(obj, "increment", {
    get : () => {this.counter++;}
});
```
<!-- more -->

Yes, You can use `Object.defineProperty()` method to add Getters and Setters. For example, the below counter object uses increment, decrement, add and substract properties,

```javascript
var counterObj = {counter : 0};
Object.defineProperty(obj, "increment", {
    get : () => {this.counter++;}
});

Object.defineProperty(obj, "decrement", {
    get : () => {this.counter--;}
});

// Define setters
Object.defineProperty(obj, "add", {
    set : (value) => {this.counter += value;}
});

Object.defineProperty(obj, "subtract", {
    set : (value) => {this.counter -= value;}
});

obj.add = 10;
obj.subtract = 5;
console.log(obj.increment); //6
console.log(obj.decrement); //5
```