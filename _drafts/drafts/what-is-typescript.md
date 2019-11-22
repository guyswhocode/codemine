---
title: What is typescript 
categories: ["programming"] 
tags: ["JS"]
---
    TypeScript is a typed superset of JavaScript created by Microsoft that adds optional types, classes, async/await, and many other features, and compiles to plain JavaScript. Angular built entirely in TypeScript and used as a primary language.
    You can install it globally as
    ```
    npm install -g typescript
    ```
    Let's see a simple example of TypeScript usage,
    ```typescript
    function greeting(person: string) {
        return "Hello, " + person;
    }

    let user = "Sudheer";

    document.body.innerHTML = greeting(user);
    ```
    The greeting method allows only string type as argument.

   **[⬆ Back to Top](#table-of-contents)**

