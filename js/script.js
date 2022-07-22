const primaryNav = document.querySelector(".primary-navigation");

function toggleNav() {
    const visibility = primaryNav.getAttribute("data-visible");

    if (visibility === "false") {
        primaryNav.setAttribute("data-visible", true);
        
    } else if (visibility === "true") {
        primaryNav.setAttribute("data-visible", false);
    }
}

const navList = document.querySelectorAll(".nav-link");

for(let i = 0; i < navList.length; i++) {
    navList[i].addEventListener('click', () => primaryNav.setAttribute("data-visible", false));
}

const goTop = document.querySelector("#go-to-top");

goTop.addEventListener("click", () => window.scroll(0,0));