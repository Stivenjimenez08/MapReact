import { MapContainer, TileLayer, Popup, Polygon} from "react-leaflet";
import {locations} from '../data/locations.json'
import ListMarkers from "./ListMarkers";
import React from "react";
import "leaflet/dist/leaflet.css";
import "./Map.css";

const Map = () => {
  
  const position = [6.2500, -75.5667]
  
  const polygon = [
    [ 6.2500, -75.5667],
    [ 6.3000, -75.6000],
    [ 6.2700, -75.5500],
  ]
  const blackOptions = { color: 'black' }

  return (
    <>
      <h1>Mapa</h1>
      <MapContainer center={position} zoom={10} scrollWheelZoom={true} className="mapa">

        <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        <ListMarkers locations={locations} >
        <Polygon pathOptions={blackOptions} positions={polygon} />
          <Popup/>
        </ListMarkers>
      </MapContainer>
    </>
  );
};

export default Map;
