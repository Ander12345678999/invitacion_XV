const openInvitation = document.getElementById("openInvitation");
const presentation = document.getElementById("presentation");
const countdown = document.getElementById("countdown");


// =========================================
// ABRIR INVITACIÓN
// =========================================

openInvitation.addEventListener("click", () => {

    // Desbloquear la invitación
    document.body.classList.remove("invitation-locked");
    document.body.classList.add("invitation-open");

    // Activar la animación de presentación
    presentation.classList.add("active");

    // Entrar suavemente a la siguiente sección
    setTimeout(() => {

        presentation.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }, 100);

});


// =========================================
// CUENTA REGRESIVA
// =========================================

const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");

const countdownMessage =
    document.querySelector(".countdown-message");


// 31 de octubre de 2026 - 8:00 p. m.
// Colombia: UTC-5

const eventDate = new Date(
    "2026-10-31T20:00:00-05:00"
).getTime();


// =========================================
// ACTUALIZAR CONTADOR
// =========================================

function updateCountdown() {

    const now = Date.now();

    const difference = eventDate - now;


    // Cuando llegue el gran día

    if (difference <= 0) {

        daysElement.textContent = "00";
        hoursElement.textContent = "00";
        minutesElement.textContent = "00";
        secondsElement.textContent = "00";

        countdownMessage.textContent =
            "¡Llegó el gran día! Hoy celebramos juntos los XV años de Andrea. ✨";

        clearInterval(countdownInterval);

        return;
    }


    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
    );

    const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
    );

    const seconds = Math.floor(
        (difference / 1000) % 60
    );


    daysElement.textContent =
        String(days).padStart(2, "0");

    hoursElement.textContent =
        String(hours).padStart(2, "0");

    minutesElement.textContent =
        String(minutes).padStart(2, "0");

    secondsElement.textContent =
        String(seconds).padStart(2, "0");
}


// Primero creamos el intervalo

const countdownInterval = setInterval(
    updateCountdown,
    1000
);


// Ejecutamos una vez inmediatamente

updateCountdown();


// =========================================
// ACTIVAR ANIMACIONES DEL CONTADOR
// =========================================

const countdownObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                countdown.classList.add("active");

                countdownObserver.unobserve(countdown);

            }

        });

    },
    {
        threshold: 0.35
    }
);

countdownObserver.observe(countdown);

const schedule = document.getElementById("schedule");

if (schedule) {

    const scheduleObserver = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    schedule.classList.add("active");

                    scheduleObserver.unobserve(schedule);
                }

            });

        },
        {
            threshold: 0.25
        }
    );

    scheduleObserver.observe(schedule);
}