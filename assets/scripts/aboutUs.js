class MiembroDeEquipo {
	#nombre;
	#posicion;
	#equipo;

	constructor(nombre, posicion, equipo) {
		this.#nombre = nombre; // Sebas
		this.#posicion = posicion; // Desarrollador
		this.#equipo = equipo; //
	}

	get nombre() {
		return this.#nombre;
	}

	set nombre(nombre) {
		this.#nombre = nombre;
	}

	get equipo() {
		return this.#equipo;
	}

	saludar() {
		console.log("Hola soy " + this.#nombre);
	}
}

let miembro = {
	nombre: "Gaby",
	posicion: "Product Owner",
	equipo: "HTAMALEROS",
	saludar: () => {
		console.log("Hola!");
	},
};
console.log(miembro.nombre);
miembro.saludar();

let sebas = new MiembroDeEquipo("Sebas", "Desarrollador", "HTAMALEROS");
let arlene = new MiembroDeEquipo("Arlene", "Desarrollador", "HTAMALEROS");
