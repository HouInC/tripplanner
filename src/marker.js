const mapboxgl = require("mapbox-gl");

const iconURL = {
	activity : "http://i.imgur.com/WbMOfMl.png",
	hotel : 'http://i.imgur.com/D9574Cu.png',
	restaurant : 'http://i.imgur.com/cqR6pUI.png'
}


BuildMarker=(type,coord)=>{
	let markerDomEl = document.createElement('div');
	markerDomEl.style.width = "32px";
	markerDomEl.style.height = "39px";
	markerDomEl.style.backgroundImage = `url(${iconURL[type]})`;
	return new mapboxgl.Marker(markerDomEl).setLngLat(coord);
}



module.exports = BuildMarker;