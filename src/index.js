function component() {

  var element = document.createElement('p');

  element.innerHTML = [
    '...and so does the javascript in ' + process.env.NODE_ENV + ' mode!'
  ].join('\n\n');

  return element;
}

let element = component();
document.body.appendChild(element); 