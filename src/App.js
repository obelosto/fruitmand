import React from 'react';
import './App.css';

import aardbei from './assets/strawberry.png';
import banaan from './assets/banana.png';
import appel from './assets/apple.png';
import kiwifruit from './assets/kiwi.png';

import Fruit from "./components/Fruit";
import Input from "./components/Input";
import Button from "./components/Button";



function App() {

///berries
    const berries = {
        strawberry: "Aardbeien",
        banana: "Bananen",
        apple: "Appels:",
        kiwi: "Kiwi's:",
    };
    //console.log(berries);
    const {strawberry, banana, apple, kiwi} = berries;

    const initialState = {
        strawberryStart: 0,
        bananaStart: 0,
        appleStart: 0,
        kiwiStart: 0,
    };
    const{strawberryStart, bananaStart, appleStart, kiwiStart} = initialState;

    const [strawberryAmount, setStrawberryAmount] = React.useState(strawberryStart);
    const [bananaAmount, setBananaAmount] = React.useState(bananaStart);
    const [appleAmount, setAppleAmount] = React.useState(appleStart);
    const [kiwiAmount, setKiwiAmount] = React.useState(kiwiStart);

    function resetAmount(){
        setStrawberryAmount(strawberryStart);
        setBananaAmount(bananaStart);
        setAppleAmount(appleStart);
        setKiwiAmount(kiwiStart);
    }

///form

    const [formState, setFormState] = React.useState({
        name: "",
        surname: "",
        age: 0,
        postcode: "",
        freq:"",
        time:"",
        comment:"",
        conditions: false,
    });
    const { name, surname, age, postcode, freq, time, comment, conditions  } = formState;


    //const [conditions,toggleConditions] = React.useState(false);

    /*function handleChange(e) {
        const value =
            e.target.type === "checkbox" ? e.target.checked : e.target.value;
        setFormState({
            ...formState,
            [e.target.name]: value
        });
    }*/
    const handleChange = (e) => {
        const { name, type, value, checked } = e.target;
        const inputValue = type === "checkbox" ? checked : value;
        setFormState({ ...formState, [name]: inputValue });
    }

    function handleSubmit(e) {
        e.preventDefault();

        ///checkFilling
        ////if (name, surname, age, postcode, freq, time, comment == initialState )


        console.log(strawberry,":", strawberryAmount, banana,":", bananaAmount, apple,":", appleAmount,kiwi,":", kiwiAmount);
        console.log(name, surname, age, postcode, freq, time, conditions, comment);
        resetAmount();
    }

    const berries1 = { strawberries1: { name1: "Aardbeien", amount1: strawberryAmount}, bananas1: { name1: "Bananen", amount1: bananaAmount}}
    console.log(berries1.strawberries1.name1);

  return (
    <content>
    <h1>Fruitmand bezorgservice</h1>
    <section>
       <Fruit
           icon={aardbei}
           name={strawberry}
           amount = {strawberryAmount}
           setAmount = {setStrawberryAmount}
       />
       <Fruit
           icon={banaan}
           name={banana}
           amount = {bananaAmount}
           setAmount = {setBananaAmount}
       />
       <Fruit
           icon={appel}
           name={apple}
           amount = {appleAmount}
           setAmount = {setAppleAmount}
       />
       <Fruit
           icon={kiwifruit}
           name={kiwi}
           amount = {kiwiAmount}
           setAmount = {setKiwiAmount}
       />

        <Button
            type="button"
            clickHandler = { ()=> resetAmount() }
        >
        Reset
        </Button>


    </section>
    <section>
        <article>
            <h3>Contact details</h3>
            <form onSubmit={handleSubmit}>

                <Input
                    inputType="text"
                    inputName="name"
                    inputPlaceholderName="name"
                    inputValue={name}

                    onChangeAction={handleChange}
                />

                <Input
                    inputType="text"
                    inputName="surname"
                    inputPlaceholderName="achternaam"
                    inputValue={surname}

                    onChangeAction={handleChange}
                />

                <label>Leeftijd <input type="number" name="age" placeholder="voer een leeftijd in"
                                       value={age}
                                       onChange={handleChange} /></label>

                <Input
                    inputType="text"
                    inputName="postcode"
                    inputPlaceholderName="postcode"
                    inputValue={postcode}
                    onChangeAction={handleChange}
                />

                <label>Bezorgfrequentie
                    <div className="label-row">
                        <select name="freq" value={freq} onChange={handleChange}>
                            <option value="week">Iedere week</option>
                            <option value="om/week">Om de week</option>
                            <option value="maand">Iedere maand</option>
                        </select>
                    </div>
                    <div className="label-row">
                        <label><input type="radio" name="time" checked={time === 'day'} value="day" onChange={handleChange}/>Overdag</label>
                        <label><input type="radio" name="time" checked={time === 'evening'}  value="evening" onChange={handleChange}/>s Avonds</label>
                    </div>
                </label>

                <label>Opmerking<br/>
                    <textarea name="comment" rows="4" cols="50"
                              value={comment}
                              onChange={handleChange}> </textarea>
                </label>
               {/* <label>
                    <input type="checkbox"
                           checked={conditions}
                           onChange={()=> toggleConditions(!conditions) } />
                    Ik ga akkoord met de voorwaarden
                </label>*/}
                <label>
                    <input type="checkbox"
                           checked={conditions}
                           onChange={handleChange} />
                    Ik ga akkoord met de voorwaarden
                </label>

                <Button
                    type="submit"
                >
                Verzend
                </Button>


            </form>
        </article>

    </section>

    </content>
  );
}

export default App;
