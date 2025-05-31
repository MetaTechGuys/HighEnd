import pizzaItems from './pizza';
import burgerItems from './burger';
import sandwichItems from './sandwich';
import bChipsItems from './belgian-chips';
import pastaItems from './pasta';
import saladItems from './salad';
import fChickenItems from './fried-chicken';
import drinkItems from './drink';

const allItems = [
  ...pizzaItems,
  ...burgerItems,
  ...sandwichItems,
  ...bChipsItems,
  ...pastaItems,
  ...saladItems,
  ...fChickenItems,
  ...drinkItems,
];

export default allItems;
