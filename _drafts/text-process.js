const fs = require('fs');
let re = new RegExp('\n[0-9]{1,3}\. #');
let QStore;

let readFile = new Promise((resolve, reject) => {
  fs.readFile('source.md', 'utf8', function(err, data) {
    if(err){
      reject([])
    }
    else{
      resolve(data.split(/\n[0-9]{1,3}\. #/))
    }
  });
})

function writeFile(filename, content){
  return new Promise((resolve, reject) => {
    fs.writeFile(`drafts/${filename}`, content, function (err) {
      if (err) reject(err);
      resolve();
    }); 
  });
}

// console.log('qStore', qStore[1].replace(/\n.* Back to Top.*\n/, ''));

let writeTasks = [];
readFile.then(questions => {
  questions.forEach(q => {
  let qLines = q.split('\n')
  let actualContentLines = qLines.slice(1, qLines.length);
  let title = qLines[0].replace(/\?/, '').replace(/## /, '');
  let filename = title.replace(/ /g, '-').toLowerCase();
  let content = `---
title: ${title} 
categories: ["programming"] 
tags: ["JS"]
---
${actualContentLines.join('\n')}
`
writeTasks.push(writeFile(`${filename}.md`, content))
})
})

Promise.all(writeTasks);
