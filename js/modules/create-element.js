
function createElements(object, template) {
    const card = document.createElement('article');
    card.classList.add('product-card-mini');

    card.innerHTML =`<h2 class="product-card-mini__title">
        <a href="${object.href}">${object.title}</a>
      </h2>
      <a href="${object.href}" class="product-card-mini__img-wrap">
        <img src="${object.src}" alt="some picture" class="product-card-mini__img">
      </a>
      <p class="product-card-mini__descr">${object.descr}</p>
      <div class="product-card-mini__price">${object.price}</div>`;

    return card;
  }

  export default createElements;