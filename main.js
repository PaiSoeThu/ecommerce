import { addToCart } from './js/addToCart.js';
import {addLoading,removeLoading} from './js/loading.js';
import {product} from './js/product.js';
import './node_modules/bootstrap/dist/js/bootstrap.bundle.js';

export let items = [];
export let itemsRow = document.querySelector(".items-row");
export let allCart = document.querySelector(".allCart");
export let cartAmounts = document.querySelectorAll(".cartAmount");
export let canvas = document.querySelector(".offcanvas-body");



addLoading();

// fetch data 

  fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => {
          items = json;
          items.forEach(item => {

              itemsRow.append(product(item));
              // console.log(itemsRow);
          });
          removeLoading();
      })

    //   add to cart 

  let cartBtn = document.querySelector(".cartBtn");
  itemsRow.addEventListener("click", function (e) {
      addToCart(e);
      // add to cart amount feacture 
      cartAmounts.forEach(function(cartAmount){
        let amount = parseInt(cartAmount.innerHTML);
        cartAmount.innerHTML = parseInt(amount + 1);
        // console.log(cartAmount.innerHTML);
      });
  })
  


    