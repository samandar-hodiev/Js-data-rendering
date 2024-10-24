"use strict";

// ------------ selector function ------------ //
function $(selector){
    return document.querySelector(selector);
};

function $$(selector){
    return document.querySelectorAll(selector);
};








// ------------ function of createElement ------------ //
const creatorFunc = (tags, classes, contents)=>{
    const elements = document.createElement(tags);
          elements.setAttribute('class',classes);
          elements.innerHTML=contents;

    return elements;
};