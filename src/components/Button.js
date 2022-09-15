import React from 'react';



function Button({type,clickHandler,children}){

    return(
        <button type={type} onClick={clickHandler}>
            {children}
        </button>
    )
}

export default Button;