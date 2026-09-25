const openInvitation = document.getElementById("openInvitation");
const presentation = document.getElementById("presentation");

openInvitation.addEventListener("click", () => {

    presentation.classList.add("active");

    presentation.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

});