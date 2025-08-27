import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
const Map = () => {
  return (
    <div className="w-full h-[350px] z-0"> 
      <MapContainer
        center={[36.8065, 10.1815]} // Exemple : Los Angeles
        zoom={12}
        className="h-full w-full rounded-lg shadow"
      >
        <TileLayer
          url="https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}" // m = normal, y = satellite
          attribution="&copy; Google Maps"
        />
        <Marker position={[36.8065, 10.1815]}>
          <Popup>
            <strong>1363 W Sunset Blvd</strong> <br />
            Los Angeles, CA 90026, USA
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}

export default Map
