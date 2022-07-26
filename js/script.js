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


//contact form

function submitForm(event) {
    
    event.preventDefault();

    const form = document.querySelector(".contact-form");

    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;

    const work = document.querySelector("#work");
    const collab = document.querySelector("#collab");
    const chat = document.querySelector("#chat");
    const other = document.querySelector("#other").value;

    const message = document.querySelector("#message").value;

    let subject = "";

    if(work.checked == true) {
        subject = work.value;
    } else if (collab.checked == true){
        subject = collab.value;
    } else if (chat.checked == true) {
        subject = chat.value;
    } else {
        subject = other;
    }

    window.open("mailto: adetoyeadewoye@gmail.com?subject=subject&body=body");
    console.log(name, email, subject, message);
}