const API_KEY = "mg2nnlxwhKpqW5yPe7c_-194nC8";
const API_URL = "https://ci-jshint.herokuapp.com/api";
const resultsModal = new bootstrap.Modal(document.getElementById("resultsModal"));

document.getElementById("status").addEventListener("click", e => getStatus(e));

async function getStatus(e) {
    const queryString = '${API_URL}?api_key=${API_KEY}';

    const response = await fetch(queryString);

    const data = await response.json();

    if (response.ok) {
        console.log(data);
    }

}