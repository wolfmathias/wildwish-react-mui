import React from 'react';

export default function ShowAnimal({match, animals}) {
    
    return (
        
        <div>
        <h1>This is the show page for {animals[match.params.animalId].name}.</h1>
        </div>
    )
}