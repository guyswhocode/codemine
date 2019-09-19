---
layout: snippet
title: Shuffle array elements
language: javascript
---
function random(min, max){
  return Math.floor(Math.random() * (max-min) + min);
}
function shuffle(ordered){
  let shuffled = [];
  for(var i = ordered.length; i>0; i--){
    let r = random(0, i);
    shuffled.push(ordered.splice(r, 1)[0])
  }
  return shuffled;
}

<!--more-->

This is not that