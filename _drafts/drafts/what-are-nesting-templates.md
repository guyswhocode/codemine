---
title: What are nesting templates 
categories: ["programming"] 
tags: ["JS"]
---
     The nesting templates is a feature supported with in template literals syntax to allow inner backticks inside a placeholder ${ } within the template. For example, the below nesting template is used to display the icons based on user permissions whereas outer template checks for platform type,
     ```javascript
     const iconStyles = `icon ${ isMobilePlatform() ? '' :
      `icon-${user.isAuthorized ? 'submit' : 'disabled'}` }`;
     ```
     You can write the above usecase without nesting template feature as well. However, nesting template feature is more compact and readable.
     ```javascript
     //Without nesting templates
      const iconStyles = `icon ${ isMobilePlatform() ? '' :
       (user.isAuthorized ? 'icon-submit' : 'icon-disabled'}`;
     ```

     **[⬆ Back to Top](#table-of-contents)**

