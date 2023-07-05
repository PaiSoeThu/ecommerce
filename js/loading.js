export function addLoading() {
    // let cusBody = document.querySelector("body");
let itemsRow = document.querySelector(".items-row");

    itemsRow.innerHTML = `
    <div class="d-flex justify-content-center align-items-center align-content-center min-vh-100 loading">
    <div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
    </div>
    </div>`;
  }
  // addLoading();

export function removeLoading() {
    let cusLoading = document.querySelector(".loading");
    cusLoading.remove();
  }
  //removeLoading();