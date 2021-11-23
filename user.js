const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

let profile = document.getElementById('profile');
let xhr = new XMLHttpRequest();
let url = 'https://my-json-server.typicode.com/RobocodeSchool/marketplace';

xhr.open('GET',`${url}/users/${id}`);
xhr.responseType = 'json'
xhr.onload = function() { 
    let user = xhr.response;
    profile.innerHTML = `
        <h1>${user.name}</h1>
        <h2>${user.sirname}</h2>
        <img class="profile-img" src="${user.photo_url}">
        <p>Balance: ${user.balance}$</p>
    `
}

xhr.send();