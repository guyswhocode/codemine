---
title: How do you manipulate DOM using service worker 
categories: ["programming"] 
tags: ["JS"]
---
    Service worker can't access the DOM directly. But it can communicate with the pages it controls by responding to messages sent via the `postMessage` interface, and those pages can manipulate the DOM.

    **[⬆ Back to Top](#table-of-contents)**

