function showIconLight() {
    const iconLight = document.querySelector(".theme__icon--light");
    iconLight.classList.remove("hidden");
}

function hideIconLight() {
    const iconLight = document.querySelector(".theme__icon--light");
    iconLight.classList.add("hidden");
}

function showIconDark() {
    const iconDark = document.querySelector(".theme__icon--dark");
    iconDark.classList.remove("hidden");
}

function hideIconDark() {
    const iconDark = document.querySelector(".theme__icon--dark");
    iconDark.classList.add("hidden");
}

function addActiveTheme() {
    const button = document.querySelector(".theme__button");
    button.classList.add("active");
}

function removeActiveTheme() {
    const button = document.querySelector(".theme__button");
    button.classList.remove("active");
}

function addDarkTheme() {
    const html = document.querySelector("html");
    html.classList.add("dark");
}

function toggleDarkTheme() {
    const html = document.querySelector("html");
    html.classList.toggle("dark");
}

function savedTheme() {
    return localStorage.getItem("theme");
}

function prefersDark() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

function addFilter() {
    const bgImage = document.querySelector(".storage__background-image");
    bgImage.classList.add("filter");
}

function removeFilter() {
    const bgImage = document.querySelector(".storage__background-image");
    bgImage.classList.remove("filter");
}

preLoadDarkTheme();
function preLoadDarkTheme() {
    if (savedTheme() === "dark" || (savedTheme() === null && prefersDark() ) ) {
        addDarkTheme();
        addActiveTheme();
        hideIconLight();
        showIconDark();
        removeFilter();
    }
}

function isDarkTheme() {
    const html = document.querySelector("html");
    return html.classList.contains("dark");
}

function savePreferredTheme() {
    localStorage.setItem("theme", isDarkTheme() ? "dark" : "light");
}

toggleTheme();
function toggleTheme() {
    const button = document.querySelector(".theme__button");

    button.addEventListener("click", () =>  {
        toggleDarkTheme();

        if ( isDarkTheme() ) {
            addActiveTheme();
            hideIconLight();
            showIconDark();
            removeFilter();
        } else {
            removeActiveTheme();
            showIconLight();
            hideIconDark();
            addFilter();
        }

        savePreferredTheme();
    });
}
