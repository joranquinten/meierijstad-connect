import React, { useEffect, useState } from 'react';

import Categories from './map-viewer/categorybuttons';
import AnimatedMap from './map-viewer/animatedmap/component';
import { MapMouseEvent } from 'mapbox-gl';

export function MapViewComponent() {
  const [map, setMap] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState({
    ask: false,
    categories: [],
  });

  useEffect(() => {
    if (map) {
      let filter;
      if (selectedFilter.categories.length === 0) {
        // example filter: ['all', ['==', 'ask', true], ['any', ['==','category', 'other']]]
        filter = ['==', 'ask', selectedFilter.ask || false];
        map.setFilter('data', filter);
      } else {
        const catFilter = ['any'];
        for (const i in selectedFilter.categories) {
          catFilter.push(['==', 'category', selectedFilter.categories[i]]);
        }
        filter = ['all', ['==', 'ask', false], catFilter];
        map.setFilter('data', filter);
      }
    }
  }, [selectedFilter]);

  return (
    <div id={'map-view'}>
      <div className="ui container">
        <div className="ui map-buttons">
          <button
            className={`ui button ${!selectedFilter.ask ? 'active' : ''}`}
            onClick={() => {
              setSelectedFilter({ ask: false, categories: [] });
            }}
          >
            Bekijk het aanbod
          </button>
          <button
            className={`ui button ${selectedFilter.ask ? 'active' : ''}`}
            onClick={() => {
              setSelectedFilter({ ask: true, categories: [] });
            }}
          >
            Bekijk de vraag
          </button>
        </div>
        <div className="mapform">
          <h2>
            Filter {selectedFilter.ask ? 'vraag' : 'aanbod'} op:
          </h2>
          <Categories
            selected={selectedFilter}
            onClick={c => {
              // Remove or add to Array TODO add data back in
              if (c === 'all') {
                setSelectedFilter({ ask: selectedFilter.ask, categories: [] });
              } else {
                if (selectedFilter.categories.includes(c))
                  setSelectedFilter({
                    ask: selectedFilter.ask,
                    categories: selectedFilter.categories.filter(f => f !== c),
                  });
                else
                  setSelectedFilter({
                    ask: selectedFilter.ask,
                    categories: [c].concat(selectedFilter.categories),
                  });
              }
            }}
          />
        </div>
      </div>
      <div id="map-container">
        <AnimatedMap
          getMapObject={m => setMap(m)}
        />
      </div>
    </div>
  );
}
