const toggleButton = document.createElement("button");
toggleButton.textContent = "Toggle Resolution";
toggleButton.style.position = "absolute";
toggleButton.style.bottom = "10px";
toggleButton.style.left = "10px";
toggleButton.style.backgroundColor = "#FE7112";
toggleButton.style.border = "none";
toggleButton.style.borderRadius = "8px";
toggleButton.style.fontFamily = "Roboto, sans-serif";
toggleButton.style.transition = "background-color 0.2s ease";
toggleButton.style.outline = "none";
toggleButton.style.userSelect = "none";
toggleButton.style.color = "#000000";

const fullscreenButton = document.createElement("button");
fullscreenButton.textContent = "Toggle Fullscreen";
fullscreenButton.style.position = "absolute";
fullscreenButton.style.bottom = "10px";
fullscreenButton.style.left = "132px"; // Adjusted position
fullscreenButton.style.backgroundColor = "#FE7112";
fullscreenButton.style.border = "none";
fullscreenButton.style.borderRadius = "8px";
fullscreenButton.style.fontFamily = "Roboto, sans-serif";
fullscreenButton.style.transition = "background-color 0.2s ease";
fullscreenButton.style.outline = "none";
fullscreenButton.style.userSelect = "none";
fullscreenButton.style.color = "#000000";

// Create the button element
const hohsMenuButton = document.createElement("button");
hohsMenuButton.textContent = "HoHs Menu"; // Set the button text
hohsMenuButton.style.position = "fixed";
hohsMenuButton.style.top = "-100px"; // Start hidden above the screen
hohsMenuButton.style.left = "50%"; // Center horizontally
hohsMenuButton.style.transform = "translateX(-50%)"; // Center horizontally
hohsMenuButton.style.backgroundColor = "#FE7112";
hohsMenuButton.style.border = "none";
hohsMenuButton.style.borderRadius = "8px";
hohsMenuButton.style.fontFamily = "Roboto, sans-serif";
hohsMenuButton.style.transition = "transform 1s ease"; // Smooth transition
hohsMenuButton.style.fontWeight = "bold";
hohsMenuButton.style.fontSize = "33px";
hohsMenuButton.style.color = "#000";

// Add the label "By Zacgamingpro1234" inside the button
const authorLabel = document.createElement("span");
authorLabel.textContent = "By Zacgamingpro1234";
authorLabel.style.display = "block"; // Display on a new line
authorLabel.style.fontWeight = "bold";
authorLabel.style.fontSize = "23px"; // Smaller font size
authorLabel.style.color = "#000"; // Gray color for the label

// Append the button and label to the body
document.body.appendChild(hohsMenuButton);
hohsMenuButton.appendChild(authorLabel); // Add the label inside the button

// Function to animate the button
function animateButton() {
    // Drop down
    hohsMenuButton.style.transform = "translateX(-50%) translateY(140px)"; // Move down
    setTimeout(() => {
        // Go back up after 5 seconds
        hohsMenuButton.style.transform = "translateX(-50%) translateY(-100px)"; // Move up
    }, 5500); // 5.5 seconds
}

hohsMenuButton.addEventListener("mouseover", function() {
    hohsMenuButton.style.backgroundColor = "#FF832E";
});

hohsMenuButton.addEventListener("mouseout", function() {
    hohsMenuButton.style.backgroundColor = "#FE7112";
});

hohsMenuButton.addEventListener("click", () => {
    window.open("https://www.speedrun.com/users/Zacgamingpro1234", "_blank");
});

setTimeout(animateButton, 1000);

const toggleAllButton = document.createElement("button");
toggleAllButton.textContent = "<";
toggleAllButton.style.position = "absolute";
toggleAllButton.style.bottom = "10px";
toggleAllButton.style.left = "254px"; // Adjusted position
toggleAllButton.style.backgroundColor = "#FE7112";
toggleAllButton.style.border = "none";
toggleAllButton.style.borderRadius = "8px";
toggleAllButton.style.fontFamily = "Roboto, sans-serif";
toggleAllButton.style.transition = "background-color 0.2s ease, left 0.5s ease";
toggleAllButton.style.outline = "none";
toggleAllButton.style.userSelect = "none";
toggleAllButton.style.color = "#000000";
let buttonsVisible = true;

function toggleButtonsVisibility() {
    buttonsVisible = !buttonsVisible;
    toggleButton.style.display = buttonsVisible ? "block" : "none";
    fullscreenButton.style.display = buttonsVisible ? "block" : "none";

    // Change the button text and position
    if (buttonsVisible) {
        toggleAllButton.textContent = "<";
        toggleAllButton.style.left = "254px"; // Original position
        toggleAllButton.style.opacity = "1"; // Reset opacity
    } else {
        toggleAllButton.textContent = ">";
        toggleAllButton.style.left = "10px"; // New position
        toggleAllButton.style.opacity = "0.2"; // Set opacity to 10%
    }
}

toggleAllButton.addEventListener("click", toggleButtonsVisibility);

document.body.appendChild(toggleAllButton);



fullscreenButton.addEventListener("mouseenter", function() {
    fullscreenButton.style.backgroundColor = "#FF832E";
});

fullscreenButton.addEventListener("mouseleave", function() {
    fullscreenButton.style.backgroundColor = "#FE7112";
});

fullscreenButton.addEventListener("click", function() {
    if (document.fullscreenElement) {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
    } else {
        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) {
            document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullscreen) {
            document.documentElement.webkitRequestFullscreen();
        } else if (document.documentElement.msRequestFullscreen) {
            document.documentElement.msRequestFullscreen();
        }
    }
});

document.body.style.backgroundColor = "#858585";
document.body.appendChild(fullscreenButton);


const unityContainer = document.querySelector("#unityContainer");
if (unityContainer) {
    unityContainer.style.position = "absolute";
    unityContainer.style.top = "50%";
    unityContainer.style.left = "50%";
    unityContainer.style.transform = "translate(-50%, -50%)"; // Center placement
    unityContainer.style.transition = "height 0.5s ease"; // Smoothen the height change
}

toggleButton.addEventListener("mouseenter", function() {
    toggleButton.style.backgroundColor = "#FF832E";
});

toggleButton.addEventListener("mouseleave", function() {
    toggleButton.style.backgroundColor = "#FE7112";
});

document.body.style.overflow = "hidden"

toggleButton.addEventListener("click", function() {
    const currentHeight = unityContainer.style.height;
    unityContainer.style.height = (currentHeight === "27.5%") ? "100%" : "27.5%";
    toggleButton.style.backgroundColor = "#FFB583";
    setTimeout(() => {
        toggleButton.style.backgroundColor = "#FE7112";
    }, 300);
});

document.body.style.backgroundColor = "#858585";
document.body.appendChild(toggleButton);
document.title = "HoH Player";

const faviconLink = document.createElement("link");

faviconLink.rel = "icon";
faviconLink.href = "https://cdn.discordapp.com/attachments/1255649145495097515/1255811118589284403/icon128.png?ex=667e7cbe&is=667d2b3e&hm=d7ebe1072ddb3a2a136780b883299ab46b4b2db7ef0b8eb2572ce88c8a1df1df&quality=lossless";

document.head.appendChild(faviconLink);