import React, { useEffect, useState } from "react";

import Categories from "./map-viewer/categorybuttons";
import AnimatedMap from "./map-viewer/animatedmap/component";

export function MapViewComponent() {
	const [map, setMap] = useState(null)
	const [selectedCategories, setSelectedCategories] = useState([])

	useEffect(() => {
		if (map) {
			if (selectedCategories.length === 0) {
				// eslint-disable-next-line
				map.setFilter('data', undefined)
			} else {
				const filter = ['any']
				for (const i in selectedCategories) {
					filter.push(['==', 'category', selectedCategories[i]])
				}
				map.setFilter('data', filter)
			}
		}
	}, [selectedCategories])

	return (
		<div id={'map-view'}>
			<div className='ui container'>
				<div className='mapform'>
					<h2>Filter by categories</h2>
					<Categories
						selected={selectedCategories}
						onClick={c => {
							// Remove or add to Array TODO add data back in
							if (c === 'all') {
								setSelectedCategories([])
							} else {
								if (selectedCategories.includes(c))
									setSelectedCategories(selectedCategories.filter(f => f !== c))
								else setSelectedCategories([c].concat(selectedCategories))
							}
						}}
					/>
				</div>
			</div>
			<div id='map-container'>
				<AnimatedMap getMapObject={m => setMap(m)} />
			</div>
		</div>
	)
}