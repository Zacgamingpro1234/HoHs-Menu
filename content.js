let currentURL = window.location.href;

// Define your functions for different sites
function CGsite() {
// cg site code/////////////////////////////////////////////////////////////////////////////////////////
    const toggleButton = document.createElement("button");
    toggleButton.textContent = "Toggle Resolution";
    toggleButton.style.position = "absolute";
    toggleButton.style.zIndex = "10";
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
    document.body.appendChild(toggleButton);
    toggleButton.addEventListener("mouseenter", function() {
        toggleButton.style.backgroundColor = "#FF832E";
    });

    toggleButton.addEventListener("mouseleave", function() {
        toggleButton.style.backgroundColor = "#FE7112";
    });


    const hohsMenuButton = document.createElement("button");
    hohsMenuButton.textContent = "HoHs Menu";
    hohsMenuButton.style.position = "absolute";
    hohsMenuButton.style.zIndex = "100";
    hohsMenuButton.style.top = "-100px";
    hohsMenuButton.style.left = "50%";
    hohsMenuButton.style.transform = "translateX(-50%)";
    hohsMenuButton.style.backgroundColor = "#FE7112";
    hohsMenuButton.style.border = "none";
    hohsMenuButton.style.borderRadius = "8px";
    hohsMenuButton.style.fontFamily = "Roboto, sans-serif";
    hohsMenuButton.style.transition = "transform 1s ease";
    hohsMenuButton.style.fontWeight = "bold";
    hohsMenuButton.style.fontSize = "33px";
    hohsMenuButton.style.color = "#000";

    const authorLabel = document.createElement("span");
    authorLabel.textContent = "By Zacgamingpro1234";
    authorLabel.style.display = "block";
    authorLabel.style.fontWeight = "bold";
    authorLabel.style.zIndex = "100";
    authorLabel.style.fontSize = "23px";
    authorLabel.style.color = "#000";

    document.body.appendChild(hohsMenuButton);
    hohsMenuButton.appendChild(authorLabel);

    function animateButton() {

        hohsMenuButton.style.transform = "translateX(-50%) translateY(140px)";
        setTimeout(() => {
            hohsMenuButton.style.transform = "translateX(-50%) translateY(-100px)";
        }, 10000);
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

    const fullscreenButton = document.createElement("button");
    fullscreenButton.textContent = "Toggle Fullscreen";
    fullscreenButton.style.position = "absolute";
    fullscreenButton.style.zIndex = "10";
    fullscreenButton.style.bottom = "10px";
    fullscreenButton.style.left = "132px";
    fullscreenButton.style.backgroundColor = "#FE7112";
    fullscreenButton.style.border = "none";
    fullscreenButton.style.borderRadius = "8px";
    fullscreenButton.style.fontFamily = "Roboto, sans-serif";
    fullscreenButton.style.transition = "background-color 0.2s ease";
    fullscreenButton.style.outline = "none";
    fullscreenButton.style.userSelect = "none";
    fullscreenButton.style.color = "#000000";

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

    document.body.appendChild(fullscreenButton);

    const ColourPicker = document.createElement("input");
    ColourPicker.textContent = "ColourPicker";
    ColourPicker.style.position = "absolute";
    ColourPicker.style.zIndex = "10";
    ColourPicker.style.bottom = "10px";
    ColourPicker.style.left = "252px";
    ColourPicker.style.width = "60px";
    ColourPicker.style.backgroundColor = "#FE7112";
    ColourPicker.style.border = "none";
    ColourPicker.style.borderRadius = "8px";
    ColourPicker.style.fontFamily = "Roboto, sans-serif";
    ColourPicker.style.transition = "background-color 0.2s ease";
    ColourPicker.style.outline = "none";
    ColourPicker.style.userSelect = "none";
    ColourPicker.style.color = "#000000";
    document.body.appendChild(ColourPicker);


    window.onkeyup = keyup;
    var inputTextValue;
    function keyup(e) {
        if (e.keyCode == 13) {
            const ColourChosen = document.querySelector("body > input").value;
            var bghex = ColourChosen
            document.body.style.backgroundColor = bghex;
            chrome.storage.local.set({'bghex': bghex}, function() {
            });
        }
    }

    const toggleAllButton = document.createElement("button");
    toggleAllButton.textContent = "<";
    toggleAllButton.style.position = "absolute";
    toggleAllButton.style.zIndex = "10";
    toggleAllButton.style.bottom = "10px";
    toggleAllButton.style.left = "316px";
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
        ColourPicker.style.display = buttonsVisible ? "block" : "none";

        if (buttonsVisible) {
            toggleAllButton.textContent = "<";
            toggleAllButton.style.left = "316px";
            toggleAllButton.style.opacity = "1";
        } else {
            toggleAllButton.textContent = ">";
            toggleAllButton.style.left = "10px";
            toggleAllButton.style.opacity = "0.2";
        }
    }

    toggleAllButton.addEventListener("click", toggleButtonsVisibility);

    document.body.appendChild(toggleAllButton);


    var checkExist = setInterval(function() {
        if (document.querySelector("body > div > div.MuiGrid-root.MuiGrid-container.MuiGrid-direction-xs-column.MuiGrid-wrap-xs-nowrap.css-dk3fnw > div > span > div.css-uh9ti6 > button")) {
            clearInterval(checkExist);
            const CGPlayButton = document.querySelector("body > div > div.MuiGrid-root.MuiGrid-container.MuiGrid-direction-xs-column.MuiGrid-wrap-xs-nowrap.css-dk3fnw > div > span > div.css-uh9ti6 > button")
            CGPlayButton.click();
        }
    }, 200);

    var checkExist1 = setInterval(function() {
        if (document.querySelector("body > div > div.css-fv8xxn > div > div.css-12i43z4 > button.MuiButtonBase-root.css-1fs4034")) {
            clearInterval(checkExist1);
            const CGOfflineButton = document.querySelector("body > div > div.css-fv8xxn > div > div.css-12i43z4 > button.MuiButtonBase-root.css-1fs4034")
            CGOfflineButton.click();
        }
    }, 200);

    var checkExist2 = setInterval(function() {
        if (document.querySelector("#game-container")) {
            clearInterval(checkExist2);
            const CrazyUI = document.querySelector("body > div > div.css-1h1938b")
            CrazyUI.remove()
            const gameContainer = document.querySelector("#game-container");
            gameContainer.style.top = "100%";
            gameContainer.style.left = "50%";
            gameContainer.style.width = "100%";
            gameContainer.style.height = "100%";
            gameContainer.style.transform = "translate(-50%, -50%)";
        }
    }, 200);



    document.body.style.overflow = "hidden"
    toggleButton.addEventListener("click", function() {
        const gameContainer = document.querySelector("#game-container");
        if (gameContainer) {
            gameContainer.style.position = "absolute";
            gameContainer.style.top = "22%";
            gameContainer.style.left = "50%";
            gameContainer.style.width = "100%";
            gameContainer.style.transform = "translate(-50%, -50%)"; // Center placement
            gameContainer.style.transition = "height 0.5s ease, top 0.5s ease"; // Smoothen the height change
        }

        const currentHeight = gameContainer.style.height;
        gameContainer.style.height = (currentHeight === "27.5%") ? "100%" : "27.5%";
        toggleButton.style.backgroundColor = "#FFB583";
        if (currentHeight == "27.5%"){
            gameContainer.style.top = "100%";
        }
        setTimeout(() => {
            toggleButton.style.backgroundColor = "#FE7112";
        }, 300);
    });

}

// end of cg site code/////////////////////////////////////////////////////////////////////////////////////////
function Kdata1site() {
    //start of kdata1 site code/////////////////////////////////////////////////////////////////////////////////////////
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
    document.body.appendChild(toggleButton);

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

    const ColourPicker = document.createElement("input");
    ColourPicker.textContent = "ColourPicker";
    ColourPicker.style.position = "absolute";
    ColourPicker.style.zIndex = "10";
    ColourPicker.style.autofocus = ""
    ColourPicker.style.bottom = "10px";
    ColourPicker.style.left = "252px";
    ColourPicker.style.width = "60px";
    ColourPicker.style.backgroundColor = "#FE7112";
    ColourPicker.style.border = "none";
    ColourPicker.style.borderRadius = "8px";
    ColourPicker.style.fontFamily = "Roboto, sans-serif";
    ColourPicker.style.transition = "background-color 0.2s ease";
    ColourPicker.style.outline = "none";
    ColourPicker.style.userSelect = "none";
    ColourPicker.style.color = "#000000";
    document.body.appendChild(ColourPicker);


    window.onkeyup = keyup;
    var inputTextValue;
    function keyup(e) {
        if (e.keyCode == 13) {
            const ColourChosen = document.querySelector("body > input").value;
            var bghex = ColourChosen
            document.body.style.backgroundColor = bghex;
            chrome.storage.local.set({'bghex': bghex}, function() {
            });
        }
    }

    const toggleAllButton = document.createElement("button");
    toggleAllButton.textContent = "<";
    toggleAllButton.style.position = "absolute";
    toggleAllButton.style.bottom = "10px";
    toggleAllButton.style.left = "320px"; // Adjusted position
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
        ColourPicker.style.display = buttonsVisible ? "block" : "none";

        // Change the button text and position
        if (buttonsVisible) {
            toggleAllButton.textContent = "<";
            toggleAllButton.style.left = "320px"; // Original position
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
// end of kdata1 site/////////////////////////////////////////////////////////////////////////////////////////
}

// Check the URL and activate the corresponding function
if (currentURL.includes("games.crazygames.com/en_US/house-of-hazards/index.html")) {
    CGsite();
} else if (currentURL.includes("kdata1.com/2020/10/House_of_Hazards/")) {
    Kdata1site();
}


chrome.storage.local.get(['bghex'], function(result) {
    if(result.bghex != undefined) {
        var bghex = result.bghex
        document.body.style.backgroundColor = bghex;
    }else{
       var bghex = "#13141e"
        document.body.style.backgroundColor = bghex;
    }
});

document.title = "HoH Player";

const faviconLink = document.createElement("link");

faviconLink.rel = "icon";
faviconLink.href = "https://github.com/Zacgamingpro1234/HoHs-Menu/blob/main/images/icon48.png";

document.head.appendChild(faviconLink);