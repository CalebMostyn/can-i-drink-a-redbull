const MY_API_KEY = "AIzaSyDnsbjtNe0DWpC0TVPtwV4uskN_yZCnPw4";

function printGoogleSheets() {
    fetch(`https://sheets.googleapis.com/v4/spreadsheets/1q96-1BnIxsPl5oeTGrgv8OUeiH25wxU5qbmSHyo9QQU/values/Sheet1?key=${MY_API_KEY}`)
        .then(response => response.json())
        .then(data => console.log(data));
}
