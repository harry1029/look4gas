import { useState, useEffect } from "react";

// import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import { useLoadScript, GoogleMap, Marker, InfoWindow } from '@react-google-maps/api';

import usePlacesAutocomplete, {
  getGeocode, getLatLng
} from "use-places-autocomplete";

import { Combobox, ComboboxInput, ComboboxPopover, ComboboxList, ComboboxOption } from "@reach/combobox";

export default function GoogleMapComponent(props) {

  // const google = window.google;

  const [markers, setMarkers] = useState([]);
  const [selected, setSelected] = useState(null);

  const libraries = ["places"];
  const mapContainerStyle = {
    // Set the map to 100 so it's 100% inside the container
    width: "100vw",
    height: "100vh"
  }

  const center = {
    lat: 43.653225,
    lng: -79.383186
  }

  const options = {
    disableDefaultUI: true,
    zoomControl: true,
  }

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries
  });

  // Save map state as ref for other function use later without needing to call api
  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);


  if (loadError) return "Error Loading maps";
  if (!isLoaded) return "Loading map";

  // const MapWithAMarker = withScriptjs(withGoogleMap(props =>
  //   <GoogleMap
  //     defaultZoom={8}
  //     defaultCenter={{ lat: -34.397, lng: 150.644 }}
  //   >
  //     <Marker
  //       position={{ lat: -34.397, lng: 150.644 }}
  //     />
  //   </GoogleMap>
  // ));

  // function initMap() {
  //   const myLatlng = { lat: -25.363, lng: 131.044 };
  //   const map = new google.maps.Map(document.getElementById("map"), {
  //     zoom: 4,
  //     center: myLatlng,
  //   });
  //   const marker = new google.maps.Marker({
  //     position: myLatlng,
  //     map,
  //     title: "Click to zoom",
  //   });

  //   map.addListener("center_changed", () => {
  //     // 3 seconds after the center of the map has changed, pan back to the
  //     // marker.
  //     window.setTimeout(() => {
  //       map.panTo(marker.getPosition());
  //     }, 3000);
  //   });
  //   marker.addListener("click", () => {
  //     map.setZoom(8);
  //     map.setCenter(marker.getPosition());
  //   });
  // }

  return (
    // <MapWithAMarker
    //   // googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDuz9pD3RmMX_uvJfqiDzQwNIZJWCYQVck&v=3.exp&libraries=geometry,drawing,places"
    //   loadingElement={<div style={{ height: `100%` }} />}
    //   containerElement={<div style={{ height: `400px` }} />}
    //   mapElement={<div style={{ height: `100%` }} />}
    // />
    <div>

      <Search />


      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={15}
        center={center}
        options={options}
        onLoad={onMapLoad}

      >

        {selected ? (
          <InfoWindow
            position={{ lat: selected.lat, lng:selected.lng }}
            onCloseClick={() => {
              setSelected(null);
            }}
          >
            <div>
              hello
            </div>
          </InfoWindow>
        ) : null }


      </GoogleMap>

    </div>
  );
}