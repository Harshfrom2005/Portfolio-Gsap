import React, { useEffect, useRef, useState } from "react";
import "./Contact.scss";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import emailjs from "@emailjs/browser";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const Contact = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const refForm = useRef();

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 2000);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_on2rfqh",
        "template_7sz420e",
        refForm.current,
        "3TubDLwvQSRz0Fgga"
      )
      .then(
        () => {
          alert("Email sent!");
          window.location.reload(false);
        },
        () => {
          alert("Email failed to send!, Please Try Again");
        }
      );
  };

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["C", "o", "n", "t", "a", "c", "t", " ", "M", "e"]}
              idx={15}
            />
          </h1>

          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input
                    name="name"
                    placeholder="Your Name"
                    type="text"
                    required
                  />
                </li>
                <li className="half">
                  <input
                    name="email"
                    placeholder="Email"
                    type="email"
                    required
                  />
                </li>
                <li>
                  <input placeholder="Subject" type="text" required />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <p
                  style={{
                    fontSize: "17px",
                    color: "#aa96e3",
                    fontWeight: "bold",
                    width: "fit-content",
                    position: "relative",
                    opacity: 0,
                    animation: "fadeInUp 2s 2.8s forwards",
                  }}
                >
                  Avg. Response Time is 24 Hours
                </p>
                <li>
                  <input type="submit" value="SEND" className="flat-button" />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
      <div className="map-info">
        Harsh Mor,
        <br />
        India, Sector 20 Chandigarh,
        <br />
        Haryana,
        <br />
        <span>harshitmor72@gmail.com</span>
      </div>
      <div className="map-wrap">
        <MapContainer center={[44.96366, 19.61045]} zoom={13}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={[44.96366, 19.61045]}>
            <Popup>Harsh lives here</Popup>
          </Marker>
        </MapContainer>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Contact;
