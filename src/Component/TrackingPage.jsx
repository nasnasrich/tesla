import React, { useState, useEffect, useRef } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Polyline,
  Popup,
  CircleMarker,
  useMap,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "./TrackingPage.css";

import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

/* Leaflet icon fix */
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

/* 🔒 ADMIN DATA — Update anytime */
const shipmentsData = {
  "30enfb5u1n": {
    status: "On Hold",     /*In Transit or On Hold*/
    dispatchCountry: "United States",
    destinationCountry: "Brazil",

    packageInfo: {
      description: "Electronic equipment",
      weight: "12 kg",
      quantity: "2 boxes",
      shippingType: "Air Freight",
      notes: "Handle with care – Fragile",
    },

    receiver: {
      name: "Carlos Silva",
      email: "carlos.silva@email.com",
      phone: "+55 21 99887 6655",
      country: "Brazil",
      address: "Rua das Palmeiras 210, Rio de Janeiro, Brazil",
    },

    route: [
      { country: "Brazil", coords: [-14.235, -51.9253] },
    ],

    history: [
      {
        date: "2025-01-10",
        time: "09:15",
        location: "San Francisco, USA",
        status: "Shipment Created",
        updatedBy: "Admin",
        remarks: "Package registered",
      },
    ],
  },
};

/* 🔊 SOUND ENGINE — GUARANTEED */
const useBeep = () => {
  const ctxRef = useRef(null);
  const play = (freq = 800) => {
    if (!ctxRef.current) {
      ctxRef.current = new (window.AudioContext || window.webkitAudioContext)();
    }
    const osc = ctxRef.current.createOscillator();
    osc.frequency.value = freq;
    osc.connect(ctxRef.current.destination);
    osc.start();
    setTimeout(() => osc.stop(), 120);
  };
  return play;
};

/* 🧠 Map controller */
const MapController = ({ points }) => {
  const map = useMap();
  useEffect(() => {
    setTimeout(() => {
      map.invalidateSize();
      map.fitBounds(points, { padding: [60, 60] });
    }, 200);
  }, [map, points]);
  return null;
};

const TrackingPage = () => {
  const [code, setCode] = useState("");
  const [shipment, setShipment] = useState(null);
  const [index, setIndex] = useState(0);
  const [error, setError] = useState("");

  const moveIntervalRef = useRef(null);
  const beepIntervalRef = useRef(null);
  const beep = useBeep();

  const handleTrack = () => {
    const data = shipmentsData[code.toLowerCase()];

    if (!data) {
      setShipment(null);
      setError("❌ Incorrect tracking code. Please check and try again.");
      return;
    }

    setError("");
    setShipment(data);
    setIndex(0);
  };

  /* 🔔 BEEP EVERY SECOND UNTIL PAGE EXIT */
  useEffect(() => {
    beepIntervalRef.current = setInterval(() => {
      if (!shipment) return;
      shipment.status === "On Hold" ? beep(400) : beep(850);
    }, 1000);

    return () => clearInterval(beepIntervalRef.current);
  }, [shipment, beep]);

  /* 🚚 MOVEMENT LOGIC */
  useEffect(() => {
    if (!shipment) return;

    clearInterval(moveIntervalRef.current);

    moveIntervalRef.current = setInterval(() => {
      if (shipment.status !== "In Transit") return;

      setIndex((prev) => {
        if (prev >= shipment.route.length - 1) return prev;
        return prev + 1;
      });
    }, 3000);

    return () => clearInterval(moveIntervalRef.current);
  }, [shipment]);

  if (!shipment) {
    return (
      <div className="smart-tracking-page">
        <div className="smart-panel">
          <h1>Shipment Tracking</h1>

          <div className="tracking-guide">
            <p>
              Enter your tracking number below to see the real-time status of your shipment.
            </p>
          </div>

          {error && <p className="tracking-error">{error}</p>}

          <div className="track-input">
            <input
              placeholder="Enter tracking reference"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
            <button onClick={handleTrack}>Track</button>
          </div>
        </div>
      </div>
    );
  }

  const current = shipment.route[index];

  return (
    <div className="smart-tracking-page">
      <div className="smart-panel">
        <h1>Shipment Tracking</h1>

        <div className="tracking-guide">
          <p>
            Your shipment is being tracked live. The map shows the current country of the shipment.
            Check back anytime to see updates. 
            {/* If on hold, a warning icon appears and beeping continues. */}
          </p>
        </div>

        <div className="info-card">
          <h3>Receiver Information</h3>
          <p><strong>Name:</strong> {shipment.receiver.name}</p>
          <p><strong>Email:</strong> {shipment.receiver.email}</p>
          <p><strong>Phone:</strong> {shipment.receiver.phone}</p>
          <p><strong>Country:</strong> {shipment.receiver.country}</p>
          <p><strong>Address:</strong> {shipment.receiver.address}</p>
        </div>

        <div className="info-card">
          <h3>Package Information</h3>
          <p><strong>Description:</strong> {shipment.packageInfo.description}</p>
          <p><strong>Weight:</strong> {shipment.packageInfo.weight}</p>
          <p><strong>Quantity:</strong> {shipment.packageInfo.quantity}</p>
          <p><strong>Shipping Type:</strong> {shipment.packageInfo.shippingType}</p>
          <p><strong>Notes:</strong> {shipment.packageInfo.notes}</p>
        </div>

        <div className="info-card">
          <h3>Shipment History</h3>
          {shipment.history.map((h, i) => (
            <div key={i} className="history-entry">
              <p><strong>Date:</strong> {h.date} <strong>Time:</strong> {h.time}</p>
              <p><strong>Location:</strong> {h.location}</p>
              <p><strong>Status:</strong> {h.status}</p>
              <p><strong>Updated By:</strong> {h.updatedBy}</p>
              <p><strong>Remarks:</strong> {h.remarks}</p>
              <hr />
            </div>
          ))}
        </div>

        {/* ✅ FIXED MAP */}
        <div className="smart-map-wrapper">
          <MapContainer className="smart-map">
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <MapController points={shipment.route.map(r => r.coords)} />

            <Polyline
              positions={shipment.route.slice(0, index + 1).map(r => r.coords)}
              color="#007bff"
              weight={5}
            />

            <CircleMarker
              center={current.coords}
              radius={18}
              className={`smart-pulse ${shipment.status === "On Hold" ? "hold" : ""}`}
            />

            <Marker position={current.coords}>
              <Popup>
                {shipment.status === "On Hold" ? "⚠️ ON HOLD" : "In Transit"}<br />
                {current.country}
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default TrackingPage;
