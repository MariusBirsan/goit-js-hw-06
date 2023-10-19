const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const container = document.querySelector('#ingredients');

ingredients.forEach((ingredient) => {
  const li = document.createElement('li');
  li.innerText = ingredient;
  li.classList.add('item');
  container.append(li);
})