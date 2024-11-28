const MY_API_KEY = "AIzaSyDnsbjtNe0DWpC0TVPtwV4uskN_yZCnPw4"; // please nobody steal this
const DB_GOOGLE_SHEET_ID = "1q96-1BnIxsPl5oeTGrgv8OUeiH25wxU5qbmSHyo9QQU";
const main_text = document.getElementById('text-div');

function printGoogleSheets() {
    

    let cells = "";
    fetch(`https://sheets.googleapis.com/v4/spreadsheets/${DB_GOOGLE_SHEET_ID}/values/Sheet1${cells}?key=${MY_API_KEY}`)
        .then(response => response.json())
        .then(data => main_text.innerText = data);
}
