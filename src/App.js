import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import About from "./components/Home/About/About";
import Contact from "./components/Contact/Contact";
import {
  MapContainer,
  TileLayer,
  useMap,
} from "https://cdn.esm.sh/react-leaflet";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="Contact" element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
