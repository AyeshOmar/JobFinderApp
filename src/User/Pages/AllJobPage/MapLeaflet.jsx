import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MapLeaflet = ({jobs}) => {


  return (
    <MapContainer center={[36.8065, 10.1815]} zoom={7} className="h-full w-full">
        <TileLayer
          url={`https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}`}
          attribution="&copy; Google"
        />

        {jobs.map((job, index) => (
          job.lat && job.lng && (
            <Marker key={index} position={[job.lat, job.lng]}>
              <Popup>
                <strong>{job.company}</strong> <br />
                {job.position} <br />
                {job.location}
              </Popup>
            </Marker>
          )
        ))}
    </MapContainer>

  );
};

export default MapLeaflet;
