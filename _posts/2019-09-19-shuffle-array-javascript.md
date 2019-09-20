---
layout: snippet
title: Shuffle array elements
description: Sometimes, you have to spin things up to have fun
categories: [JS]
language: js
highlight: javascript
---
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