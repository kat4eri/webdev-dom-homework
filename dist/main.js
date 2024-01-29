/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./api.js":
/*!****************!*\
  !*** ./api.js ***!
  \****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   deleteComment: () => (/* binding */ deleteComment),\n/* harmony export */   getComments: () => (/* binding */ getComments),\n/* harmony export */   loginUser: () => (/* binding */ loginUser),\n/* harmony export */   postComment: () => (/* binding */ postComment),\n/* harmony export */   registrateUser: () => (/* binding */ registrateUser),\n/* harmony export */   toggleLike: () => (/* binding */ toggleLike)\n/* harmony export */ });\n/* harmony import */ var _globalVariables_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./globalVariables.js */ \"./globalVariables.js\");\n\r\n\r\nlet formName = document.querySelector('.add-form-name');\r\nlet formText = document.querySelector('.add-form-text');\r\nconst getComments = () => {\r\n    let requestParams;\r\n    if (window.localStorage.getItem(\"Token\") === \"\") {\r\n        requestParams = {\r\n            method: 'GET'\r\n        };\r\n    }\r\n    else {\r\n        requestParams = {\r\n            method: 'GET',\r\n            headers: {\r\n                Authorization: `Bearer ${window.localStorage.getItem(\"Token\")}`\r\n            }\r\n        };\r\n    }\r\n\r\n    return fetch(`${_globalVariables_js__WEBPACK_IMPORTED_MODULE_0__.baseUrl}${window.localStorage.getItem(\"login\") ? window.localStorage.getItem(\"login\") : \"default\"}/comments`, requestParams)\r\n        .then((response) => {\r\n            if (response.status === 500) {\r\n                throw new Error('Сервер недоступен');\r\n            }\r\n            return response.json();\r\n        });\r\n};\r\n\r\nconst deleteComment = (index) => {\r\n    return fetch(`${_globalVariables_js__WEBPACK_IMPORTED_MODULE_0__.baseUrl}${window.localStorage.getItem(\"login\") ? window.localStorage.getItem(\"login\") : \"default\"}/comments/${index}`, {\r\n        method: 'DELETE',\r\n        headers: {\r\n            Authorization: `Bearer ${window.localStorage.getItem(\"Token\")}`\r\n        }\r\n    })\r\n        .then((response) => {\r\n            if (response.status === 500) {\r\n                throw new Error('Сервер недоступен');\r\n            }\r\n            return response.json();\r\n        });\r\n};\r\nconst postComment = () => {\r\n    formText = document.querySelector('.add-form-text');\r\n    return fetch(`${_globalVariables_js__WEBPACK_IMPORTED_MODULE_0__.baseUrl}${window.localStorage.getItem(\"login\") ? window.localStorage.getItem(\"login\") : \"default\"}/comments`, {\r\n        method: 'POST',\r\n        headers: {\r\n            Authorization: `Bearer ${window.localStorage.getItem(\"Token\")}`\r\n        },\r\n        body: JSON.stringify({ text: formText.value.replaceAll('&', '&amp;').replaceAll('\"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;') })\r\n    });\r\n};\r\nconst loginUser = ({ loginInput, passwordInput }) => {\r\n    return fetch(`${_globalVariables_js__WEBPACK_IMPORTED_MODULE_0__.userUrl}/login`, {\r\n        method: 'POST',\r\n        body: JSON.stringify({ login: loginInput, password: passwordInput })\r\n    })\r\n        .then((responseData) => {\r\n            if (responseData.status === 500) {\r\n                throw new Error('Сервер недоступен');\r\n            }\r\n            return responseData.json();\r\n        });\r\n};\r\n\r\nconst registrateUser = ({ loginInput, passwordInput, nameInput }) => {\r\n    return fetch(_globalVariables_js__WEBPACK_IMPORTED_MODULE_0__.userUrl, {\r\n        method: 'POST',\r\n        body: JSON.stringify({ login: loginInput, password: passwordInput, name: nameInput })\r\n    })\r\n        .then((responseData) => {\r\n            if (responseData.status === 500) {\r\n                throw new Error('Сервер недоступен');\r\n            }\r\n            return responseData.json();\r\n        });\r\n};\r\n\r\nconst toggleLike = (index) => {\r\n    return fetch(`${_globalVariables_js__WEBPACK_IMPORTED_MODULE_0__.baseUrl}${window.localStorage.getItem(\"login\") ? window.localStorage.getItem(\"login\") : \"default\"}/comments/${index}/toggle-like`, {\r\n        method: 'POST',\r\n        headers: {\r\n          Authorization: `Bearer ${window.localStorage.getItem(\"Token\")}`\r\n        }\r\n    })\r\n        .then((responseData) => {\r\n            if (responseData.status === 500) {\r\n                throw new Error('Сервер недоступен');\r\n            }\r\n            return responseData.json();\r\n        });\r\n};\n\n//# sourceURL=webpack://webdev-dom-homework/./api.js?");

/***/ }),

/***/ "./globalVariables.js":
/*!****************************!*\
  !*** ./globalVariables.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   baseUrl: () => (/* binding */ baseUrl),\n/* harmony export */   changeCommentsArr: () => (/* binding */ changeCommentsArr),\n/* harmony export */   changeLogin: () => (/* binding */ changeLogin),\n/* harmony export */   changeToken: () => (/* binding */ changeToken),\n/* harmony export */   changeUserName: () => (/* binding */ changeUserName),\n/* harmony export */   commentsArr: () => (/* binding */ commentsArr),\n/* harmony export */   login: () => (/* binding */ login),\n/* harmony export */   token: () => (/* binding */ token),\n/* harmony export */   userName: () => (/* binding */ userName),\n/* harmony export */   userUrl: () => (/* binding */ userUrl)\n/* harmony export */ });\nlet baseUrl = 'https://wedev-api.sky.pro/api/v2/';\r\nlet userUrl = 'https://wedev-api.sky.pro/api/user';\r\nlet commentsArr = [];\r\nlet token;\r\nlet login = \"default\";\r\nlet userName;\r\n\r\nlet changeCommentsArr = (newParams) => {\r\n    commentsArr = newParams;\r\n};\r\n\r\nlet changeToken = (newToken) => {\r\n    token = newToken;\r\n};\r\n\r\nlet changeLogin = (newLogin) => {\r\n    login = newLogin;\r\n};\r\n\r\nlet changeUserName = (newUserName) => {\r\n    userName = newUserName;\r\n};\r\n\r\n\n\n//# sourceURL=webpack://webdev-dom-homework/./globalVariables.js?");

/***/ }),

/***/ "./listeners.js":
/*!**********************!*\
  !*** ./listeners.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   buttonDisable: () => (/* binding */ buttonDisable),\n/* harmony export */   commentsListener: () => (/* binding */ commentsListener),\n/* harmony export */   deleteButtonsListener: () => (/* binding */ deleteButtonsListener),\n/* harmony export */   deleteLastButtonFunc: () => (/* binding */ deleteLastButtonFunc),\n/* harmony export */   editButtonsListener: () => (/* binding */ editButtonsListener),\n/* harmony export */   keyEnter: () => (/* binding */ keyEnter),\n/* harmony export */   likeButtonsListener: () => (/* binding */ likeButtonsListener),\n/* harmony export */   login: () => (/* binding */ login),\n/* harmony export */   loginButtonDisable: () => (/* binding */ loginButtonDisable),\n/* harmony export */   quoteListener: () => (/* binding */ quoteListener),\n/* harmony export */   regButtonDisable: () => (/* binding */ regButtonDisable),\n/* harmony export */   registrate: () => (/* binding */ registrate),\n/* harmony export */   saveCommentButtonsListener: () => (/* binding */ saveCommentButtonsListener)\n/* harmony export */ });\n/* harmony import */ var _renderComments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderComments.js */ \"./renderComments.js\");\n/* harmony import */ var _utilities_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utilities.js */ \"./utilities.js\");\n/* harmony import */ var _globalVariables_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./globalVariables.js */ \"./globalVariables.js\");\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api.js */ \"./api.js\");\n/* harmony import */ var _renderLogin_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./renderLogin.js */ \"./renderLogin.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst likeButtonsListener = () => {\r\n    let likeBottons = document.querySelectorAll('.like-button');\r\n    for (let likeBotton of likeBottons) {\r\n        likeBotton.addEventListener('click', () => {\r\n            //Почему-то когда добавляю классом не применяется\r\n            likeBotton.style.animation = 'rotating 2s linear infinite';\r\n            (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.delay)(2000).then(() => {\r\n                (0,_api_js__WEBPACK_IMPORTED_MODULE_3__.toggleLike)(likeBotton.dataset.indx)\r\n                .then(() => {\r\n                    (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.getData)();\r\n                });\r\n            });\r\n        });\r\n    }\r\n};\r\n\r\nconst commentsListener = () => {\r\n    let comments = document.querySelectorAll('.comment-text');\r\n    let formText = document.querySelector('.add-form-text');\r\n\r\n    for (let comment of comments) {\r\n        comment.addEventListener('click', () => {\r\n            formText.value = `QUOTE_BEGIN ${comment.dataset.name}:\\n${comment.dataset.text.replace(comment.dataset.text.slice(comment.dataset.text.indexOf('QUOTE_BEGIN'), comment.dataset.text.lastIndexOf('QUOTE_END') > -1 ? comment.dataset.text.lastIndexOf('QUOTE_END') + 9 : -1), '')} QUOTE_END\\n`;\r\n            formText.focus();\r\n        });\r\n    }\r\n};\r\nconst quoteListener = () => {\r\n    let quotes = document.querySelectorAll('.quote');\r\n    for (let quote of quotes) {\r\n        quote.addEventListener('click', (event) => {\r\n            event.stopPropagation();\r\n        });\r\n    }\r\n};\r\nconst editButtonsListener = () => {\r\n    let editBottons = document.querySelectorAll('.edit-button');\r\n\r\n    for (let editBotton of editBottons) {\r\n       // if (!token) {\r\n            editBotton.disabled = true;\r\n        //}\r\n        editBotton.addEventListener('click', () => {\r\n            _globalVariables_js__WEBPACK_IMPORTED_MODULE_2__.commentsArr[editBotton.dataset.indx].editComment = true;\r\n            (0,_renderComments_js__WEBPACK_IMPORTED_MODULE_0__.renderComments)();\r\n        });\r\n    }\r\n};\r\nconst saveCommentButtonsListener = () => {\r\n    let saveCommentBottons = document.querySelectorAll('.save-comment-button');\r\n    for (let saveComment of saveCommentBottons) {\r\n        saveComment.addEventListener('click', () => {\r\n            _globalVariables_js__WEBPACK_IMPORTED_MODULE_2__.commentsArr[saveComment.dataset.indx].editComment = false;\r\n            _globalVariables_js__WEBPACK_IMPORTED_MODULE_2__.commentsArr[saveComment.dataset.indx].comment = saveComment.dataset.quote + document.getElementsByClassName('edit-comment')[saveComment.dataset.indx].value;\r\n            (0,_renderComments_js__WEBPACK_IMPORTED_MODULE_0__.renderComments)();\r\n        });\r\n    }\r\n};\r\n\r\nconst buttonDisable = () => {\r\n    let formName = document.querySelector('.add-form-name');\r\n    let formText = document.querySelector('.add-form-text');\r\n    let formButton = document.querySelector('.add-form-button');\r\n\r\n    if (formName.value === \"\" || formText.value === \"\")\r\n        formButton.disabled = true;\r\n    else\r\n        formButton.disabled = false;\r\n};\r\nconst deleteLastButtonFunc = () => {\r\n    _globalVariables_js__WEBPACK_IMPORTED_MODULE_2__.commentsArr.pop();\r\n    (0,_renderComments_js__WEBPACK_IMPORTED_MODULE_0__.renderComments)();\r\n};\r\nconst keyEnter = (event) => {\r\n    if (event.code === 'Enter') {\r\n        (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.addComment)();\r\n    }\r\n};\r\nconst login = () => {\r\n    let loginInput = document.querySelector('.login-form__login').value;\r\n    let passwordInput = document.querySelector('.login-form__password').value;\r\n    (0,_api_js__WEBPACK_IMPORTED_MODULE_3__.loginUser)({ loginInput, passwordInput })\r\n        .then((responseJson) => {\r\n            if (responseJson.error) {\r\n                alert(responseJson.error);\r\n            }\r\n            window.localStorage.setItem(\"Token\", responseJson.user.token);\r\n            window.localStorage.setItem(\"userName\", responseJson.user.name);\r\n            window.localStorage.setItem(\"login\", responseJson.user.login);\r\n            (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.getData)();\r\n        });\r\n};\r\n\r\n\r\nconst registrate = () => {\r\n    let loginInput = document.querySelector('.reg-form__login').value;\r\n    let passwordInput = document.querySelector('.reg-form__password').value;\r\n    let nameInput = document.querySelector('.reg-form__name').value;\r\n\r\n    (0,_api_js__WEBPACK_IMPORTED_MODULE_3__.registrateUser)({ loginInput, passwordInput, nameInput })\r\n        .then((responseJson) => {\r\n            if (responseJson.error) {\r\n                alert(responseJson.error);\r\n            }\r\n            window.localStorage.setItem(\"Token\", responseJson.user.token);\r\n            window.localStorage.setItem(\"userName\", responseJson.user.name);\r\n            window.localStorage.setItem(\"login\", responseJson.user.login);\r\n            (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.getData)();\r\n        });\r\n}\r\n\r\n\r\nconst regButtonDisable = () => {\r\n    let formName = document.querySelector('.reg-form__name');\r\n    let formLogin = document.querySelector('.reg-form__login');\r\n    let formPassword = document.querySelector('.reg-form__password');\r\n    let formButton = document.querySelector('.reg-form__button');\r\n\r\n    if (formName.value === \"\" || formLogin.value === \"\" || formPassword.value.length < 5)\r\n        formButton.disabled = true;\r\n    else\r\n        formButton.disabled = false;\r\n};\r\n\r\nconst loginButtonDisable = () => {\r\n    let formLogin = document.querySelector('.login-form__login');\r\n    let formPassword = document.querySelector('.login-form__password');\r\n    let formButton = document.querySelector('.login-form__button');\r\n\r\n    if (formPassword.value === \"\" || formLogin.value === \"\")\r\n        formButton.disabled = true;\r\n    else\r\n        formButton.disabled = false;\r\n};\r\n\r\nconst deleteButtonsListener = () => {\r\n    let deleteBottons = document.querySelectorAll('.delete-button');\r\n\r\n    for (let deleteBotton of deleteBottons) {\r\n        if (!window.localStorage.getItem(\"Token\")) {\r\n            deleteBotton.disabled = true;\r\n        }\r\n        deleteBotton.addEventListener('click', () => {\r\n            (0,_api_js__WEBPACK_IMPORTED_MODULE_3__.deleteComment)(deleteBotton.dataset.indx)\r\n                .then(() => {\r\n                    (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.getData)();\r\n                });\r\n        });\r\n    }\r\n};\r\n\r\n\n\n//# sourceURL=webpack://webdev-dom-homework/./listeners.js?");

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utilities_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities.js */ \"./utilities.js\");\n/* harmony import */ var _renderLogin_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderLogin.js */ \"./renderLogin.js\");\n\r\n\r\n\r\n\r\nlet comments = document.querySelector('.comments');\r\n\r\n\r\nwindow.addEventListener('load', () => {\r\n    let loaderText = document.createElement('p');\r\n    loaderText.className = 'startLoader';\r\n    loaderText.textContent = 'Пожалуйста подождите, загружаю комментарии...';\r\n    comments.before(loaderText);\r\n    (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.getData)()\r\n        .then(() => {\r\n            loaderText.remove();\r\n        });\r\n});\n\n//# sourceURL=webpack://webdev-dom-homework/./main.js?");

/***/ }),

/***/ "./renderComments.js":
/*!***************************!*\
  !*** ./renderComments.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderComments: () => (/* binding */ renderComments)\n/* harmony export */ });\n/* harmony import */ var _listeners_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listeners.js */ \"./listeners.js\");\n/* harmony import */ var _utilities_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utilities.js */ \"./utilities.js\");\n/* harmony import */ var _globalVariables_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./globalVariables.js */ \"./globalVariables.js\");\n/* harmony import */ var _renderLogin_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./renderLogin.js */ \"./renderLogin.js\");\n\r\n\r\n\r\n\r\n\r\nconst renderComments = () => {\r\n  let conteinerHtml = document.querySelector('.container');\r\n\r\n  conteinerHtml.innerHTML = `<ul class=\"comments\">\r\n  </ul>\r\n  <div class=\"add-form display_none\">\r\n    <input type=\"text\" class=\"add-form-name\" placeholder=\"Введите ваше имя\" />\r\n    <textarea type=\"textarea\" class=\"add-form-text\" placeholder=\"Введите ваш коментарий\" rows=\"4\"></textarea>\r\n    <div class=\"add-form-row\">\r\n      <button class=\"add-form-button\">Написать</button>\r\n    </div>\r\n  </div>\r\n  <div class=\"authorization\">\r\n    <p class=\"authorization__text\">Чтобы добавить комментарий,<button class=\"authorization__button\"\r\n        href=\"\">авторизуйтесь</button></p>\r\n  </div>\r\n  <div class=\"loading display_none\">\r\n    <p class=\"loading__text\">Комментарий добавляется...</p>\r\n  </div>`;\r\n\r\n  let formName = document.querySelector('.add-form-name');\r\n  let formText = document.querySelector('.add-form-text');\r\n  let comments = document.querySelector('.comments');\r\n  let formButton = document.querySelector('.add-form-button');\r\n  let authorizationButton = document.querySelector('.authorization__button');\r\n  let addForm = document.querySelector('.add-form');\r\n  let authorizationForm = document.querySelector('.authorization');\r\n\r\n  comments.innerHTML = '';\r\n  comments.innerHTML = comments.innerHTML + _globalVariables_js__WEBPACK_IMPORTED_MODULE_2__.commentsArr.map((el, indx) => `<li class=\"comment\">\r\n          <div class=\"comment-header\">\r\n            <div>${el.name}</div>\r\n            <div>${el.created}</div>\r\n          </div>\r\n          <div class=\"comment-body\">\r\n            <div class=\"comment-text ${el.editComment ? 'display_none' : ''}\" data-text=\"${el.comment}\" data-name=\"${el.name}\">\r\n              ${el.comment.replaceAll('QUOTE_BEGIN', '<div class=\"quote\">').replaceAll('QUOTE_END', '</div>')}\r\n            </div>\r\n            <textarea class=\"edit-comment ${!el.editComment ? 'display_none' : ''}\" type=\"textarea\" rows=\"1\">${el.comment.replace(el.comment.slice(el.comment.indexOf('QUOTE_BEGIN'), el.comment.lastIndexOf('QUOTE_END') > -1 ? el.comment.lastIndexOf('QUOTE_END') + 9 : -1), '')}</textarea>\r\n          </div>\r\n          <div class=\"comment-footer\">\r\n            <div class=\"comment-buttons\">\r\n            <button class=\"edit-button ${el.editComment ? 'display_none' : ''}\" data-comment_text=\"${el.comment}\"  data-indx=${indx}>Редактировать</button>\r\n            <button class=\"delete-button ${el.editComment ? 'display_none' : ''}\" data-comment_text=\"${el.comment}\"  data-indx=${el.id}>Удалить</button>\r\n            <button class=\"save-comment-button ${!el.editComment ? 'display_none' : ''}\" data-indx=${el.id} data-quote=\"${el.comment.slice(el.comment.indexOf('QUOTE_BEGIN'), el.comment.lastIndexOf('QUOTE_END') > -1 ? el.comment.lastIndexOf('QUOTE_END') + 9 : -1)}\">Сохранить</button>\r\n            </div>\r\n            <div class=\"likes\">\r\n              <span class=\"likes-counter\">${el.countLikes}</span>\r\n              <button class=\"like-button ${el.likeSet ? '-active-like' : ''}\" data-indx=${el.id}></button>\r\n            </div>\r\n          </div>\r\n        </li >`).join('');\r\n\r\n  formName.addEventListener('input', _listeners_js__WEBPACK_IMPORTED_MODULE_0__.buttonDisable);\r\n  formText.addEventListener('input', _listeners_js__WEBPACK_IMPORTED_MODULE_0__.buttonDisable);\r\n\r\n  formButton.addEventListener('click', _utilities_js__WEBPACK_IMPORTED_MODULE_1__.addComment);\r\n\r\n  formName.addEventListener('keyup', _listeners_js__WEBPACK_IMPORTED_MODULE_0__.keyEnter);\r\n  formText.addEventListener('keyup', _listeners_js__WEBPACK_IMPORTED_MODULE_0__.keyEnter);\r\n\r\n  authorizationButton.addEventListener('click', _renderLogin_js__WEBPACK_IMPORTED_MODULE_3__.renderLogin);\r\n\r\n  if (window.localStorage.getItem(\"Token\")) {\r\n    addForm.classList.remove('display_none');\r\n    authorizationForm.classList.add('display_none');\r\n    formName.value = window.localStorage.getItem(\"userName\");\r\n    formName.disabled = true;\r\n\r\n    (0,_listeners_js__WEBPACK_IMPORTED_MODULE_0__.likeButtonsListener)();\r\n    (0,_listeners_js__WEBPACK_IMPORTED_MODULE_0__.saveCommentButtonsListener)();\r\n    (0,_listeners_js__WEBPACK_IMPORTED_MODULE_0__.commentsListener)();\r\n    (0,_listeners_js__WEBPACK_IMPORTED_MODULE_0__.quoteListener)();\r\n    (0,_listeners_js__WEBPACK_IMPORTED_MODULE_0__.buttonDisable)();\r\n  }\r\n\r\n  (0,_listeners_js__WEBPACK_IMPORTED_MODULE_0__.editButtonsListener)();\r\n  (0,_listeners_js__WEBPACK_IMPORTED_MODULE_0__.deleteButtonsListener)();\r\n};\r\n\r\n\n\n//# sourceURL=webpack://webdev-dom-homework/./renderComments.js?");

/***/ }),

/***/ "./renderLogin.js":
/*!************************!*\
  !*** ./renderLogin.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderLogin: () => (/* binding */ renderLogin)\n/* harmony export */ });\n/* harmony import */ var _listeners_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listeners.js */ \"./listeners.js\");\n/* harmony import */ var _renderRegistration_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderRegistration.js */ \"./renderRegistration.js\");\n\r\n\r\n\r\nconst renderLogin = () => {\r\n    let conteinerHtml = document.querySelector('.container');\r\n\r\n    conteinerHtml.innerHTML = `<div class=\"login-form\">\r\n    <p class=\"login-form__text\">Форма входа</p>\r\n    <input type=\"text\" class=\"login-form__login\" placeholder=\"Введите логин\" />\r\n    <input type=\"password\" class=\"login-form__password\" placeholder=\"Введите пароль\" />\r\n    <button class=\"login-form__button\">Войти</button>\r\n    <button class=\"login-form__reg-button\">Зарегистрироваться</button>\r\n</div>`;\r\n\r\n    let loginButton = document.querySelector('.login-form__button');\r\n    let regButton = document.querySelector('.login-form__reg-button');\r\n    let loginLogin = document.querySelector('.login-form__login');\r\n    let loginPassword = document.querySelector('.login-form__password');\r\n\r\n    (0,_listeners_js__WEBPACK_IMPORTED_MODULE_0__.loginButtonDisable)();\r\n\r\n    loginLogin.addEventListener('input', _listeners_js__WEBPACK_IMPORTED_MODULE_0__.loginButtonDisable);\r\n    loginPassword.addEventListener('input', _listeners_js__WEBPACK_IMPORTED_MODULE_0__.loginButtonDisable);\r\n\r\n    loginButton.addEventListener('click', _listeners_js__WEBPACK_IMPORTED_MODULE_0__.login);\r\n    regButton.addEventListener('click', _renderRegistration_js__WEBPACK_IMPORTED_MODULE_1__.renderRegistration);\r\n}\n\n//# sourceURL=webpack://webdev-dom-homework/./renderLogin.js?");

/***/ }),

/***/ "./renderRegistration.js":
/*!*******************************!*\
  !*** ./renderRegistration.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderRegistration: () => (/* binding */ renderRegistration)\n/* harmony export */ });\n/* harmony import */ var _renderLogin_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderLogin.js */ \"./renderLogin.js\");\n/* harmony import */ var _listeners_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listeners.js */ \"./listeners.js\");\n\r\n\r\n\r\nconst renderRegistration = () => {\r\n    let conteinerHtml = document.querySelector('.container');\r\n\r\n    conteinerHtml.innerHTML = `<div class=\"reg-form\">\r\n    <p class=\"reg-form__text\">Форма регистрации</p>\r\n    <input type=\"text\" class=\"reg-form__name\" placeholder=\"Введите имя\" />\r\n    <input type=\"text\" class=\"reg-form__login\" placeholder=\"Введите логин\" />\r\n    <input type=\"text\" class=\"reg-form__password\" placeholder=\"Введите пароль\" />\r\n    <button class=\"reg-form__button\">Зарегистрироваться</button>\r\n    <button class=\"reg-form__login-button\">Войти</button>\r\n</div>`;\r\n\r\n    let loginButton = document.querySelector('.reg-form__login-button');\r\n    let regButton = document.querySelector('.reg-form__button');\r\n    let regName = document.querySelector('.reg-form__name');\r\n    let regLogin = document.querySelector('.reg-form__login');\r\n    let regPassword = document.querySelector('.reg-form__password');\r\n\r\n    (0,_listeners_js__WEBPACK_IMPORTED_MODULE_1__.regButtonDisable)();\r\n\r\n    regName.addEventListener('input', _listeners_js__WEBPACK_IMPORTED_MODULE_1__.regButtonDisable);\r\n    regLogin.addEventListener('input', _listeners_js__WEBPACK_IMPORTED_MODULE_1__.regButtonDisable);\r\n    regPassword.addEventListener('input', _listeners_js__WEBPACK_IMPORTED_MODULE_1__.regButtonDisable);\r\n    regButton.addEventListener('click', _listeners_js__WEBPACK_IMPORTED_MODULE_1__.registrate);\r\n    loginButton.addEventListener('click', _renderLogin_js__WEBPACK_IMPORTED_MODULE_0__.renderLogin);\r\n}\n\n//# sourceURL=webpack://webdev-dom-homework/./renderRegistration.js?");

/***/ }),

/***/ "./utilities.js":
/*!**********************!*\
  !*** ./utilities.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addComment: () => (/* binding */ addComment),\n/* harmony export */   changeDataToLocal: () => (/* binding */ changeDataToLocal),\n/* harmony export */   delay: () => (/* binding */ delay),\n/* harmony export */   getData: () => (/* binding */ getData)\n/* harmony export */ });\n/* harmony import */ var _renderComments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderComments.js */ \"./renderComments.js\");\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api.js */ \"./api.js\");\n/* harmony import */ var _globalVariables_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./globalVariables.js */ \"./globalVariables.js\");\n\r\n\r\n\r\nconst delay = (interval = 300) => {\r\n    return new Promise((resolve) => {\r\n        setTimeout(() => {\r\n            resolve();\r\n        }, interval);\r\n    });\r\n};\r\nconst changeDataToLocal = (date) => new Date(date).toLocaleString(\"ru\", { year: '2-digit', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit' }).replace(',', '');\r\n\r\nconst getData = () => {\r\n    return (0,_api_js__WEBPACK_IMPORTED_MODULE_1__.getComments)()\r\n        .then((responseData) => {\r\n            (0,_globalVariables_js__WEBPACK_IMPORTED_MODULE_2__.changeCommentsArr)(responseData.comments.map((comment) => {\r\n                return {\r\n                    id: comment.id,\r\n                    created: changeDataToLocal(comment.date),\r\n                    countLikes: comment.likes,\r\n                    likeSet: comment.isLiked,\r\n                    editComment: false,\r\n                    comment: comment.text,\r\n                    name: comment.author.name\r\n                }\r\n            }));\r\n        })\r\n        .then(() => {\r\n            (0,_renderComments_js__WEBPACK_IMPORTED_MODULE_0__.renderComments)();\r\n        })\r\n        .catch((error) => {\r\n            console.error(error);\r\n            alert(error);\r\n        });\r\n};\r\n\r\nconst addComment = () => {\r\n    let formName = document.querySelector('.add-form-name');\r\n    let formText = document.querySelector('.add-form-text');\r\n    let formButton = document.querySelector('.add-form-button');\r\n    let loadingForm = document.querySelector('.loading');\r\n    let addForm = document.querySelector('.add-form');\r\n    if (!formButton.disabled) {\r\n        addForm.classList.add('display_none');\r\n        loadingForm.classList.remove('display_none');\r\n        const postData = () => (0,_api_js__WEBPACK_IMPORTED_MODULE_1__.postComment)()\r\n            .then((response) => {\r\n                switch (response.status) {\r\n                    case 400:\r\n                        return Promise.reject('Произошла ошибка, повторите попытку позже');\r\n                    case 500:\r\n                        return Promise.reject('Сервер недоступен');\r\n                }\r\n                formName.value = '';\r\n                formText.value = '';\r\n                return getData();\r\n            })\r\n            .then(() => {\r\n                addForm.classList.remove('display_none');\r\n                loadingForm.classList.add('display_none');\r\n                addForm.scrollIntoView();\r\n            })\r\n            .catch((error) => {\r\n                console.error(error);\r\n                if (error === 'Сервер недоступен') {\r\n                    postData();\r\n                }\r\n                else {\r\n                    alert(error);\r\n                    addForm.classList.remove('display_none');\r\n                    loadingForm.classList.add('display_none');\r\n                }\r\n            });\r\n        postData();\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://webdev-dom-homework/./utilities.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./main.js");
/******/ 	
/******/ })()
;