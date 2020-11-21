const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

document.querySelector("#name").innerText = urlParams.get("name");
document.querySelector("#code").innerText = urlParams.get("code");
