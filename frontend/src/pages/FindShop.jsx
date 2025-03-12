import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const branches = [
  { id: 1, name: "FMF Bakery Helsinki", lat: 60.1695, lng: 24.9354 },
  { id: 2, name: "FMF Bakery Tampere", lat: 61.4978, lng: 23.7610 },
  { id: 3, name: "FMF Bakery Vantaa", lat: 60.2941, lng: 25.0410 },
];

const FindShop = () => {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <h2 style={{ textAlign: "center", marginBottom: "10px" }}>Find Our Shops</h2>
      <MapContainer center={[60.1695, 24.9354]} zoom={7} style={{ height: "90vh", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {branches.map((branch) => (
          <Marker key={branch.id} position={[branch.lat, branch.lng]}>
            <Popup>{branch.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default FindShop;
