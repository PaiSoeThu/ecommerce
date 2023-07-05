export const offItem = function({id,image,title,description,price}) {
    let div = document.createElement('div');
    div.classList.add('col-12');
    
    div.innerHTML = `
    <div class="card offCard mb-3" data-id="${id}">
      <img src="${image}" class="ard-img-top item-img p-3" alt="...">
      <div class="card-body">
        <h5 class="card-title text-truncate">${title}</h5>
        <p class="card-text">${description.substring(0,20)}....</p>
        <div class="d-flex justify-content-between align-items-center">
        <p class="mb-0 cost">${price}</p>
        <div class="d-flex justify-content-center align-items-center">
        <button type="button" class="btn btn-outline-primary qtyMinus" onclick="qtyMinus(event,${price})"> <i class="bi bi-dash-lg pe-none"></i></button>
      
      
        <input type="number" class="qty" value="1">
        
        <button type="button" class="btn btn-outline-primary qtyPlus" onclick="qtyPlus(event,${price})"><i class="bi bi-plus pe-none"></i></button>

        </div>
        </div>
      </div>
    </div>
    `;

    return div;
}