import { faker } from '@faker-js/faker';

const cart = `<div>You have ${faker.number.int({
  max: 20
})} items in your cart</div>`;

document.querySelector('#dev-cart').innerHTML = cart;
