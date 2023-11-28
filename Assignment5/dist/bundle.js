(()=>{"use strict";var o={855:(o,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.BookManager=void 0,
e.BookManager=class{constructor(){this.books=[]}addBook(o){this.books.push(o)}getAllBooks(){return this.books}}}},
e={};function t(r){var s=e[r];if(void 0!==s)return s.exports;var a=e[r]={exports:{}};return o[r](a,a.exports,t),
a.exports}(()=>{const o=new(t(855).BookManager);o.addBook({title:"The Hobbit",author:"J.R.R. Tolkien",pages:300}),
o.addBook({title:"1984",author:"George Orwell",pages:250});const e=o.getAllBooks();console.log("All Books:",e)})()})();