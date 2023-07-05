import {allCart,items,canvas} from '../main.js';
import { offItem } from './offcanvs.-items.js';

  // total cost
  export const totalAmount = function() {
    window.total=  document.querySelector(".totalAmount");
    console.log(total);
    window.cost =  document.querySelectorAll(".cost");
   window.totalCost = [...cost].reduce((pv,cv) => window.totalCost = pv+parseFloat(cv.innerHTML),0);
      // console.log(totalCost);
    return  total.innerHTML= totalCost;
  }

  // quentity red

  window.qtyMinus = function(event,price) {
    let card = event.target.closest(".offCard");
    //  console.log(card);
  let qty =  card.querySelector(".qty");
  let cost =  card.querySelector(".cost");

  // console.log(qty);
  if (qty.value>1) { 
    qty.value -=1;
  }

  let amount = price * qty.valueAsNumber;
  cost.innerText = amount.toFixed(2);
  totalAmount()

  }

    // quentity incre

    window.qtyPlus = function(event,price) {
      // console.log(event.target);
      let card = event.target.closest(".offCard");
      //  console.log(card);
    let qty =  card.querySelector(".qty");
    let cost =  card.querySelector(".cost");
    // console.log(qty);
      qty.valueAsNumber +=1;
      let amount = price * qty.valueAsNumber;
      cost.innerText = amount.toFixed(2);
      totalAmount();

    }

export let addToCart = function(e) {
      // console.log(e);
      if( e.target.classList.contains("cartBtn")) {

        let cCard = e.target.closest(".card");
        let cardAtt = cCard.getAttribute('data-id');
        //  console.log(cardAtt);
       //  console.log(cCard);
       let cardImg = cCard.querySelector(".item-img");
       // console.log(cardImg);
       let newImg = new Image();
       newImg.src = cardImg.src;
       newImg.style.position = "fixed";
       newImg.style.height = 100+"px";
       newImg.style.transition = 1+"s";
       newImg.style.zIndex = 2000;
       
       
       newImg.style.top = cardImg.getBoundingClientRect().top+"px";
       newImg.style.left= cardImg.getBoundingClientRect().left+"px";
       newImg.style.right= cardImg.getBoundingClientRect().right+"px";
       
       document.body.append(newImg);

       setTimeout(() => {
         newImg.style.height = 0+"px";
         newImg.style.transform = "rotate(360deg)";
         newImg.style.top = allCart.getBoundingClientRect().top+"px";
         newImg.style.left= allCart.getBoundingClientRect().left+"px";
         newImg.style.right= allCart.getBoundingClientRect().right+"px";
       }, 100);

       setTimeout(() => {
         allCart.classList.add("animate__shakeX");
         allCart.addEventListener("animationend",function() {
           allCart.classList.remove("animate__shakeX");
           newImg.remove();
           
         })
       }, 1000);
       items.find(function(item) {
      
        if (item.id == cardAtt ) {
            // console.log(offItem(item));
            canvas.append(offItem(item));
        }
      })
 
       }  
}