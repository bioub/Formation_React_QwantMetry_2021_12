import React from 'react';

/*
Pour générer ce HTML en JavaScript dans le navigateur
On utilise l'API DOM (la variable document)
<div class="Hello" >
  Hello <span class="name">Romain</span>
</div>
Exemple :
const divEl = document.createElement('div');
divEl.className = 'Hello';

const helloText = document.createTextNode('Hello ');
divEl.appendChild(helloText);

const spanEl = document.createElement('span');
spanEl.className = 'name';
spanEl.innerText = 'Romain';
divEl.appendChild(spanEl);

document.body.appendChild(divEl);
*/

// React sans JSX
// function Hello() {
//   return React.createElement(
//     'div',
//     { className: 'Hello' },
//     'Hello ',
//     React.createElement('span', { className: 'name' }, 'Romain'),
//   );
// }

// React avec JSX
function Hello() {
  return (
    <div className="Hello">
      Hello <span className="name">Romain</span>
    </div>
  );
}

export default Hello;
