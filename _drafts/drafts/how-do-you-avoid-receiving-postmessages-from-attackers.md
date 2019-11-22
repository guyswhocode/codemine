---
title: How do you avoid receiving postMessages from attackers 
categories: ["programming"] 
tags: ["JS"]
---
     Since the listener listens for any message, an attacker can trick the application by sending a message from the attacker’s origin,  which gives an impression that the receiver received the message from the actual sender’s window. You can avoid this issue by validating the origin of the message on the receiver's end using “message.origin” attribute. For examples, let's check the sender's origin(http://www.some-sender.com) on receiver side(www.some-receiver.com),
     ```javascript
     //Listener on http://www.some-receiver.com/
     window.addEventListener("message", function(message){
         if(/^http://www\.some-sender\.com$/.test(message.origin)){
              console.log('You recieved the data from valid sender', message.data);
        }
     });
     ```

     **[⬆ Back to Top](#table-of-contents)**

