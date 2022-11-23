import ReactDOM from "react-dom/client";
import "./App.css";

function App() {
	//Se declaran las variables de diferencia horaria
	let localtime = new Date();
	let qatar = new Date(localtime.getTime() + 3600000 * 9);
	let france = new Date(localtime.getTime() + 3600000 * 7);
	let japan = new Date(localtime.getTime() + 3600000 * 15);

	//Accedemos al div del html para mostrar los horarios
	const root = ReactDOM.createRoot(document.getElementById("root"));
	const element = (
		<div className="App">
			<header className="App-header">
				<h1>La hora es: </h1>
				<h2>En México : {new Date().toLocaleTimeString("es-MX")}</h2>
				<h2>En Qatar: {qatar.toLocaleTimeString("es-MX")}</h2>
				<h2>En Francia: {france.toLocaleTimeString("es-MX")}</h2>
				<h2>En Japón: {japan.toLocaleTimeString("es-MX")}</h2>
			</header>
		</div>
	);
	//Renderizamos
	root.render(element);
}

export default App;
