---
title: Can I avoid using postMessages completely
categories: ["programming"] 
tags: ["JS"]
---

You cannot avoid using postMessages completely(or 100%). Even though your application doesn’t use postMessage considering the risks, a lot of third party scripts use postMessage to communicate with the third party service. So your application might be using postMessage without your knowledge.
