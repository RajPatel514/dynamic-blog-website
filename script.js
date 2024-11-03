

//Scripts for New Post
const prefNameInput = document.getElementById("prefName");
const titleName = document.getElementById("title");
const tripInfo = document.getElementById("tripDetails");

const saveButton = document.getElementById("save-btn");
const clearPost = document.getElementById("clear-post");


// Store post in local storage
if (saveButton) {
    saveButton.addEventListener("click", function (event) {
        event.preventDefault();
        let savedName = prefNameInput.value;

        if (savedName) {
            localStorage.setItem("prefName", savedName);
            window.location.href = "index.html";
        }
    });
}

//Scripts for Home Page/index
const prefNameDisplay = document.getElementById("displayName");

function loadPerfName() {
    const reloadName = localStorage.getItem("prefName");
    if (reloadName) {
        prefNameDisplay.textContent = reloadName;
    }
}

loadPerfName();
//Scripts for Post - View / Edit posts
