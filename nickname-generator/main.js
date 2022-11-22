
document.getElementById("randnickbtn").addEventListener("click", randName);
document.getElementById("allnickbtn").addEventListener("click", allName);

// div to display
let divEl = document.getElementById("div1");

// nickname list
let nickArray = [
    '"The Master"',
    '"Ninja"',
    '"Destructor"',
    '"The Coder"',
    '"The Skunk"',
    '"The Chosen One"',
    '"Chicken"'
];

// display all names
function allName() {
    let firstName = document.getElementById("firstinput").value;
    let lastName = document.getElementById("lastinput").value;
    let outputStr = "";
    for (let i = 0; i < nickArray.length; i++) {
        outputStr += `<br> ${firstName} ${nickArray[i]} ${lastName}`;

    }
    divEl.innerHTML = outputStr;
}

// display random name and remove others
function randName() {
    let firstName = document.getElementById("firstinput").value;
    let lastName = document.getElementById("lastinput").value;
    let randNum = Math.floor(Math.random() * nickArray.length);
    divEl.innerHTML = `${firstName} ${nickArray[randNum]} ${lastName}`;
}


