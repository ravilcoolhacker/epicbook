  import createElements from './create-element.js'

  function insertElements(object, wrap) {
    const membersArr = object.books;
    membersArr.forEach((object) =>{
      const card = createCards(object);
      const wrap = document.querySelector(template.wrap);

      wrap.appendChild(card);
    })
  }

  export default insertElements;