import React from 'react';

function Input({inputType,inputName,inputPlaceholderName, inputValue,onChangeAction}){
    return(
        <>
            <label>{inputPlaceholderName} <input type={inputType} name={inputName} placeholder={`voer een ${inputPlaceholderName} in`}
                                   value={inputValue}
                                   onChange={onChangeAction}/></label>
        </>
    )
}
export default Input;
