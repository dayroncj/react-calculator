import React from 'react';
import '../css/Button.css';

function Button(props) {

  const isOperator = value => {
    return isNaN(value) && (value !== '.');
  }

  return (
    <div
      className={`container-button ${isOperator(props.children) ? 'operator' : ''}`.trim()}
      onClick={() => props.clickHandler(props.children)}>
      {props.children}
    </div>
  );
}

export default Button;