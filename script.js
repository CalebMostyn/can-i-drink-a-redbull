const MY_API_KEY = "AIzaSyDnsbjtNe0DWpC0TVPtwV4uskN_yZCnPw4";

function printGoogleSheets() {
    fetch(`https://sheets.googleapis.com/v4/spreadsheets/YOUR_SHEET_ID/values/Sheet1?key=${MY_API_KEY}`)
        .then(response => response.json())
        .then(data => console.log(data));
}