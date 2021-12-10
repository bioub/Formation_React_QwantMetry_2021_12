import React from 'react';

interface Props {
  name?: string;
}

function HelloProps(props: Props) {
  return (
    <div className="Hello">
      Hello <span className="name">{props.name}</span>
    </div>
  );
}

export default HelloProps;
