import React from 'react';

function CompletedItem(props) {

  return (
    <li className="completed-item">
      {props.title}
    </li>
  );
}

export default CompletedItem;