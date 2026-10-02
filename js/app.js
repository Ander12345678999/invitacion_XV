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
const eventInfo = document.getElementById("event-info");

if (eventInfo) {
    const eventInfoObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    eventInfo.classList.add("active");
                    eventInfoObserver.unobserve(eventInfo);
                }
            });
        },
        {
            threshold: 0.25
        }
    );

    eventInfoObserver.observe(eventInfo);
}
// =========================================
// LISTA DE INVITADOS
// =========================================

const invitados = {

    // Amigos de la cumpleañera

    "sofia-taboada": {
        nombre: "Sofia Taboada",
        cupos: 1
    },

    "aryanis-tavera": {
        nombre: "Aryanis Tavera",
        cupos: 1
    },

    "kathery-ayala": {
        nombre: "Kathery Ayala",
        cupos: 1
    },

    "maria-llorente": {
        nombre: "María Llorente",
        cupos: 1
    },

    "sara-mieles": {
        nombre: "Sara Mieles",
        cupos: 1
    },

    "victoria-vergara": {
        nombre: "Victoria Vergara",
        cupos: 1
    },

    "antonella-renteria": {
        nombre: "Antonella Rentería",
        cupos: 1
    },

    "isalene-palomo": {
        nombre: "Isalene Palomo",
        cupos: 1
    },

    "maria-lopez": {
        nombre: "María López",
        cupos: 1
    },

    "maria-fatima-plaza": {
        nombre: "Maria Fatima Plaza",
        cupos: 1
    },

    "juan-giraldo": {
        nombre: "Juan Giraldo",
        cupos: 1
    },

    "samuel-blanquicet": {
        nombre: "Samuel Blanquicet",
        cupos: 1
    },

    "antonio-murillo": {
        nombre: "Antonio Murillo",
        cupos: 1
    },

    "andres-barriento": {
        nombre: "Andres Barriento",
        cupos: 1
    },

    "esteban-vergara": {
        nombre: "Esteban Vergara",
        cupos: 1
    },

    "juan-kelsy": {
        nombre: "Juan Kelsy",
        cupos: 1
    },

    "sebastian-sierra": {
        nombre: "Sebastian Sierra",
        cupos: 1
    },

    "isaias-cardozo": {
        nombre: "Isaias Cardozo",
        cupos: 1
    },

    "maria-fernanda-cristian-plaza": {
        nombre: "Maria Fernanda y Cristian Plaza",
        cupos: 2
    },

    "abraham-pollo-rodriguez": {
        nombre: "Abraham pollo Rodriguez",
        cupos: 1
    },

    "aritchin-buendia": {
        nombre: "Aritchin Buendia",
        cupos: 1
    },

    "sebastian-cvs": {
        nombre: "Sebastian CVS",
        cupos: 1
    },

    "diegool-cabrales": {
        nombre: "Diegool Cabrales",
        cupos: 1
    },

    "isabella-cogollo": {
        nombre: "Isabella Cogollo",
        cupos: 1
    },


    // Amigos del papá de la cumpleañera

    "alfonso-y-anparo": {
        nombre: "Alfonso y Anparo",
        cupos: 2
    },

    "rowan-karen-mariam": {
        nombre: "Rowan, Karen y Mariam",
        cupos: 3
    },

    "epifanio-y-senora": {
        nombre: "Epifanio y señora",
        cupos: 2
    },

    "harold-y-senora": {
        nombre: "Harold y señora",
        cupos: 2
    },

    "hernan-hernandez": {
        nombre: "Hernan Hernandez",
        cupos: 2
    },

    "fray-y-lucia": {
        nombre: "Fray y Lucia",
        cupos: 2
    },

    "gustavo-altamiranda-y-senora": {
        nombre: "Gustavo Altamiranda y señora",
        cupos: 2
    },

    "jose-romero-maria-rodriguez": {
        nombre: "Jose Romero y Maria Rodriguez",
        cupos: 2
    },

    "danner-osorio-y-senora": {
        nombre: "Danner Osorio y señora",
        cupos: 2
    },

    "medardo-herrera": {
        nombre: "Medardo Herrera",
        cupos: 2
    },

    "alexander-galvan-y-senora": {
        nombre: "Alexander Galvan y señora",
        cupos: 2
    },

    "elver-y-luz-marina": {
        nombre: "Elver y Luz Marina",
        cupos: 2
    },

    "maximo-y-karin": {
        nombre: "Máximo y Karin",
        cupos: 2
    },

    "arquimedes-y-senora": {
        nombre: "Arquímedes y señora",
        cupos: 2
    },

    "gabriel-galarcio-y-senora": {
        nombre: "Gabriel Galarcio y señora",
        cupos: 2
    },

    "luis-caldera-y-senora": {
        nombre: "Luis Caldera y señora",
        cupos: 2
    },


    // Vecinos

    "familia-manco-negrete": {
    nombre: "Familia Manco Negrete",
    cupos: 0
     },

    "richard-ensuncho": {
        nombre: "Richard Ensuncho",
        cupos: 1
    },

    "martha-y-carlos": {
        nombre: "Martha y Carlos",
        cupos: 2
    },


    // Familia por parte de papá

    "edgardo-pertuz": {
        nombre: "Edgardo Pertuz",
        cupos: 1
    },

    "leandro": {
        nombre: "Leandro",
        cupos: 1
    },

    "familia-cuentas-rochy": {
        nombre: "Familia Cuentas Rochy",
        cupos: 3
    },

    "familia-rochy-cuentas": {
        nombre: "Familia Rochy Cuentas",
        cupos: 3
    },

    "alvaro-jesus-cuentas": {
        nombre: "Alvaro Jesus Cuentas",
        cupos: 1
    },

    "miriam-vallejo": {
        nombre: "Miriam Vallejo",
        cupos: 1
    },


    // Familia por parte de mamá

    "familia-vargas-sanchez": {
        nombre: "Familia Vargas Sanchez",
        cupos: 3
    },

    "paula-y-juan": {
        nombre: "Paula y Juan",
        cupos: 2
    },

    "maria-magdalena": {
        nombre: "Maria Magdalena",
        cupos: 1
    },

    "familia-rivera-sanchez": {
        nombre: "Familia Rivera Sanchez",
        cupos: 3
    },

    "familia-sanchez-hernandez": {
        nombre: "Familia Sanchez Hernández",
        cupos: 4
    },

    "familia-sanchez-avila": {
        nombre: "Familia Sanchez Avila",
        cupos: 2
    },

    "libardo-sanchez": {
        nombre: "Libardo Sanchez",
        cupos: 1
    },

    "martha-sanchez": {
        nombre: "Martha Sanchez",
        cupos: 1
    },

    "familia-pastrana-benitez": {
        nombre: "Familia Pastrana Benitez",
        cupos: 4
    },

    "angelica-y-diego": {
        nombre: "Angelica y Diego",
        cupos: 2
    },

    "familia-pastrana": {
        nombre: "Familia Pastrana",
        cupos: 3
    },

    "shirley-y-uriel": {
        nombre: "Shirley y Uriel",
        cupos: 2
    }

};

// =========================================
// SLIDESHOW DE FOTOS DE ANDREA
// =========================================

const slides = document.querySelectorAll(".photo-slideshow .slide");
const photoAge = document.getElementById("photoAge");

let currentSlide = 0;

const photoAges = [
    "0 años",
    "1 año",
    "2 años",
    "3 años",
    "4 años",
    "5 años",
    "6 años",
    "7 años",
    "8 años",
    "9 años",
    "10 años",
    "11 años",
    "12 años",
    "15 años"
];

function changePhoto() {

    if (!slides.length) return;

    slides[currentSlide].classList.remove("active");

    currentSlide = (currentSlide + 1) % slides.length;

    slides[currentSlide].classList.add("active");

    if (photoAge) {
        photoAge.textContent = photoAges[currentSlide];
    }
}

if (slides.length > 1) {
    setInterval(changePhoto, 4500);
}