// Gets initial items from db.json file and moves them to new array.
let triadNames = []
fetch("http://localhost:3000/majors")
.then(response => response.json())
.then(createNewArray)

function createNewArray(majors){
    triadNames = majors.map(major => major.name).slice(0, 12);
    return triadNames
};

// Returns a random string from the array, and upon clicking enter,
// changes the string.
const label = document.getElementById("dynamic-label");
const button = document.getElementById("submit-button");

function getRandomText() {
    const randomIndex = Math.floor(Math.random() * triadNames.length);
    return triadNames[randomIndex]
};

button.addEventListener("click", () => {
    label.textContent = getRandomText();
    
});

const searchBar = document.getElementById("triad-spelling");


// Function I built to create triad inversions.
function rotateCounterClockwise(array){
    for (let i = 0; i < array.length; i++){
        console.log(array);
        let firstLetter = array.shift();
        array.push(firstLetter);
    };
};
rotateCounterClockwise();