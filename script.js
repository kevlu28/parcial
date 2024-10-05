document.addEventListener("DOMContentLoaded", () => {
    const gameCards = document.querySelectorAll(".game"); // Selecciona todas las tarjetas de juegos
    const modal = document.getElementById("gameModal"); // El modal que mostrará los detalles del juego
    const modalImage = document.getElementById("modalGameImage"); // Imagen en el modal
    const modalTitle = document.getElementById("modalGameTitle"); // Título en el modal
    const modalDescription = document.getElementById("modalGameDescription"); // Descripción en el modal
    const closeModalBtn = document.querySelector(".close"); // Botón para cerrar el modal

    // Datos de los juegos
    const gamesData = {
        1: {
            title: "Throne and Liberty",
            description: "Free to Play. Embark on an epic journey in a mystical world.",
            image: "img/throne2.jpg"
        },
        2: {
            title: "Monster Hunter Stories",
            description: "Midweek Deal. Get it now with 34% discount, only for $15.80!",
            image: "img/monster-hunter-stories-okladka-gra-pc-muve.png"
        },
        3: {
            title: "Songs of Conquest",
            description: "Strategy and adventure combined. On sale for $34.50 with 50% discount!",
            image: "img/songs.jpg"
        }
    };

    // Función para abrir el modal y cargar la información del juego
    gameCards.forEach(card => {
        card.addEventListener("click", () => {
            const gameId = card.dataset.id; // Obtiene el ID del juego desde el atributo data-id
            const game = gamesData[gameId]; // Busca los datos del juego usando el ID

            if (game) {
                modalImage.src = game.image; // Cambia la imagen en el modal
                modalTitle.textContent = game.title; // Cambia el título en el modal
                modalDescription.textContent = game.description; // Cambia la descripción en el modal
                modal.style.display = "flex"; // Muestra el modal
            }
        });
    });

    // Cerrar el modal cuando se hace clic en el botón de cerrar
    closeModalBtn.addEventListener("click", () => {
        modal.style.display = "none"; // Oculta el modal
    });

    // Cerrar el modal si se hace clic fuera del contenido del modal
    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none"; // Oculta el modal si se hace clic fuera de él
        }
    });
});
