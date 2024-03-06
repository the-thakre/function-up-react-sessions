//always import React!!
import React from "react";

//import the components that you will render/use inside this component
import Character from "./Character";

//passing props in as a parameter here allows us to pass props down as an argument in App.js
function CharacterList(props) {
    return (
        <div className="characters">
            <h2>List of Characters:</h2>
            {/* props.characterData is the array of character objects, so here we are mapping over it, then sending the object properties that we want down as props to the Character component */}
            {props.characterData.map(character => {
                return (
                    <Character
                        //here we send the properties from the character object that we would like access to in the Character component
                        image={character.image}
                        name={character.name}
                        location={character.location.name}
                        species={character.species}
                    />
                );
            })}
        </div>
    );
}

//Always make sure you export your components so the rest of you can access them in other parts of your app (via importing them)
export default CharacterList;
