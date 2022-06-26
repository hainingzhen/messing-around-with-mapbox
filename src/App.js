import './App.css';
import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax



function App() {

  mapboxgl.accessToken = "pk.eyJ1IjoiaGh6aGVuIiwiYSI6ImNsNHZidjFsejB3dHAzZHBoMTdlbHplM2kifQ.h1LjuVXTUf1y1SlzeRJezg";

  console.log(mapboxgl.accessToken);

  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);
  
  console.log(mapContainer.current)

  useEffect(() => {
      if (map.current) return; // initialize map only once
      map.current = new mapboxgl.Map({
          container: mapContainer.current,
          style: 'mapbox://styles/mapbox/streets-v11',
          center: [lng, lat],
          zoom: zoom
      });
  });

  return (
    <div className="App">
        MapBox
        <div ref={mapContainer} className="map-container" />
    </div>
  );
}

export default App;
