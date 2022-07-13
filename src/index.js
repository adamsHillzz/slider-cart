import _ from 'lodash';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

let slider = document.querySelector('.slider-container');
let width = 324;
let count = 4;
let position = 0;

let list = slider.querySelector('.carousel-list');
let cart = slider.querySelectorAll('.col .cart');

slider.querySelector('.navigation .right').addEventListener('click', () => {
  position -= width * count;
  position = Math.max(position, -width * (cart.length - count));
  list.style.marginLeft = position + 'px';
});

slider.querySelector('.navigation .left').addEventListener('click', () => {
  position += width * count;
  position = Math.min(position, 0);
  list.style.marginLeft = position + 'px';
});
