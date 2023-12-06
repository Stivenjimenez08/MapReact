import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./Map.css";

const Map = () => {
  const position = [
    { lat: "6.2500", lng: "-75.5667" },
    { lat: "6.3000", lng: "-75.6000" },
    { lat: "6.2700", lng: "-75.5500" },
    { lat: "6.3200", lng: "-75.5800" },
    { lat: "6.2800", lng: "-75.5900" },
  ];

  return (
    <>
      <h1>Mapa</h1>
      <MapContainer center={position[0]} zoom={10} scrollWheelZoom={true} className="mapa">

        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={position[0]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </>
  );
};

export default Map;
