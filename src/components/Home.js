import React from 'react';
import WishCardGrid from './wishcard/WishCardGrid';
import wishes from '../data/Wishes'

export default function Home() {
    return (
        <WishCardGrid wishes={wishes} />
    )
}