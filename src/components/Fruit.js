import React from 'react';
import Button from "./Button";



function Fruit({icon, name, amount, setAmount}){
    return(
        <article>
            <h2><img src={icon} alt={name}/> {name}</h2>
            <div className="controls">
                <Button
                    type="button"
                    clickHandler={()=> {amount !== 0 && setAmount(amount - 1)}}
                >
                -
                </Button>

                <span className="amount">{amount}</span>

                <Button
                    type="button"
                    clickHandler={()=> {setAmount(amount + 1)}}
                >
                +
                </Button>

            </div>

        </article>
    )
}
export default Fruit;

