import React from "react";
import { GOOGLE_API_ } from "../constants";
import { compose, withProps } from "recompose";
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import Woman from '../assets/woman.png'


const MyMapComponent = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API_}&v=3.exp&libraries=geometry,drawing,places`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100%` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  
  withGoogleMap
)((props) => (
    
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
    onClick={(ev) => {
        // console.log("useState",props.positions);
        // console.log("latitude : " ,ev.latLng.lat())
        // console.log("longitude : " ,ev.latLng.lng())
      props.setPositions({ lat: ev.latLng.lat(), lng: ev.latLng.lng()});
     
    }}
  >
    {props.isMarkerShown && <Marker position={props.positions} key="marker_1"
    
    icon={{

        url:"https://cdn-icons-png.flaticon.com/512/219/219969.png",

        anchor: new google.maps.Point(17, 46),

        scaledSize: new google.maps.Size(37, 37)

    }}
    />}
  </GoogleMap>
));

export default MyMapComponent;
