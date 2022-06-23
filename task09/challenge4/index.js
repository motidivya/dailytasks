const themeSelector = document.querySelector("#themes");
const themeLink = document.querySelector(".theme");

function setTheme() {
    let theme = themeSelector.value;
    themeLink.setAttribute("href", "theme-" + theme + ".css");
}

themeSelector.addEventListener("change", () => {
    setTheme();
});

setTheme();