import React from 'react';
import WishCardGrid from './wishcard/WishCardGrid';
import { connect }from 'react-redux';
// import wishes from '../data/Wishes'

function Home(props) {
    return (
        <WishCardGrid wishes={props.wishes} />
    )
}

const mapStateToProps = (state) => {
    console.log('inMapStateToProps:', state)
    return {
      wishes: state.wishes
    };
  };

  export default connect(mapStateToProps)(Home)