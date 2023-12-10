let renderTimeoutId; 
 
export const render = function (arr, sel, fn, delay) { 
  sel.innerHTML = ''; 
  clearTimeout(renderTimeoutId); 
  let count = 0; 
  return function loop() { 
    let listItem = document.createElement('li'); 
    sel.append(listItem); 
    fn(arr[count].fullname, listItem, delay)(); 
    count++; 
    count < arr.length && (renderTimeoutId = setTimeout(loop, 500)); 
  }; 
};


let typeWriterTimer; 
 
export const typeWriter = function (str, sel, typeDelay = 10) { 
  clearTimeout(typeWriterTimer); 
  let breakApart = str.split(''); 
  let count = 0; 
  return function timer() { 
    sel.innerHTML += breakApart[count]; 
    count++; 
    count < breakApart.length && 
      (typeWriterTimer = setTimeout(timer, typeDelay)); 
  }; 
}; 