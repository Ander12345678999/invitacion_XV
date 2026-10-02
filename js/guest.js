// =========================================
// PERSONALIZACIÓN DE LA INVITACIÓN
// =========================================

const guestNameElement = document.getElementById("guestName");
const guestCuposElement = document.getElementById("guestCupos");

// Obtener el código del invitado desde la URL
const params = new URLSearchParams(window.location.search);
const codigoInvitado = params.get("invitado");

// Buscar el invitado
const invitado = invitados[codigoInvitado];

// =========================================
// MOSTRAR INFORMACIÓN
// =========================================

if (invitado) {

    guestNameElement.textContent = invitado.nombre;

    if (invitado.cupos === 0) {

    guestCuposElement.textContent =
        "Tienen 0 cupos reservados";

} else if (invitado.cupos === 1) {

    guestCuposElement.textContent =
        "Tienes 1 cupo reservado";

} else if (typeof invitado.cupos === "number") {

    guestCuposElement.textContent =
        `Tienen ${invitado.cupos} cupos reservados`;

} else {

    guestCuposElement.textContent =
        "Cupos por confirmar";

}

} else {

    // Si alguien entra sin código válido
    guestNameElement.textContent =
        "Invitado especial";

    guestCuposElement.textContent =
        "Tu invitación es personal";
}

// =========================================
// ENLACE PERSONALIZADO AL GOOGLE FORM
// =========================================

const confirmationButton = document.querySelector(".confirmation-button");

if (confirmationButton && invitado) {
    const googleFormBase =
        "https://docs.google.com/forms/d/e/1FAIpQLSel8JOMpuIUkbqyaObHmO7zOFZ3ZyTUH8Qcr9fehTZFmA4nHA/viewform";

    const googleFormUrl =
        googleFormBase +
        "?usp=pp_url" +
        "&entry.559352220=" + encodeURIComponent(invitado.nombre);

    confirmationButton.href = googleFormUrl;
}