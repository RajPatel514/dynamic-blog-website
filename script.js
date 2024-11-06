
//Scripts for New Post
const prefNameInput = document.getElementById("prefName");
const titleName = document.getElementById("title");
const tripInfo = document.getElementById("tripDetails");

const saveButton = document.getElementById("save-btn");
const clearPost = document.getElementById("clear-post");

// Store name data in local storage
if (saveButton) {
    saveButton.addEventListener("click", function (event) {
        event.preventDefault();
        let savedName = prefNameInput.value;

        if (savedName) {
            localStorage.setItem("prefName", savedName);
        }
    });
}
// Store title data in local storage
if (saveButton) {
    saveButton.addEventListener("click", function (event) {
        event.preventDefault();
        let titleSave = titleName.value;

        if (titleSave) {
            localStorage.setItem("title", titleSave);
        }
    });
}

//Store blog post details
if (saveButton) {
    saveButton.addEventListener("click", function (event) {
        event.preventDefault();
        let postSave = tripInfo.value;

        if (postSave) {
            localStorage.setItem("tripDetails", postSave);
            window.location.href = "index.html";
        }
    });
}

//Scripts for Homepage/Post page
//Get name data
const prefNameDisplay = document.getElementById("displayName");

function loadPerfName() {
    const reloadName = localStorage.getItem("prefName");
    if (reloadName) {
        prefNameDisplay.textContent = reloadName + " -";
    }
}
loadPerfName();

//Get title data
const titleDisplay = document.getElementById("displayTitle");

function loadTitle() {
    const reloadTitle = localStorage.getItem("title");
    if (reloadTitle) {
        titleDisplay.textContent = reloadTitle;
    }
}
loadTitle();

//Get trip data
const tripDisplay = document.getElementById("displayPost");

function loadTrip() {
    const reloadTrip = localStorage.getItem("tripDetails");
    if (reloadTrip) {
        tripDisplay.textContent = "- " + reloadTrip;
    }
}
loadTrip();

//Scripts for Post - View / Edit posts
