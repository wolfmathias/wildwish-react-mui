import React from 'react';
import { Typography } from '@material-ui/core';

const AnimalContent = (animal) => {
    
    return (
        <Typography variant="h1">
            {animal.name}
        </Typography>
    )
}

export default AnimalContent