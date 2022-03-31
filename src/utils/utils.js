export function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

function getRandomIngredients(ingredients) {
  if (ingredients) {
    const randomIngredients = [];

    const buns = ingredients.filter(item => item.type === 'bun');
    const notBuns = ingredients.filter(item => item.type !== 'bun');
    
    const bun = buns[getRandomNumber(buns.length)];
    const size = 1 + getRandomNumber(notBuns.length - 1);

    randomIngredients.push(bun);
    for (let i = 0; i < size; i++) {
      randomIngredients.push(notBuns[getRandomNumber(notBuns.length)]);
    }
    randomIngredients.push(bun);
    
    return randomIngredients;
  } else {
    return null;
  }
}

function getTotalPrice(list) {
  return list.reduce((sum, item) => {
    return sum + item.price;
  }, 0);
}

export const BASE_URL = 'https://norma.nomoreparties.space/api';

export const ingredientsInitialState = {
  all: null,
  constructor: null,
  price: null
};

export function reducer(state, action) {
  switch (action.type) {
    case 'set':
      const constructor = getRandomIngredients(action.payload);
      return {
        ...state,
        all: action.payload,
        constructor: constructor,
        price: getTotalPrice(constructor)
      };
    default:
      throw new Error(`Wrong type of action: ${action.type}`);
  }
}

export function getIngredientsId(ingredients) {
  return ingredients.map(item => item._id);
}

export function clusterIngredients(ingredients) {
  if (ingredients) {
    return {
      buns: ingredients.filter(item => item.type === 'bun'),
      sauces: ingredients.filter(item => item.type === 'sauce'),
      mains: ingredients.filter(item => item.type === 'main')
    };
  } else {
    return null;
  }
}
