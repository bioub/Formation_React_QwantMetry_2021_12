import { setInterval } from 'timers';

import React, { Component, useEffect, useState } from 'react';

// function HelloState() {
//   return <div className="Hello">
//     Hello <span className="name">{name}</span>
//   </div>
// }

// class HelloState extends Component {
//   state = {
//     name: 'Romain',
//   };
//   componentDidMount() {
//     setInterval(() => {
//       this.setState({
//         name: this.state.name + '!',
//       });
//     }, 3000);
//   }
//   render() {
//     return (
//       <div className="Hello">
//         Hello <span className="name">{this.state.name}</span>
//       </div>
//     );
//   }
// }

function HelloState() {
  // const tmp = useState('Romain');
  // const name = tmp[0];
  // const setName = tmp[1];
  
  //    ['Romain', function() {}]
  const [name    , setName      ] = useState('Romain');
  
  // useEffect(() => {}, []); equivalent à componentDidMount()
  useEffect(() => {
    setTimeout(() => {
      setName(name + '!');
    }, 3000);
  }, [name]);

  return (
    <div className="Hello">
      Hello <span className="name">{name}</span>
    </div>
  );
}

export default HelloState;
