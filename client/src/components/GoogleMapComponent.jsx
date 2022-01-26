import React from "react";
import { useState, useEffect } from "react";
import "./GoogleMapComponent.scss";

// import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import { useLoadScript, GoogleMap, Marker, InfoWindow } from '@react-google-maps/api';

import usePlacesAutocomplete, {
  getGeocode, getLatLng
} from "use-places-autocomplete";

import { Combobox, ComboboxInput, ComboboxPopover, ComboboxList, ComboboxOption } from "@reach/combobox";

import "@reach/combobox/styles.css";

export default function GoogleMapComponent(props) {

  const { gasStations } = props;
  // const [markers, setMarkers] = useState([]);
  const [selected, setSelected] = useState(null);

  const gasStationMarkers = gasStations.map(x => {
    let marker = {};
    marker["lat"] = parseFloat(x.lat);
    marker["lng"] = parseFloat(x.lng);
    // setMarkers(prev => ([...prev, {lat: parseFloat(x.lat), lng: parseFloat(x.lng)}]));
    return marker;
  });
  const markersList = gasStationMarkers.map(marker => {
    if (marker["lat"] && marker["lng"]) {
      // setMarkers([...prev, {lat: marker["lat"], lng: marker["lng"]}])
      return (
        <Marker
          key={`${marker.lat}-${marker.lng}`}
          position={{ lat: marker["lat"], lng: marker["lng"] }}
        />
      )
    }
  }
  )


  console.log("GASSTATIONS=======", gasStations)
  console.log("GASSTATIONSMARKERS=======", markersList)

  const libraries = ["places"];
  const mapContainerStyle = {
    // Set the map to 100 so it's 100% inside the container
    width: "45rem",
    height: "30rem"
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

  // Set up a panTo function used to zoom to the location given lat and lng
  const panTo = React.useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(19);
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
    //   // googleMapURL=""
    //   loadingElement={<div style={{ height: `100%` }} />}
    //   containerElement={<div style={{ height: `400px` }} />}
    //   mapElement={<div style={{ height: `100%` }} />}
    // />
    <div>

      <Search panTo={panTo} />


      {markersList && <GoogleMap
        id="map"
        mapContainerStyle={mapContainerStyle}
        zoom={13}
        center={center}
        options={options}
        onLoad={onMapLoad}

      >
        {markersList}

        {selected ? (
          <InfoWindow
            position={{ lat: selected.lat, lng: selected.lng }}
            onCloseClick={() => {
              setSelected(null);
            }}
          >
            <div>
              hello
            </div>
          </InfoWindow>
        ) : null}


      </GoogleMap>}

    </div>
  );
}

function Search({ panTo }) {
  // 
  const { ready, value, suggestions: { status, data }, setValue, clearSuggestions } = usePlacesAutocomplete({
    requestOptions: {
      location: { lat: () => 43.653225, lng: () => -79.383186 },
      // Radius in kilometers
      radius: 200 * 1000
    }
  });

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  const handleSelect = async (address) => {
    setValue(address, false);
    clearSuggestions();

    try {
      const results = await getGeocode({ address });
      const { lat, lng } = await getLatLng(results[0]);
      panTo({ lat, lng });
    } catch (error) {
      console.log("😱 Error: ", error);
    }
  };

  return (
    <div className="search mid">
      <Combobox className=""
        onSelect={handleSelect}
      >
        {/* Search box input listener */}
        <ComboboxInput
          value={value}
          onChange={handleInput}
          disabled={!ready}
          placeholder="Enter an address"
        />

        {/* Use ComboboxPopover to show suggestions in search bar */}
        <ComboboxPopover>
          <ComboboxList>
            {status === "OK" &&
              data.map(({ id, description }) => (
                <ComboboxOption key={id} value={description} />
              ))}
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>
    </div>
  )

}