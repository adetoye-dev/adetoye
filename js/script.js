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

    $.ajax({
        type: "post",
        cache: false,
        url: "https://formspree.io/f/xpzkjkab",
        data: {
          name: name,
          email: email,
          subject: subject,
          message: message
        },
        
        complete: function()
        {
            modal.showModal();
            modalText.innerHTML = "Form Submitted Successfully <br> Thanks for your response!";
            $("#contact-form").trigger('reset');
        }
    })
}


const modal = document.querySelector(".modal");
const modalText = document.querySelector(".modal-text");
const closeModal = document.querySelector(".close-modal-btn");

closeModal.addEventListener('click', () => {
    modal.close();
})