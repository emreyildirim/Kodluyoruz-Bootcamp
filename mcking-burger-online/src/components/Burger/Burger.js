import React, { useContext } from 'react'

import { HamburgerContext } from '../../contexts/HamburgerContext';
import { BreadTop,BreadBottom,CheeseItem,MeatItem,SaladItem,Wrapper} from './Burger.styles'

const ingredient ={
    salad: <SaladItem />,
    cheese: <CheeseItem />,
    meat: <MeatItem />,
};

const Burger = () => {

    const { selectedIngredients } = useContext(HamburgerContext);
    return (
        <Wrapper>
            <BreadTop/>
            {selectedIngredients.map((item) => {
                const ingredientArr = Array(item.count).fill(ingredient[item.name]);
                return ingredientArr.map(item => item);
            })}
            <BreadBottom/>
        </Wrapper>
    )
}

export default Burger
