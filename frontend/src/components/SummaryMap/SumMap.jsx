import React from "react";
import { GOOGLE_API_ } from "../constants";
import { compose, withProps } from "recompose";
import { withGoogleMap, GoogleMap, Marker,Polyline } from "react-google-maps";



const MySummaryComponent = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API_}&v=3.exp&libraries=geometry,drawing,places`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100%` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  
  withGoogleMap
)((props) => (
    
  <GoogleMap
    defaultZoom={2}
    defaultCenter={{ lat: props.centLat, lng: props.centLng }}
  >
    {props.isMarkerShown && <Marker position={props.pathCoordinates[0]} key="marker_1"
    
    icon={{

        url:"https://cdn-icons-png.flaticon.com/512/219/219969.png",

        anchor: new google.maps.Point(10, 10),

        scaledSize: new google.maps.Size(25, 25)

    }}
    />}
        {props.isMarkerShown && <Marker position={props.pathCoordinates[1]} key="marker_2"
    
    icon={{

        url:"https://cdn-icons-png.flaticon.com/512/2107/2107961.png",

        anchor: new google.maps.Point(0, 20),

        scaledSize: new google.maps.Size(25, 25)

    }}
    />}
    <Polyline 
  path={props.pathCoordinates} 
  options={{ 
  strokeColor: '#000000',
  strokeOpacity: 1,
  strokeWeight: 2,
  icons: [{ 
    icon: "hello",
    offset: '0',
    repeat: '10px'
  }],
}}
/>

  </GoogleMap>

));

export default MySummaryComponent;
