import React from "react";

import L from "leaflet";

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

export const MapDemo = ({ centre, items }) => {
  items.forEach((item, i) => console.log([item, i]));
  return (
    <MapContainer center={centre} zoom={15} scrollWheelZoom={true}>
      <a href="https://www.flaticon.com/free-icons/ship" title="ship icons">
        Ship icons created by JunGSa - Flaticon
      </a>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors<br/><a href="https://www.flaticon.com/free-icons/ship" title="ship icons">Ship icons created by JunGSa - Flaticon</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {items.map((item, i) => (
        <Marker
          key={"item" + i}
          position={item.position}
          onClick={() => {}}
          icon={L.icon(item.icon)}
        >
          <Popup>{item.label}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};
