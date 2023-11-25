class MemberCard {
	#name;
	#role;
	#img;
	#githubLink;
	#description;

	constructor(nombre, role, img, githubLink, description) {
		this.#name = nombre;
		this.#role = role;
		this.#img = img;
		this.#githubLink = githubLink;
		this.#description = description;
	}

	createCard() {
		return `
            <article class="card-team w-fit">
                <div class="mt-4 card-team-container">
                    <figure class="card-team-figure">
                        <img
                            src="${this.#img}"
                            alt="Foto del integrante con nombre ${this.#name}"
                        />
                    </figure>
                    <div class="d-flex mt-4 mb-2">
                        <h2 class="m-0">${this.#name}</h2>
                        <div class="ms-4">
                            <a href="${this.#githubLink}">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="32"
                                    height="32"
                                    fill="currentColor"
                                    class="bi bi-github"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <h6 class="card-team-role">${this.#role}</h6>
                    <div class="card-team-description">
                        <p class="m-0">
                            ${this.#description}
                        </p>
                    </div>
                </div>
            </article>
        `;
	}
}

let cardCarlos = new MemberCard(
	"Carlos Carranza",
	"Scrum Master",
	"./assets/img/YO-bottomless.png",
	"https://github.com/Cielciti97/",
	"Hola, mi nombre es Carlos y soy programador. Me considero una persona analítica, paciente y creativa, características que me ayudan a resolver problemas de manera eficiente. Me gusta la música electrónica, leer artículos de las últimas tendencias y tecnologías en desarrollo, practicar básquetbol, resolver el cubo de Rubik y sobre todo, me apasiona crear soluciones a través del código."
);

let cardAlan = new MemberCard(
	"Alan Navarro",
	"Developer",
	"./assets/img/YO-bottomless.png",
	"https://github.com/Cielciti97/",
	"Estudiante Generation"
);

let cardsArray = [cardCarlos.createCard(), cardAlan.createCard()];

const cardsContainer = document.getElementById("cards-container");
cardsContainer.innerHTML = cardsArray.join("");
