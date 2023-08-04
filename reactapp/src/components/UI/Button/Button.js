import '../../../index.css';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';


const Button = (props)=>{
    
    return(
            <button id={props.id} className={props.className} onClick={props.onClick} disabled={props.disabled} hidden={props.hidden} >{props.children}</button>
        
    )
}

export default Button;