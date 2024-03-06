import React from "react";

function Character(props) {
    return (
        <div className="character">
            {/*props.characterObj is what we passed down from the CharacterList component, that refers to the character object that we can now use dot notation in order to access the values */}
            <img src={props.image} alt="character" />
            <div className="character-content">
                <h3>Name: {props.name}</h3>
                <h4>Species: {props.species}</h4>
                <h4>Location: {props.location}</h4>
            </div>
        </div>
    );
}

export default Character;
