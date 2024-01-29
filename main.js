import { getData } from './utilities.js';
import { renderLogin } from './renderLogin.js';
import { format } from "date-fns"

let comments = document.querySelector('.comments');


window.addEventListener('load', () => {
    let loaderText = document.createElement('p');
    loaderText.className = 'startLoader';
    loaderText.textContent = 'Пожалуйста подождите, загружаю комментарии...';
    comments.before(loaderText);
    getData()
        .then(() => {
            loaderText.remove();
        });
});