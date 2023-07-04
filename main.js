import {addLoading,removeLoading} from './loading.js';
let items = [];
let itemsRow = document.querySelector(".items-row");
let allCart = document.querySelector(".allCart");
addLoading();
fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>{
              items = json;
              items.forEach(item => {
                // console.log(item.title);
                const column = document.createElement('div');
                column.classList.add('col-3');
                // console.log(div);
                column.innerHTML = `
                <div class="card mb-3">
                  <img src="${item.image}" class="ard-img-top item-img p-3" alt="...">
                  <div class="card-body">
                    <h5 class="card-title text-truncate">${item.title}</h5>
                    <p class="card-text">${item.description.substring(0,20)}....</p>
                    <a href="#" class="btn btn-primary cartBtn">Go Cart</a>
                  </div>
                </div>
                `;
                itemsRow.append(column);
                // console.log(itemsRow);
              });
              removeLoading();
            })

 
            
            let cartBtn = document.querySelector(".cartbBtn");
            itemsRow.addEventListener("click",function(e) {
              // console.log(e);
              if( e.target.classList.contains("cartBtn")) {
               let cCard = e.target.closest(".card");
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
                })
              }, 1000);
              }
             
              
            })


        
         