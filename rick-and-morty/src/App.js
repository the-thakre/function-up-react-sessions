//Step 1: add axios to your dependencies, then import it. Import useState and useEffect from the "react" dependency
import React, { useState, useEffect } from "react";
import axios from "axios";

import CharacterList from "./components/CharacterList";

function App() {
  let [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(res => {
        setData(res.data.results);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  //Step 2: make an axios call to grab your data & store it in your state via the useState hook
  //data URL = https://rickandmortyapi.com/api/character/
  //Console.log your results to see the data you are receiving, you should get it to store an array of "character" objects

  return (
    <div className="App">
      <h1>Rick & Morty</h1>
      <h3 className="description">
        Use the Rick & Morty API to display a list of characters!
      </h3>
      <CharacterList characterData={data} />
    </div>
  );
}

//Step 3: complete the function (CharacterList) that will receive the character data array from App
//this function will map over the data, generating a card of info for each character
//return an instance of Character in your map function, which will loop over the character data and create a card for each character

//Step 4: complete the function (Character) that will build the character info card
//don't forget to pass down props so the character function has access to the data!

//Step 5: Break the Characters & Character functions out into separate components

export default App;
