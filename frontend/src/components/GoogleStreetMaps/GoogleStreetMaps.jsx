import React, { Component } from "react";
import ReactStreetview from "react-streetview";
import { GOOGLE_API_ } from "../constants";
import "./GoogleStreetMaps.css"

class GoogleMapsStreetView extends React.Component {
  render() {
    const mapStyles = {
        width: '100%',
        height: '86.2vh',
        backgroundColor: "#eeeeee"
      };
 

    const streetViewPanoramaOptions = {
      position: { lat: 46.9171876, lng: 17.8951832 },
      pov: { heading: 100, pitch: 0 },
      zoom: 1,
      addressControl: false,
      showRoadLabels: false,
      zoomControl: false
    };

    return (
        <div className="google">
    <div
        style={mapStyles}
      >
        <ReactStreetview
          apiKey={GOOGLE_API_}
          streetViewPanoramaOptions={streetViewPanoramaOptions}
        />
      </div>

        </div>
    
    );
  }
}

export default GoogleMapsStreetView;
