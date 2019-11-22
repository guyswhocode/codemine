---
title: What are the main rules of promise 
categories: ["programming"] 
tags: ["JS"]
---
    A promise must follow a specific set of rules,
    1. A promise is an object that supplies a standard-compliant `.then()` method
    2. A pending promise may transition into either fulfilled or rejected state
    3. A fulfilled or rejected promise is settled and it must not transition into any other state.
    4. Once a promise is settled, the value must not change.

    **[⬆ Back to Top](#table-of-contents)**

