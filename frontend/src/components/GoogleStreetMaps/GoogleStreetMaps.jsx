import React, { Component } from "react";
import ReactStreetview from "react-streetview";

class GoogleMapsStreetView extends React.Component {
  render() {
    const googleMapsApiKey = "AIzaSyBGJHXlpUiFcp1N5AV4FMHpuwpYC9xpkVM";

    const streetViewPanoramaOptions = {
      position: { lat: 46.9171876, lng: 17.8951832 },
      pov: { heading: 100, pitch: 0 },
      zoom: 1,
      addressControl: false,
      showRoadLabels: false,
      zoomControl: false
    };

    return (
      <div
        style={{
          width: "800px",
          height: "450px",
          backgroundColor: "#eeeeee"
        }}
      >
        <ReactStreetview
          apiKey={googleMapsApiKey}
          streetViewPanoramaOptions={streetViewPanoramaOptions}
        />
      </div>
    );
  }
}

export default GoogleMapsStreetView;
