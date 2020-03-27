/* Important: Change THE MAPTILER KEY (the one for Whozinberg.org is in now, it's sejRzrAFFIRh75t6tsm8) to YOUR OWN Maptiler Key. Get one here: https://www.maptiler.com/google-maps-platform-alternative/ */

module.exports = {
  "version": 8,
  "name": "Basic",
  "metadata": {
    "mapbox:autocomposite": false,
    "mapbox:type": "template",
    "maputnik:renderer": "mbgljs",
    "openmaptiles:version": "3.x",
    "openmaptiles:mapbox:owner": "openmaptiles",
    "openmaptiles:mapbox:source:url": "mapbox://openmaptiles.4qljc88t"
  },
  "sources": {
    "openmaptiles": {
      "type": "vector",
      "url": "https://api.maptiler.com/tiles/v3/tiles.json?key=bvXHXPZPef3GhcLIWIlM"
    }
  },
  "glyphs": "https://api.maptiler.com/fonts/{fontstack}/{range}.pbf?key=bvXHXPZPef3GhcLIWIlM",
  "layers": [
    {
      "id": "background",
      "type": "background",
      "paint": { "background-color": "rgba(255, 255, 255, 1)" }
    },
    {
      "id": "landuse-residential",
      "type": "fill",
      "source": "openmaptiles",
      "source-layer": "landuse",
      "minzoom": 8,
      "maxzoom": 24,
      "filter": [
        "all",
        ["==", "$type", "Polygon"],
        ["in", "class", "residential", "suburb", "neighbourhood"]
      ],
      "layout": { "visibility": "visible" },
      "paint": {
        "fill-color": {
          "stops": [
            [11, "rgba(240, 240, 240, 1)"],
            [12, "rgba(248, 248, 248, 1)"],
            [13, "rgba(255, 255, 255, 1)"]
          ]
        },
        "fill-opacity": 1
      }
    },
    {
      "id": "landcover_grass",
      "type": "fill",
      "source": "openmaptiles",
      "source-layer": "landcover",
      "filter": ["==", "class", "grass"],
      "paint": { "fill-color": "rgba(217, 232, 194, 1)", "fill-opacity": 0.45 }
    },
    {
      "id": "landcover_wood-copy-copy",
      "type": "fill",
      "source": "openmaptiles",
      "source-layer": "landcover",
      "filter": ["==", "class", "wood"],
      "layout": { "visibility": "none" },
      "paint": {
        "fill-color": "rgba(185, 191, 183, 1)",
        "fill-opacity": {
          "base": 1,
          "stops": [
            [8, 0.6],
            [22, 1]
          ]
        }
      }
    },
    {
      "id": "landcover_wood-copy",
      "type": "fill",
      "source": "openmaptiles",
      "source-layer": "landcover",
      "filter": ["==", "class", "wood"],
      "layout": { "visibility": "none" },
      "paint": {
        "fill-color": "rgba(185, 191, 183, 1)",
        "fill-opacity": {
          "base": 1,
          "stops": [
            [8, 0.6],
            [22, 1]
          ]
        }
      }
    },
    {
      "id": "landcover_wood",
      "type": "fill",
      "source": "openmaptiles",
      "source-layer": "landcover",
      "filter": ["==", "class", "wood"],
      "layout": { "visibility": "none" },
      "paint": {
        "fill-color": "rgba(185, 191, 183, 1)",
        "fill-opacity": {
          "base": 1,
          "stops": [
            [8, 0.6],
            [22, 1]
          ]
        }
      }
    },
    {
      "id": "water_intermittent",
      "type": "fill",
      "source": "openmaptiles",
      "source-layer": "water",
      "filter": ["all", ["==", "$type", "Polygon"], ["==", "intermittent", 1]],
      "layout": { "visibility": "visible" },
      "paint": { "fill-color": "rgba(210, 223, 228, 1)", "fill-opacity": 0.7 }
    },
    {
      "id": "water",
      "type": "fill",
      "source": "openmaptiles",
      "source-layer": "water",
      "filter": ["all", ["==", "$type", "Polygon"], ["!=", "intermittent", 1]],
      "layout": { "visibility": "visible" },
      "paint": { "fill-color": "rgba(210, 223, 228, 1)" }
    },
    {
      "id": "landcover-ice-shelf",
      "type": "fill",
      "source": "openmaptiles",
      "source-layer": "landcover",
      "filter": ["==", "subclass", "ice_shelf"],
      "layout": { "visibility": "visible" },
      "paint": { "fill-color": "hsl(47, 26%, 88%)", "fill-opacity": 0.8 }
    },
    {
      "id": "landcover-glacier",
      "type": "fill",
      "source": "openmaptiles",
      "source-layer": "landcover",
      "filter": ["==", "subclass", "glacier"],
      "layout": { "visibility": "visible" },
      "paint": {
        "fill-color": "hsl(47, 22%, 94%)",
        "fill-opacity": {
          "base": 1,
          "stops": [
            [0, 1],
            [8, 0.5]
          ]
        }
      }
    },
    {
      "id": "landcover_sand",
      "type": "fill",
      "metadata": {},
      "source": "openmaptiles",
      "source-layer": "landcover",
      "filter": ["all", ["in", "class", "sand"]],
      "paint": {
        "fill-antialias": false,
        "fill-color": "#ffbe76",
        "fill-opacity": 0.3
      }
    },
    {
      "id": "landuse",
      "type": "fill",
      "source": "openmaptiles",
      "source-layer": "landuse",
      "filter": ["==", "class", "agriculture"],
      "layout": { "visibility": "visible" },
      "paint": { "fill-color": "#eae0d0" }
    },
    {
      "id": "landuse_overlay_national_park",
      "type": "fill",
      "source": "openmaptiles",
      "source-layer": "landcover",
      "filter": ["==", "class", "national_park"],
      "layout": { "visibility": "visible" },
      "paint": {
        "fill-color": "rgba(222, 222, 219, 1)",
        "fill-opacity": {
          "base": 1,
          "stops": [
            [5, 0],
            [9, 0.75]
          ]
        }
      }
    },
    {
      "id": "waterway-tunnel",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "waterway",
      "filter": [
        "all",
        ["==", "$type", "LineString"],
        ["==", "brunnel", "tunnel"]
      ],
      "layout": { "visibility": "visible" },
      "paint": {
        "line-color": "rgba(210, 223, 228, 1)",
        "line-dasharray": [3, 3],
        "line-gap-width": {
          "stops": [
            [12, 0],
            [20, 6]
          ]
        },
        "line-opacity": 1,
        "line-width": {
          "base": 1.4,
          "stops": [
            [8, 1],
            [20, 2]
          ]
        }
      }
    },
    {
      "id": "waterway",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "waterway",
      "filter": [
        "all",
        ["==", "$type", "LineString"],
        ["!in", "brunnel", "tunnel", "bridge"],
        ["!=", "intermittent", 1]
      ],
      "layout": { "visibility": "visible" },
      "paint": {
        "line-color": "rgba(210, 223, 228, 1)",
        "line-opacity": 1,
        "line-width": {
          "base": 1.4,
          "stops": [
            [8, 1],
            [20, 8]
          ]
        }
      }
    },
    {
      "id": "waterway_intermittent",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "waterway",
      "filter": [
        "all",
        ["==", "$type", "LineString"],
        ["!in", "brunnel", "tunnel", "bridge"],
        ["==", "intermittent", 1]
      ],
      "layout": { "visibility": "visible" },
      "paint": {
        "line-color": "rgba(210, 223, 228, 1)",
        "line-opacity": 1,
        "line-width": {
          "base": 1.4,
          "stops": [
            [8, 1],
            [20, 8]
          ]
        },
        "line-dasharray": [2, 1]
      }
    },
    {
      "id": "tunnel_railway_transit",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "minzoom": 0,
      "filter": [
        "all",
        ["==", "$type", "LineString"],
        ["==", "brunnel", "tunnel"],
        ["==", "class", "transit"]
      ],
      "layout": { "line-cap": "butt", "line-join": "miter" },
      "paint": {
        "line-color": "hsl(34, 12%, 66%)",
        "line-dasharray": [3, 3],
        "line-opacity": {
          "base": 1,
          "stops": [
            [11, 0],
            [16, 1]
          ]
        }
      }
    },
    {
      "id": "housenumber",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "housenumber",
      "minzoom": 17,
      "filter": ["==", "$type", "Point"],
      "layout": {
        "text-field": "{housenumber}",
        "text-font": ["Noto Sans Regular"],
        "text-size": 10,
        "visibility": "none"
      },
      "paint": { "text-color": "rgba(212, 177, 146, 1)" }
    },
    {
      "id": "pedestrian",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "minzoom": 12,
      "filter": ["all", ["==", "$type", "LineString"], ["==", "class", "path"]],
      "layout": { "line-cap": "round", "line-join": "round" },
      "paint": {
        "line-color": {
          "stops": [
            [12, "rgba(239, 239, 239, 1)"],
            [16, "rgba(221, 221, 221, 1)"],
            [17, "rgba(232, 232, 232, 1)"]
          ]
        },
        "line-width": {
          "base": 1.4,
          "stops": [
            [12, 0],
            [16, 2],
            [17, 7],
            [18, 10],
            [22, 20]
          ]
        }
      }
    },
    {
      "id": "road_area_pier",
      "type": "fill",
      "metadata": {},
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": ["all", ["==", "$type", "Polygon"], ["==", "class", "pier"]],
      "layout": { "visibility": "visible" },
      "paint": {
        "fill-color": "rgba(201, 201, 201, 1)",
        "fill-antialias": true
      }
    },
    {
      "id": "road_pier",
      "type": "line",
      "metadata": {},
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": ["all", ["==", "$type", "LineString"], ["in", "class", "pier"]],
      "layout": { "line-cap": "round", "line-join": "round" },
      "paint": {
        "line-color": "rgba(201, 201, 201, 1)",
        "line-width": {
          "base": 1.2,
          "stops": [
            [15, 1],
            [17, 4]
          ]
        }
      }
    },
    {
      "id": "road_bridge_area",
      "type": "fill",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        ["==", "$type", "Polygon"],
        ["in", "brunnel", "bridge"]
      ],
      "layout": {},
      "paint": {
        "fill-color": "rgba(254, 254, 254, 1)",
        "fill-opacity": 1,
        "fill-antialias": true,
        "fill-translate-anchor": "map"
      }
    },
    {
      "id": "road_path",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        ["==", "$type", "LineString"],
        ["in", "class", "path", "track"]
      ],
      "layout": {
        "line-cap": "square",
        "line-join": "bevel",
        "visibility": "visible"
      },
      "paint": {
        "line-color": "hsl(0, 0%, 97%)",
        "line-dasharray": [1, 1],
        "line-width": {
          "base": 1.55,
          "stops": [
            [4, 0.25],
            [20, 10]
          ]
        }
      }
    },
    {
      "id": "road_minor",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "minzoom": 13,
      "filter": [
        "all",
        ["==", "$type", "LineString"],
        ["in", "class", "minor", "service"]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "visible"
      },
      "paint": {
        "line-color": {
          "stops": [
            [12, "rgba(232, 232, 232, 1)"],
            [13, "rgba(240, 240, 240, 1)"]
          ]
        },
        "line-width": {
          "base": 1.55,
          "stops": [
            [1, 3],
            [16, 1],
            [17, 10],
            [20, 30]
          ]
        }
      }
    },
    {
      "id": "tunnel_minor",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        ["==", "$type", "LineString"],
        ["==", "brunnel", "tunnel"],
        ["==", "class", "minor_road"]
      ],
      "layout": { "line-cap": "butt", "line-join": "miter" },
      "paint": {
        "line-color": "#efefef",
        "line-dasharray": [0.36, 0.18],
        "line-width": {
          "base": 1.55,
          "stops": [
            [4, 0.25],
            [20, 30]
          ]
        }
      }
    },
    {
      "id": "tunnel_major",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        ["==", "$type", "LineString"],
        ["==", "brunnel", "tunnel"],
        ["in", "class", "primary", "secondary", "tertiary", "trunk"]
      ],
      "layout": { "line-cap": "butt", "line-join": "miter" },
      "paint": {
        "line-color": "#fff",
        "line-dasharray": [0.28, 0.14],
        "line-width": {
          "base": 1.4,
          "stops": [
            [6, 0.5],
            [20, 30]
          ]
        }
      }
    },
    {
      "id": "aeroway-area",
      "type": "fill",
      "metadata": { "mapbox:group": "1444849345966.4436" },
      "source": "openmaptiles",
      "source-layer": "aeroway",
      "minzoom": 4,
      "filter": [
        "all",
        ["==", "$type", "Polygon"],
        ["in", "class", "runway", "taxiway"]
      ],
      "layout": { "visibility": "visible" },
      "paint": {
        "fill-color": "rgba(255, 255, 255, 1)",
        "fill-opacity": {
          "base": 1,
          "stops": [
            [13, 0],
            [14, 1]
          ]
        }
      }
    },
    {
      "id": "aeroway-taxiway",
      "type": "line",
      "metadata": { "mapbox:group": "1444849345966.4436" },
      "source": "openmaptiles",
      "source-layer": "aeroway",
      "minzoom": 12,
      "filter": [
        "all",
        ["in", "class", "taxiway"],
        ["==", "$type", "LineString"]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "visible"
      },
      "paint": {
        "line-color": "rgba(255, 255, 255, 1)",
        "line-opacity": 1,
        "line-width": {
          "base": 1.5,
          "stops": [
            [12, 1],
            [17, 10]
          ]
        }
      }
    },
    {
      "id": "aeroway-runway",
      "type": "line",
      "metadata": { "mapbox:group": "1444849345966.4436" },
      "source": "openmaptiles",
      "source-layer": "aeroway",
      "minzoom": 4,
      "filter": [
        "all",
        ["in", "class", "runway"],
        ["==", "$type", "LineString"]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "visible"
      },
      "paint": {
        "line-color": "rgba(255, 255, 255, 1)",
        "line-opacity": 1,
        "line-width": {
          "base": 1.5,
          "stops": [
            [11, 4],
            [17, 50]
          ]
        }
      }
    },
    {
      "id": "road_secondary_tertiary",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        ["==", "$type", "LineString"],
        ["in", "class", "secondary", "tertiary"]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "visible"
      },
      "paint": {
        "line-color": {
          "stops": [
            [12, "rgba(239, 239, 239, 1)"],
            [13, "rgba(240, 240, 240, 1)"],
            [16, "rgba(207, 207, 207, 1)"],
            [17, "rgba(217, 217, 217, 1)"]
          ]
        },
        "line-width": {
          "base": 1.4,
          "stops": [
            [1, 0.5],
            [16, 4],
            [17, 8.5],
            [18, 22]
          ]
        }
      }
    },
    {
      "id": "road_trunk_primary",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        ["==", "$type", "LineString"],
        ["in", "class", "trunk", "primary"]
      ],
      "layout": { "line-cap": "round", "line-join": "round" },
      "paint": {
        "line-color": {
          "stops": [
            [12, "rgba(239, 239, 239, 1)"],
            [13, "rgba(240, 240, 240, 1)"],
            [16, "rgba(217, 217, 217, 1)"],
            [17, "rgba(217, 217, 217, 1)"]
          ]
        },
        "line-width": {
          "base": 1.4,
          "stops": [
            [6, 0.5],
            [20, 30]
          ]
        }
      }
    },
    {
      "id": "road_major_motorway",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        ["==", "$type", "LineString"],
        ["==", "class", "motorway"]
      ],
      "layout": { "line-cap": "round", "line-join": "round" },
      "paint": {
        "line-color": {
          "stops": [
            [12, "rgba(239, 239, 239, 1)"],
            [13, "rgba(240, 240, 240, 1)"]
          ]
        },
        "line-offset": 0,
        "line-width": {
          "base": 1.4,
          "stops": [
            [8, 1],
            [16, 7],
            [17, 15]
          ]
        }
      }
    },
    {
      "id": "railway-transit",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        ["==", "class", "transit"],
        ["!=", "brunnel", "tunnel"]
      ],
      "layout": { "visibility": "visible" },
      "paint": {
        "line-color": {
          "stops": [
            [1, "rgba(195, 195, 195, 1)"],
            [18, "rgba(195, 195, 195, 0.5)"]
          ]
        },
        "line-opacity": {
          "base": 1,
          "stops": [
            [11, 0],
            [16, 1]
          ]
        },
        "line-width": {
          "stops": [
            [16, 1],
            [17, 5]
          ]
        },
        "line-dasharray": {
          "stops": [
            [16, [3]],
            [17, [0.2, 0.3]]
          ]
        }
      }
    },
    {
      "id": "railway",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": ["==", "class", "rail"],
      "layout": { "visibility": "visible" },
      "paint": {
        "line-color": {
          "stops": [
            [1, "rgba(168, 168, 168, 1)"],
            [17, "rgba(168, 168, 168, 0.2)"]
          ]
        },
        "line-opacity": {
          "base": 1,
          "stops": [
            [11, 0],
            [16, 1]
          ]
        },
        "line-width": {
          "stops": [
            [16, 1],
            [17, 8]
          ]
        },
        "line-dasharray": {
          "stops": [
            [16, [0.25]],
            [17, [0.15, 0.2]]
          ]
        }
      }
    },
    {
      "id": "building",
      "type": "fill",
      "source": "openmaptiles",
      "source-layer": "building",
      "layout": { "visibility": "visible" },
      "paint": {
        "fill-antialias": true,
        "fill-color": {
          "stops": [
            [16, "rgba(239, 239, 239, 1)"],
            [17, "rgba(221, 221, 221, 1)"]
          ]
        },
        "fill-opacity": {
          "base": 1,
          "stops": [
            [13, 0],
            [15, 1]
          ]
        },
        "fill-outline-color": {
          "stops": [
            [6, "rgba(212, 177, 146, 0)"],
            [15, "rgba(255, 255, 255, 1)"]
          ]
        }
      }
    },
    {
      "id": "bridge_minor case",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        ["==", "$type", "LineString"],
        ["==", "brunnel", "bridge"],
        ["==", "class", "minor_road"]
      ],
      "layout": { "line-cap": "butt", "line-join": "miter" },
      "paint": {
        "line-color": "rgba(254, 254, 254, 1)",
        "line-gap-width": {
          "base": 1.55,
          "stops": [
            [4, 0.25],
            [20, 30]
          ]
        },
        "line-width": {
          "base": 1.6,
          "stops": [
            [12, 0.5],
            [20, 10]
          ]
        }
      }
    },
    {
      "id": "bridge_major case",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        ["==", "$type", "LineString"],
        ["==", "brunnel", "bridge"],
        ["in", "class", "primary", "secondary", "tertiary", "trunk"]
      ],
      "layout": { "line-cap": "butt", "line-join": "miter" },
      "paint": {
        "line-color": {
          "stops": [
            [12, "rgba(254, 254, 254, 1)"],
            [13, "rgba(240, 240, 240, 1)"],
            [14, "rgba(254, 254, 254, 1)"]
          ]
        },
        "line-gap-width": {
          "base": 1.55,
          "stops": [
            [4, 0.25],
            [20, 30]
          ]
        },
        "line-width": {
          "base": 1.6,
          "stops": [
            [12, 0.5],
            [21, 10]
          ]
        },
        "line-opacity": 1
      }
    },
    {
      "id": "bridge_minor",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        ["==", "$type", "LineString"],
        ["==", "brunnel", "bridge"],
        ["==", "class", "minor_road"]
      ],
      "layout": { "line-cap": "round", "line-join": "round" },
      "paint": {
        "line-color": {
          "stops": [
            [12, "rgba(239, 239, 239, 1)"],
            [13, "rgba(201, 201, 201, 1)"]
          ]
        },
        "line-width": {
          "base": 1.55,
          "stops": [
            [4, 0.25],
            [20, 30]
          ]
        }
      }
    },
    {
      "id": "bridge_major",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        ["==", "$type", "LineString"],
        ["==", "brunnel", "bridge"],
        ["in", "class", "primary", "secondary", "tertiary", "trunk"]
      ],
      "layout": { "line-cap": "round", "line-join": "round" },
      "paint": {
        "line-color": {
          "stops": [
            [12, "rgba(217, 217, 217, 1)"],
            [13, "rgba(217, 217, 217, 1)"],
            [16, "rgba(201, 201, 201, 1)"],
            [17, "rgba(217, 217, 217, 1)"]
          ]
        },
        "line-width": {
          "base": 1.4,
          "stops": [
            [1, 0.5],
            [16, 4],
            [17, 8.5],
            [18, 22]
          ]
        }
      }
    },
    {
      "id": "admin_sub",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "boundary",
      "filter": ["in", "admin_level", 4, 6, 8],
      "layout": { "visibility": "visible" },
      "paint": {
        "line-color": "hsla(0, 0%, 60%, 0.5)",
        "line-dasharray": [2, 1]
      }
    },
    {
      "id": "admin_country",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "boundary",
      "filter": [
        "all",
        ["<=", "admin_level", 2],
        ["==", "$type", "LineString"]
      ],
      "layout": { "line-cap": "round", "line-join": "round" },
      "paint": {
        "line-color": "hsl(0, 0%, 60%)",
        "line-width": {
          "base": 1.3,
          "stops": [
            [3, 0.5],
            [22, 15]
          ]
        }
      }
    },
    {
      "id": "poi_label",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "poi",
      "minzoom": 14,
      "filter": ["all", ["==", "$type", "Point"], ["==", "rank", 1]],
      "layout": {
        "icon-size": 1,
        "text-anchor": "top",
        "text-field": "{name:latin}\n{name:nonlatin}",
        "text-font": ["Noto Sans Regular"],
        "text-max-width": 8,
        "text-offset": [0, 0.5],
        "text-size": 14
      },
      "paint": {
        "text-color": "rgba(136, 136, 136, 1)",
        "text-halo-blur": 1,
        "text-halo-color": "rgba(255,255,255,0.75)",
        "text-halo-width": 1
      }
    },
    {
      "id": "airport-label",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "aerodrome_label",
      "minzoom": 10,
      "filter": ["all", ["has", "iata"]],
      "layout": {
        "icon-size": 1,
        "text-anchor": "top",
        "text-field": "{name:latin}\n{name:nonlatin}",
        "text-font": ["Noto Sans Regular"],
        "text-max-width": 8,
        "text-offset": [0, 0.5],
        "text-size": 11,
        "visibility": "visible"
      },
      "paint": {
        "text-color": "#666",
        "text-halo-blur": 1,
        "text-halo-color": "rgba(255,255,255,0.75)",
        "text-halo-width": 1
      }
    },
    {
      "id": "road_major_label",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "transportation_name",
      "filter": ["==", "$type", "LineString"],
      "layout": {
        "visibility": "visible",
        "symbol-placement": "line",
        "text-field": "{name:latin} {name:nonlatin}",
        "text-font": ["Noto Sans Regular"],
        "text-letter-spacing": 0.1,
        "text-rotation-alignment": "map",
        "text-size": {
          "base": 1.4,
          "stops": [
            [10, 8],
            [20, 14]
          ]
        },
        "text-transform": "uppercase"
      },
      "paint": {
        "text-color": {
          "stops": [
            [6, "rgba(136, 136, 136, 1)"],
            [17, "rgba(136, 136, 136, 1)"]
          ]
        },
        "text-halo-color": "hsl(0, 0%, 100%)",
        "text-halo-width": 2
      }
    },
    {
      "id": "place_label_other",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "place",
      "minzoom": 8,
      "filter": [
        "all",
        ["==", "$type", "Point"],
        ["!in", "class", "city", "state", "country", "continent"]
      ],
      "layout": {
        "text-anchor": "center",
        "text-field": "{name:latin}\n{name:nonlatin}",
        "text-font": ["Noto Sans Regular"],
        "visibility": "visible",
        "text-max-width": 6,
        "text-size": {
          "stops": [
            [11, 10],
            [12, 14]
          ]
        }
      },
      "paint": {
        "text-color": {
          "stops": [
            [12, "rgba(170, 170, 170, 1)"],
            [13, "rgba(136, 136, 136, 1)"]
          ]
        },
        "text-halo-blur": 0,
        "text-halo-color": "hsl(0, 0%, 100%)",
        "text-halo-width": 2
      }
    },
    {
      "id": "place_label_city",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "place",
      "maxzoom": 16,
      "filter": ["all", ["==", "$type", "Point"], ["==", "class", "city"]],
      "layout": {
        "text-field": "{name:latin}\n{name:nonlatin}",
        "text-font": ["Noto Sans Regular"],
        "text-max-width": 10,
        "visibility": "visible",
        "text-size": {
          "stops": [
            [3, 12],
            [8, 16]
          ]
        }
      },
      "paint": {
        "text-color": "rgba(136, 136, 136, 1)",
        "text-halo-blur": 0,
        "text-halo-color": "hsla(0, 0%, 100%, 0.75)",
        "text-halo-width": 2
      }
    },
    {
      "id": "country_label-other",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "place",
      "maxzoom": 12,
      "filter": [
        "all",
        ["==", "$type", "Point"],
        ["==", "class", "country"],
        ["!has", "iso_a2"]
      ],
      "layout": {
        "text-field": "{name:latin}",
        "text-font": ["Noto Sans Regular"],
        "text-max-width": 10,
        "text-size": {
          "stops": [
            [3, 12],
            [8, 22]
          ]
        },
        "visibility": "visible"
      },
      "paint": {
        "text-color": "hsl(0, 0%, 13%)",
        "text-halo-blur": 0,
        "text-halo-color": "rgba(255,255,255,0.75)",
        "text-halo-width": 2
      }
    },
    {
      "id": "country_label",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "place",
      "maxzoom": 12,
      "filter": [
        "all",
        ["==", "$type", "Point"],
        ["==", "class", "country"],
        ["has", "iso_a2"]
      ],
      "layout": {
        "text-field": "{name:latin}",
        "text-font": ["Noto Sans Bold"],
        "text-max-width": 10,
        "text-size": {
          "stops": [
            [3, 12],
            [8, 22]
          ]
        },
        "visibility": "visible"
      },
      "paint": {
        "text-color": "hsl(0, 0%, 13%)",
        "text-halo-blur": 0,
        "text-halo-color": "rgba(255,255,255,0.75)",
        "text-halo-width": 2
      }
    }
  ],
  "id": "basic"
}
