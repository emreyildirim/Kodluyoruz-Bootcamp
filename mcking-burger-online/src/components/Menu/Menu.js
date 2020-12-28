import React,{useContext} from "react";
import {HamburgerContext} from "../../contexts/HamburgerContext";
import { useHistory } from 'react-router-dom';
import {
  Wrapper,
  ProductName,
  MenuButton,
  Price,
  Qty,
  Content,
  MenuItems,
  CurrentPrice
} from "./Menu.styles";
import products from "../../products";



const Menu = () => {
  const history = useHistory();
  const { selectedIngredients, setSelectedIngredients, getCalculatedTotalPrice } = useContext(HamburgerContext);

  const handleAddIngredient = (ingredient) => {
    const ingredients = [...selectedIngredients];

    const existIngredient = ingredients.find(item => item.name === ingredient.name);

    if (existIngredient) {
      existIngredient.count += 1;
    } else {
      ingredients.push({...ingredient, count: 1});
    }

    setSelectedIngredients(ingredients);
  }

  const handleRemoveIngredient = (ingredient) => {
    let ingredients = [...selectedIngredients];

    const existIngredient = ingredients.find(item => item.name === ingredient.name);

    if (existIngredient) {
      if (existIngredient.count > 1) {
        existIngredient.count -=1;
      } else {
        ingredients = ingredients.filter(item => item.name !== existIngredient.name);
      }
    }

    setSelectedIngredients(ingredients);
  }

  const handleIngredientCommand = (ingredient, command) => {
    switch(command) {
      case '+':
        handleAddIngredient(ingredient);
        break;
      case '-': 
        handleRemoveIngredient(ingredient);
        break;
    }
  }

  return (
    <Wrapper>
      <Content>
        {Object.keys(products).map((name) => (
          <MenuItems>
            <ProductName>{name}</ProductName>
            <Price> ${products[name]}</Price>
            <MenuButton decrement  onClick={() => handleIngredientCommand({name, price: products[name]}, '-')} >-</MenuButton>
            <Qty>{selectedIngredients.find(item => item.name === name)?.count || 0}</Qty>
            <MenuButton increment  onClick={() => handleIngredientCommand({name, price: products[name]}, '+')} >+</MenuButton>
          </MenuItems>
        ))}
      </Content>
      <Content order>
        <CurrentPrice>Current Price: $ {getCalculatedTotalPrice()}</CurrentPrice>
      <MenuButton onClick={()=>{history.push('/order')}} order>Order</MenuButton>
      </Content>
      
    </Wrapper>
  );
};

export default Menu;
