const click_clear_cookci = document.querySelector('#clear');
const click_add_cookci = document.querySelector('#add');
const out_put_cookci = document.querySelector('#output');
let item = 0;

click_add_cookci.addEventListener('click', addToLocalStorage);
click_clear_cookci.addEventListener('click', clearLocalStorage);

function addToLocalStorage() {
  let textareaValue = document.querySelector('#textarea').value;
  if (textareaValue === "")
    alert('It\'s empty. Try to input something in "Text input"')
  else {
    localStorage.setItem(item.toString(), textareaValue+generateDate());
    if (out_put_cookci.innerHTML === '[Empty]') {
      out_put_cookci.innerHTML = '';
      out_put_cookci.insertAdjacentHTML('beforeend', `<div>--> ${localStorage.getItem(item.toString())}</div>`);
    }
    else
      out_put_cookci.insertAdjacentHTML('beforeend', `<div>--> ${localStorage.getItem(item.toString())}</div>`);
    item++;
  }
}

function clearLocalStorage() {
  let question = confirm('Delete cookies?')
  if (question === true) {
    localStorage.clear();
    out_put_cookci.innerHTML = '[Empty]';
  }
}

function generateDate() {
  const date = new Date();

  const date3 = ` [${date.getDate()<10?("0" + date.getDate()):date.getDate()}.${date.getMonth()<10?("0" + date.getMonth()):date.getMonth()}.${date.getFullYear()}, ${date.getHours()<10?("0" + date.getHours()):date.getHours()}:${date.getMinutes()<10?("0" + date.getMinutes()):date.getMinutes()}:${date.getSeconds()<10?("0" + date.getSeconds()):date.getSeconds()}]`;
  return date3;
}

if(localStorage.length === 0)
  out_put_cookci.innerHTML = '[Empty]';
else
  translation();

function translation() {
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.getItem(i.toString());
    if(i === 0) out_put_cookci.innerHTML = `--> ${key}`;
    else out_put_cookci.innerHTML += `<div>--> ${key}</div>`;
  }
}