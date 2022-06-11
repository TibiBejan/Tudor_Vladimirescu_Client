import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function Map({ Latitude, Longitude, PopupText }) {
  return (
    <MapContainer center={[Latitude, Longitude]} zoom={18} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[Latitude, Longitude]}>
          <Popup>
            {PopupText}
          </Popup>
        </Marker>
    </MapContainer>
  )
}

export default Map;