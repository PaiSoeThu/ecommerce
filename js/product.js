export let product = function (item) {
       // console.log(item.title);
       const column = document.createElement('div');
       column.classList.add('col-3');
       // console.log(div);
       column.innerHTML = `
       <div class="card mb-3" data-id="${item.id}">
         <img src="${item.image}" class="ard-img-top item-img p-3" alt="...">
         <div class="card-body">
           <h5 class="card-title text-truncate">${item.title}</h5>
           <p class="card-text">${item.description.substring(0,20)}....</p>
           <a href="#" class="btn btn-primary cartBtn">Go Cart</a>
         </div>
       </div>
       `;

       return column;
}
