const buttonElement = document.getElementById('add-button');
const listElement = document.getElementById('list');
const nameInputElement = document.getElementById('name-input');
const commentInputElement = document.getElementById('comment-input');
const deleteButtonElement = document.getElementById('delete-button');

const commentsArray = [
  {
    name: 'Глеб Фокин',
    date: '12.02.22 12:18',
    comment: 'Это будет первый комментарий на этой странице',
    like: 3,
    userLike: false,
    paint: ''
  },
  {
    name: 'Варвара Н.',
    date: '13.02.22 19:22',
    comment: 'Мне нравится как оформлена эта страница! ❤',
    like: 75,
    userLike: true,
    paint: '-active-like'
  }
];

const likes = () => {
  const likeButtons = document.querySelectorAll('.like-button');
  for (const likeButton of likeButtons) {
    likeButton.addEventListener('click', () => {
      const index = likeButton.dataset.index;
      if (commentsArray[index].userLike === false ) {
        commentsArray[index].paint = '-active-like';
        commentsArray[index].like += 1;
        commentsArray[index].userLike = true;
      } else {
        commentsArray[index].paint = '';
        commentsArray[index].like -= 1;
        commentsArray[index].userLike = false;
      }
      renderComments();
    });
  };
};


const renderComments = () => {
  const commentsHtml = commentsArray.map((item, index) =>{
    //let activeLike = ''
    // if (commentsArray[index].paint) {
    //   paint = '-active-like'
    // }
    return `
    <li class="comment">
          <div class="comment-header">
            <div>${item.name}</div>
            <div>${item.date}</div>
          </div>
          <div class="comment-body">
            <div class="comment-text">
              ${item.comment}
            </div>
          </div>
          <div class="comment-footer">
            <div class="likes">
              <span class="likes-counter">${item.like}</span>
              <button data-index='${index}' class="like-button ${item.paint}"></button>
            </div>
          </div>
        </li>
    `})
    .join('');
    listElement.innerHTML = commentsHtml;
    likes();
};
renderComments();

buttonElement.disabled = true;
nameInputElement.addEventListener('input', () =>{
  if (nameInputElement.value === '') {
    buttonElement.disabled = true;
    return;
  } else {
    buttonElement.disabled = false;
  }
})

buttonElement.addEventListener('click', () => {
    nameInputElement.classList.remove('error');
    commentInputElement.classList.remove('error');
    
    if ((nameInputElement.value || commentInputElement.value) === '') {
      nameInputElement.classList.add('error');
      commentInputElement.classList.add('error');
      return;
    }

  const date = new Date();
  const formattedDate =
  date.getDate().toString().padStart(2, '0') + '.' + 
  (date.getMonth() + 1).toString().padStart(2, '0') + '.' +
  date.getFullYear().toString().slice(-2) + ' ' +
  date.getHours().toString().padStart(2, '0') + ':' +
  date.getMinutes().toString().padStart(2, '0');

    commentsArray.push({  
      name: nameInputElement.value
            .replaceAll("&", "&amp;")
            .replaceAll("<", "&lt;")
            .replaceAll(">", "&gt;")
            .replaceAll('"', "&quot;"),
      date: formattedDate,
      comment: commentInputElement.value
            .replaceAll("&", "&amp;")
            .replaceAll("<", "&lt;")
            .replaceAll(">", "&gt;")
            .replaceAll('"', "&quot;"),
      like: 0,
      userLike: false,
      paint: '',
  });
    renderComments();
    
    nameInputElement.value = '';
    commentInputElement.value = '';
    buttonElement.disabled = true;
});

deleteButtonElement.addEventListener('click', () =>{
  const lastCommentIndex = listElement.innerHTML.lastIndexOf( '<li class="comment">' );
  if (lastCommentIndex !== -1) {
    listElement.innerHTML = listElement.innerHTML.substring( 0, lastCommentIndex ); 
  }
});


document.addEventListener('keyup', (event) =>{
  if (event.key === 'Enter') {
    buttonElement.click();
  }
});

