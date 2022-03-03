import React, { useState } from 'react'

import CartList from './components/Cart/CartList/CartList';
import Header from './components/Layout/Header/Header';

import Hero from './components/Layout/Hero/Hero';
import MealList from './components/Meals/MealList/MealList';

const App = () => {
    const [showCartList, setShowCartList] = useState(false);

    return (
        <React.Fragment>
            {showCartList && <CartList onClose={() => { setShowCartList(false); }} />}
            <Header onClick={() => { setShowCartList(true); }} />
            <main>
                <Hero />    
                <MealList />
            </main>
        </React.Fragment>
    );
};

export default App;