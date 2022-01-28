import React from "react";
import {
  TileLayer,
  Marker,
  Popup,
  Tooltip,
  MapContainer as LeafletMap,
} from "react-leaflet";
import "./Maps.css";
import "leaflet/dist/leaflet.css";
import { iconElkawther } from "./IconMarker";
import logoImg from "../../../assets/img/logo-web-black.png";
const Map = () => {
  const position = [30.9720437, 31.1819644];
  const zoom = 15;
  return (
    <div className="map">
      <LeafletMap center={position} zoom={zoom}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={iconElkawther}>
          <Popup>
            <div className="info-container">
              <div className="info__logo">
                <img src={logoImg} alt="logo" />
              </div>
              <div className="info__name">ELKAWTHER MARKET</div>
              <div className="info__address">
                Address: 3 Al Elem Wal Iman, El Mahalla El Kubra, Gharbia
                Governorate, Egypt
              </div>
            </div>
          </Popup>
          <Tooltip>ELKAWTHER MARKET</Tooltip>
        </Marker>
      </LeafletMap>
    </div>
  );
};

export default Map;
