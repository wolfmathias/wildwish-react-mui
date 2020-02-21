import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import NavBar from './components/NavBar'
import WishCardGrid from './components/WishCardGrid';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const Animals = [
  {
    "id": 131,
    "animal_id": 29,
    "toy_id": 7,
    "created_at": "2020-01-30T17:54:04.764Z",
    "updated_at": "2020-02-15T01:55:41.773Z",
    "status": "active",
    "image_url": null,
    "zoo_id": null,
    "message": null,
    "current_funding": null,
    "total_to_fund": 10.0,
    "animal": {
      "id": 29,
      "name": "Tsathoggua",
      "species": "Mouse",
      "bio": null,
      "keeper_id": 5,
      "created_at": "2020-01-30T17:54:03.580Z",
      "updated_at": "2020-01-30T17:54:03.580Z",
      "location": "Cheyenne Mountain Zoo - Colorado, USA"
    },
    "toy": {
      "id": 7,
      "created_at": "2020-01-30T17:54:04.419Z",
      "updated_at": "2020-01-30T17:54:04.419Z",
      "name": "Tube",
      "description": "It's a tube. Small animals can crawl inside it. Large animals can stick their head in it. Tuuuuuuuuubbbbeeee!!!",
      "cost": 10.0
    }
  },
  {
    "id": 741,
    "animal_id": 132,
    "toy_id": 3,
    "created_at": "2020-01-30T17:54:06.226Z",
    "updated_at": "2020-02-15T01:55:41.762Z",
    "status": "active",
    "image_url": null,
    "zoo_id": null,
    "message": null,
    "current_funding": null,
    "total_to_fund": 80.0,
    "animal": {
      "id": 132,
      "name": "Viserion",
      "species": "Seal",
      "bio": null,
      "keeper_id": 28,
      "created_at": "2020-01-30T17:54:03.887Z",
      "updated_at": "2020-01-30T17:54:03.887Z",
      "location": "Cat Tales Zoo - Washington, USA"
    },
    "toy": {
      "id": 3,
      "created_at": "2020-01-30T17:54:04.413Z",
      "updated_at": "2020-01-30T17:54:04.413Z",
      "name": "Hammock",
      "description": "A hammock made of interwoven straps. Lounge around while eating bamboo shoots!",
      "cost": 80.0
    }
  },
  {
    "id": 888,
    "animal_id": 160,
    "toy_id": 8,
    "created_at": "2020-01-30T17:54:06.610Z",
    "updated_at": "2020-02-15T01:55:41.777Z",
    "status": "active",
    "image_url": null,
    "zoo_id": null,
    "message": null,
    "current_funding": null,
    "total_to_fund": 40.0,
    "animal": {
      "id": 160,
      "name": "Hank Hippopopalous",
      "species": "Porcupine",
      "bio": null,
      "keeper_id": 31,
      "created_at": "2020-01-30T17:54:03.972Z",
      "updated_at": "2020-01-30T17:54:03.972Z",
      "location": "Point Defiance Zoo - Washington, USA"
    },
    "toy": {
      "id": 8,
      "created_at": "2020-01-30T17:54:04.420Z",
      "updated_at": "2020-01-30T17:54:04.420Z",
      "name": "Puzzle Box",
      "description": "Kind of like those toddler toys. Put the square peg into the square hole. Good for monkeys.",
      "cost": 40.0
    }
  }
]

// App renders navigation bar
// If user is logged out landing page will be displayed
export default function App() {
  return (
   
    <Container >
        <NavBar/>
        <WishCardGrid animals={Animals}/>
    </Container>
  );
}
