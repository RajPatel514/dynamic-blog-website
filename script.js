
//Scripts for New Post
const prefNameInput = document.getElementById("prefName");
const titleName = document.getElementById("title");
const tripInfo = document.getElementById("tripDetails");

const saveButton = document.getElementById("save-btn");
const clearPost = document.getElementById("clear-post");

//Form validations for empty frields for each individual input
// Store name, title, and post data in local storage
if (saveButton) {
    saveButton.addEventListener("click", function (event) {
        event.preventDefault();
        let savedName = prefNameInput.value;
        let titleSave = titleName.value;
        let postSave = tripInfo.value;

        if (savedName) {
            localStorage.setItem("prefName", savedName);
        } else {
            if (!savedName);
            alert("Name cannot be empty!");
        }

        if (titleSave) {
            localStorage.setItem("title", titleSave);
        } else {
            if (!titleSave);
            alert("Title cannot be empty!");
        }

        if (postSave) {
            localStorage.setItem("tripDetails", postSave);
        } else {
            if (!postSave);
            alert("We want to know more about your trip!");
        }
    });
}

//Submit post if all fields are entered
if (saveButton) {
    saveButton.addEventListener("click", function (event) {
        event.preventDefault();
        let postSave = tripInfo.value;
        let titleSave = titleName.value;
        let savedName = prefNameInput.value;

        if (postSave && titleSave && savedName) {
            alert("Post Saved! returning to Home Page");
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

//Deleting data from local storage
const deleteData = document.getElementById("delete-post")

if (deleteData) {
    deleteData.addEventListener("click", function (event) {
        event.preventDefault();
        localStorage.removeItem("prefName");
        localStorage.removeItem("title");
        localStorage.removeItem("tripDetails");
        alert("Post Deleted! Returning to Home Page!");
        window.location.href = "index.html";
    });
}
//Adding Edit feature to post.html //NOT FUNCTIONAL YET

// const editButton = document.getElementById("edit-post");
// if (editButton) {
//     editButton.addEventListener("click", function (event) {
//         event.preventDefault();
//         window.location.href = "new-post.html";
//     });
// }

//Displaying uploaded image //NOT FUNCTIONAL YET

// const imageInput = document.getElementById('image');
// const displayImage = document.getElementById('displayedImage');
