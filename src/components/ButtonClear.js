import React from "react";
import '../css/ButtonClear.css'

const ButtonClear = (props) => (
    <div className='button-clear' onClick={() => props.clearHandler()}>
        {props.children}
    </div>
);

export default ButtonClear;