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
            <article class="card-team">
                <div class="mt-4 card-team-body">
                    <figure class="card-team-figure">
                        <img
                            src="${this.#img}"
                            alt="Foto del integrante con nombre ${this.#name}"
                        />
                    </figure>
                    <div class="d-flex mt-4 mb-2">
                        <h2 class="m-0">${this.#name}</h2>
                        <div class="ms-4">
                            <a href="${this.#githubLink}" target="_blank">
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
	"./assets/img/fotoAlanCard.png",
	"https://github.com/Cielciti97/",
	"¡Hola! Mi nombre es Alan y soy un apasionado por la creación de experiencias web cautivadoras y funcionales. Con una sólida formación en desarrollo web, busco aprovechar mis habilidades técnicas y mi creatividad para contribuir al desarrollo de aplicaciones web innovadoras y de alta calidad."
);

let cardArlene = new MemberCard(
	"Arlene Ortiz",
	"Developer",
	"./assets/img/arlene-sinfondo.png",
	"https://github.com/arleneom",
	"¡Hola! Soy Arlene Ortiz, Psicóloga Cognitivo-Conductual formada en la UANL, creativa, honesta y empática. Apasionada por las nuevas tecnologías, el aprendizaje, la solución de problemas, la cocina y la música. Formándome como programadora y buscando mi camino en las tecnologías como una forma de reunir todas mis pasiones."
);

let cardArely = new MemberCard(
	"Arely Rizo",
	"Developer",
	"./assets/img/arely.png",
	"https://github.com/arelyrizo",
	"Mi nombre es Arely Rizo Ruiz, Naci el 5  de julio del año 2000,  estudie la licenciatura en negocios internacionales, culminada en el 2022, ocotlan jalisco con excelencia academica. Vivo en guadalajara jalisco.Actualmente me encuentro preaparandome como desarrolladora java full stack"
);

let cardSebastian = new MemberCard(
	"Sebastian Montes de Oca",
	"Developer",
	"./assets/img/fotoSebas.png",
	"https://github.com/sebastianmov",
	"Un placer, mi nombre es Sebastian Montes de Oca, Ingeniero de minas y metalurgia. Actualmente me encuentro en preparación de ser Developer Jr. Soy geek, disfruto aprender sobre programación y se que siendo tolerante, enfocado y perseverante lograre analizar los problemas y resolverlos de manera correcta. Me encanta la música, bailar y rodar en bicicleta. Lo mejor que existe para mí es observar el verde de los caminos que atraviesas."
);

let cardGabriela = new MemberCard(
	"Gabriela Ferro",
	"Product Owner",
	"./assets/img/fotoGabyFerroRz.png",
	"https://github.com/Gabriela-Ferro",
	"¡Hola! Soy Gabriela, actualmente funjo como Product Owner y miembro del Development Team de este gran proyecto. Estudie Derecho en la UNAM y actualmente me formo como desarrolladora junior. Tengo multiples intereses y pasatiempos muy diversos, en especial me gustan las artes visuales, la naturaleza y los deportes. Me interesa el diseño UX-UI, y mi meta es trabajar diseñando y programando páginas accesibles con visuales atractivos que impacten positivamente a las personas.!"
);

let cardAndres = new MemberCard(
	"Andrés Pérez",
	"Developer",
	"./assets/img/fotoAndres.png",
	"https://github.com/Mkief02",
	"Hola, me llamo Andrés y, de acuerdo con mi trayectoria académica, soy músico y productor; algo que sin duda complementa el ser y pensar de lo que  pieso que me identifica de mejor forma, alguien curioso, apasionado por las matemáticas, la cuestión y las artes."
);

let cardsArray = [
	cardCarlos.createCard(),
	cardAlan.createCard(),
	cardArlene.createCard(),
	cardArely.createCard(),
	cardSebastian.createCard(),
	cardGabriela.createCard(),
	cardAndres.createCard(),
];

const cardsContainer = document.getElementById("cards-container");
cardsContainer.innerHTML = cardsArray.join("");
