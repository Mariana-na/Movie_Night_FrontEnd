import React from 'react';
import {useState} from "react";

function MealPrefDropDown() {

    const [meal, setmeal] = useState ("");


  return (
    <>
        <select value={meal} onChange = {(event) => {setmeal(event.target.value)}} >
            <option value="Meal Preferences...">Meal Preferences...</option>
            <option value="American">American</option>
            <option value="British">British</option>
            <option value="Canadian">Canadian</option>
            <option value="Chinese">Chinese</option>
            <option value="Croatian">Croatian</option>
            <option value="Dutch">Dutch</option>
            <option value="Egyptian">Egyptian</option>
            <option value="Filipino">Filipino</option>
            <option value="French">French</option>
            <option value="Greek">Greek</option>
            <option value="Indian">Indian</option>
            <option value="Irish">Irish</option>
            <option value="Italian">Italian</option>
            <option value="Jamaican">Jamaican</option>
            <option value="Japanese">Japanese</option>
            <option value="Kenyan">Kenyan</option>
            <option value="Malaysian">Malaysian</option>
            <option value="Mexican">Mexican</option>
            <option value="Moroccan">Moroccan</option>
            <option value="Polish">Polish</option>
            <option value="Portuguese">Portuguese</option>
            <option value="Russian">Russian</option>
            <option value="Spanish">Spanish</option>
            <option value="Thai">Thai</option>
            <option value="Tunisian">Tunisian</option>
            <option value="Turkish">Turkish</option>
            <option value="Unknown">Unknown</option>
            <option value="Vietnamese">Vietnamese</option>
        </select>
    </>
  )
}

export default MealPrefDropDown;