export default function JSONtoGeoJSON(props) {
	let geoJson = {};
	geoJson['type'] = 'FeatureCollection';
	geoJson['features'] = [];

	props.nodes.map(val => {
		let newFeature = {
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [parseFloat(val.position[0]), parseFloat(val.position[1])]
			},
			"properties": {
				"category": val.category,
				"ask": val.ask,
				"title": val.title,
				"description": val.description,
				"contact": val.contact,
				"address": val.address,
				"url": val.url
			}
		}
		geoJson['features'].push(newFeature);
	})

	return (geoJson)
}