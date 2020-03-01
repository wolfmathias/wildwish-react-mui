# WildWish.org Frontend Example with React and Google Materials-UI

## Purpose and Action

The app allows zoos, zookeepers, and other care professionals to create profiles for their animals, where each animal has a wishlist. 

The individual wishes are available to view, and displayed publicly as a large image element of the animal it bolongs to. 

Users are directed to a button to donate, and the amount suggested is programmatically set based on previous amount donated, amount funded, and the total to complete funding.

## Planned features and mechanics

Full CRUD actions for zookeepers to add animals and keep a wishlist for each one.

Users can view their previous donations and each animal associated with that donation.

Users can create a donation without an account, but default is to sigup/login at time of donation.

Users with accounts can view a list of all current wishes (grouped by animal), and donate to choice.

Main page displays featured wishes, sorted using various factors (funding remaining, last donation, physical proximity to user, etc.)

## How to use

Clone the [repo](https://github.com/bigcatplichta/wildwish-react-mui):

```sh
git clone git@github.com:bigcatplichta/wildwish-react-mui.git
```

Install it and run:

```sh
npm install
npm start
```

or:

[![Edit on CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/github/bigcatplichta/wildwish-react-mui)