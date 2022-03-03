import React from 'react'

import Header from './components/Layout/Header/Header';

import Hero from './components/Layout/Hero/Hero';
import MealList from './components/Meals/MealList/MealList';

const App = () => {
    return (
        <React.Fragment>
            <Header />
            <main>
                <Hero />    
                <MealList />
            </main>
        </React.Fragment>
    );
};

export default App;