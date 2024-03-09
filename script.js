document.addEventListener("DOMContentLoaded", async function () {
    try {
        const response = await fetch("https://api.disneyapi.dev/character");
        const data = await response.json();
        const charactersContainer = document.getElementById("characters-container");

        data.data.forEach(character => {
            const characterCard = document.createElement("div");
            characterCard.classList.add("character-card");

            const characterImage = document.createElement("img");
            characterImage.classList.add("character-image");
            characterImage.src = character.imageUrl;
            characterImage.alt = character.name;

            const characterName = document.createElement("div");
            characterName.classList.add("character-name");
            characterName.textContent = character.name;

            const movieName = document.createElement("div");
            movieName.classList.add("movie-name");
            movieName.textContent = character.movie;

            characterCard.appendChild(characterImage);
            characterCard.appendChild(characterName);
            characterCard.appendChild(movieName);

            charactersContainer.appendChild(characterCard);
        });
    } catch (error) {
        console.error("Error fetching data:", error);
    }
});
