let head = ["Name", "Strength", "Age"];
let heroes = [
    { name: `Black Panther`, strength: 66, age: 53 },
    { name: `Captain America`, strength: 79, age: 137 },
    { name: `Captain Marvel`, strength: 97, age: 26 },
    { name: `Hulk`, strength: 80, age: 49 },
    { name: `Iron Man`, strength: 88, age: 48 },
    { name: `Spider-Man`, strength: 78, age: 16 },
    { name: `Thanos`, strength: 99, age: 1000 },
    { name: `Thor`, strength: 95, age: 1000 },
    { name: `Yon-Rogg`, strength: 73, age: 52 }
]
let sort_arr = {
    sort_name: false,
    sort_strength: false,
    sort_age: false
}
let notification = document.querySelector('#notification')
notification.innerHTML = "sort_arr by Name, order: ASC"

function createTable(heroesArr) {
    let placeholder = document.getElementById("placeholder");
    let tbl = document.createElement("table");

    tbl.appendChild(createHeader());
    for (let i = 0; i < 9; i++) {
        let row = document.createElement("tr");
        insertCell(`${heroesArr[i].name}`, row);
        insertCell(`${heroesArr[i].strength}`, row);
        insertCell(`${heroesArr[i].age}`, row);
        tbl.appendChild(row);
    }
    placeholder.innerHTML="";
    placeholder.appendChild(tbl);
}

function insertCell(str, row) {
    let cell = document.createElement("td");

    cell.innerText = str;
    row.appendChild(cell);
}

function createHeader() {
    let row = document.createElement("tr");

    for (let i = 0; i < 3; i++) {
        let cell = document.createElement("th");

        cell.innerText = head[i];
        if (i === 0)
            cell.setAttribute("onclick", "sort_name()");
        else if (i === 1) {
            cell.setAttribute("onclick", "sort_strength()");
        }
        else {
            cell.setAttribute("onclick", "sort_age()");
        }
        row.appendChild(cell);
    }
    return row;
}

function sort_name() {
    if (sort_arr.sort_name === false) {
        heroes.sort((a, b) => a.name > b.name ? 1 : -1);
        sort_arr.sort_name = true;
        sort_arr.sort_strength = false;
        sort_arr.sort_age = false;
        notification.innerHTML = "sort_arr by Name, order: ASC"
    }
    else {
        heroes.sort((a, b) => a.name < b.name ? 1 : -1);
        sort_arr.sort_name = false;
        sort_arr.sort_strength = false;
        sort_arr.sort_age = false;
        notification.innerHTML = "sort_arr by Name, order: DESC"
    }
    createTable(heroes);
}

function sort_strength() {
    if (sort_arr.sort_strength === false) {
        heroes.sort((a, b) => a.strength > b.strength ? 1 : -1);
        sort_arr.sort_name = false;
        sort_arr.sort_strength = true;
        sort_arr.sort_age = false;
        notification.innerHTML = "sort_arr by Strength, order: ASC"
    }
    else {
        heroes.sort((a, b) => a.strength < b.strength ? 1 : -1);
        sort_arr.sort_name = false;
        sort_arr.sort_strength = false;
        sort_arr.sort_age = false;
        notification.innerHTML = "sort_arr by Strength, order: DESC"
    }
    createTable(heroes)
}

function sort_age() {
    if (sort_arr.sort_age === false) {
        heroes.sort((a, b) => a.age > b.age ? 1 : -1);
        sort_arr.sort_name = false;
        sort_arr.sort_strength = false;
        sort_arr.sort_age = true;
        notification.innerHTML = "sort_arr by Age, order: ASC"
    }
    else {
        heroes.sort((a, b) => a.age < b.age ? 1 : -1);
        sort_arr.sort_name = false;
        sort_arr.sort_strength = false;
        sort_arr.sort_age = false;
        notification.innerHTML = "sort_arr by Age, order: DESC"
    }
    createTable(heroes)
}

createTable(heroes);
