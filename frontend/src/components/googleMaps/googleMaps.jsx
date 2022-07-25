import React, { Component } from "react";
import ReactStreetview from "react-streetview";

class GoogleMapsStreetView extends React.Component {
  render() {
   const { latitude, longitude } = this.props;

    const googleMapsApiKey = "AIzaSyBGJHXlpUiFcp1N5AV4FMHpuwpYC9xpkVM";

    const streetViewPanoramaOptions = {
      position: { lat: latitude, lng: longitude },
      pov: { heading: 100, pitch: 0 },
      zoom: 1,
      addressControl: false,
      showRoadLabels: false,
      zoomControl: false
    };

    return (
      <div
        style={{
          width: "100%",
          height: "450px",
          backgroundColor: "#eeeeee",
          
        
        }}
      >
        <ReactStreetview apiKey={googleMapsApiKey}
          streetViewPanoramaOptions={streetViewPanoramaOptions}
        />
      </div>
    );
  }
}

export default GoogleMapsStreetView;
