import React, { useState, useRef, useEffect } from "react";
import Map, { Popup, Source, Layer } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import "./App.css";

import trailDataOregon from "./Oregon.json";
import trailDataCalifornia from "./California.json";
import trailDataWashington from "./Washington.json";
import trailDataColorado from "./Colorado.json";
import trailDataUtah from "./Utah.json";
import trailDataArizona from "./Arizona.json";
import trailDataNevada from "./Nevada.json";
import trailDataIdaho from "./Idaho.json";
import trailDataMontana from "./Montana.json";
import trailDataWyoming from "./Wyoming.json";
import trailDataNewMexico from "./NewMexico.json";
import trailDataTexas from "./Texas.json";
import trailDataNorthCarolina from "./NorthCarolina.json";
import trailDataTennessee from "./Tennessee.json";
import trailDataVirginia from "./Virginia.json";
import trailDataWestVirginia from "./WestVirginia.json";
import trailDataNewYork from "./NewYork.json";
import trailDataMaine from "./Maine.json";
import trailDataNewHampshire from "./NewHampshire.json";
import trailDataVermont from "./Vermont.json";
import trailDataMassachusetts from "./Massachusetts.json";
import trailDataConnecticut from "./Connecticut.json";
import trailDataRhodeIsland from "./RhodeIsland.json";
import trailDataNewJersey from "./NewJersey.json";
import trailDataPennsylvania from "./Pennsylvania.json";
import trailDataMaryland from "./Maryland.json";
import trailDataDelaware from "./Delaware.json";
import trailDataOhio from "./Ohio.json";
import trailDataIndiana from "./Indiana.json";
import trailDataIllinois from "./Illinois.json";
import trailDataMichigan from "./Michigan.json";
import trailDataWisconsin from "./Wisconsin.json";
import trailDataMinnesota from "./Minnesota.json";
import trailDataIowa from "./Iowa.json";
import trailDataMissouri from "./Missouri.json";
import trailDataArkansas from "./Arkansas.json";
import trailDataLouisiana from "./Louisiana.json";
import trailDataMississippi from "./Mississippi.json";
import trailDataAlabama from "./Alabama.json";
import trailDataGeorgia from "./Georgia.json";
import trailDataFlorida from "./Florida.json";
import trailDataSouthCarolina from "./SouthCarolina.json";
import trailDataKentucky from "./Kentucky.json";
import trailDataNebraska from "./Nebraska.json";
import trailDataKansas from "./Kansas.json";
import trailDataOklahoma from "./Oklahoma.json";
import trailDataNorthDakota from "./NorthDakota.json";
import trailDataSouthDakota from "./SouthDakota.json";
import trailDataHawaii from "./Hawaii.json";
import trailDataAlaska from "./Alaska.json";
import trailDataDistrictogcolumbia from "./DistrictofColumbia.json";

const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;
const mapboxStyle = process.env.REACT_APP_MAPBOX_STYLE;

const stateDataMap = {
  Oregon: trailDataOregon,
  California: trailDataCalifornia,
  Washington: trailDataWashington,
  Colorado: trailDataColorado,
  Utah: trailDataUtah,
  Arizona: trailDataArizona,
  Nevada: trailDataNevada,
  Idaho: trailDataIdaho,
  Montana: trailDataMontana,
  Wyoming: trailDataWyoming,
  NewMexico: trailDataNewMexico,
  Texas: trailDataTexas,
  NorthCarolina: trailDataNorthCarolina,
  Tennessee: trailDataTennessee,
  Virginia: trailDataVirginia,
  WestVirginia: trailDataWestVirginia,
  NewYork: trailDataNewYork,
  Maine: trailDataMaine,
  NewHampshire: trailDataNewHampshire,
  Vermont: trailDataVermont,
  Massachusetts: trailDataMassachusetts,
  Connecticut: trailDataConnecticut,
  RhodeIsland: trailDataRhodeIsland,
  NewJersey: trailDataNewJersey,
  Pennsylvania: trailDataPennsylvania,
  Maryland: trailDataMaryland,
  Delaware: trailDataDelaware,
  Ohio: trailDataOhio,
  Indiana: trailDataIndiana,
  Illinois: trailDataIllinois,
  Michigan: trailDataMichigan,
  Wisconsin: trailDataWisconsin,
  Minnesota: trailDataMinnesota,
  Iowa: trailDataIowa,
  Missouri: trailDataMissouri,
  Arkansas: trailDataArkansas,
  Louisiana: trailDataLouisiana,
  Mississippi: trailDataMississippi,
  Alabama: trailDataAlabama,
  Georgia: trailDataGeorgia,
  Florida: trailDataFlorida,
  SouthCarolina: trailDataSouthCarolina,
  Kentucky: trailDataKentucky,
  Nebraska: trailDataNebraska,
  Kansas: trailDataKansas,
  Oklahoma: trailDataOklahoma,
  NorthDakota: trailDataNorthDakota,
  SouthDakota: trailDataSouthDakota,
  Hawaii: trailDataHawaii,
  Alaska: trailDataAlaska,
  DistrictofColumbia: trailDataDistrictogcolumbia,
};

const stateCoordinates = {
  Oregon: { latitude: 44.0, longitude: -120.0 },
  California: { latitude: 37.5, longitude: -119.5 },
  Washington: { latitude: 47.5, longitude: -120.5 },
  Colorado: { latitude: 39.0, longitude: -105.5 },
  Utah: { latitude: 39.4, longitude: -111.9 },
  Arizona: { latitude: 34.0, longitude: -111.0 },
  Nevada: { latitude: 39.0, longitude: -116.0 },
  Idaho: { latitude: 44.1, longitude: -114.7 },
  Montana: { latitude: 47.0, longitude: -109.6 },
  Wyoming: { latitude: 43.0, longitude: -107.5 },
  NewMexico: { latitude: 34.5, longitude: -106.0 },
  Texas: { latitude: 31.0, longitude: -99.0 },
  NorthCarolina: { latitude: 35.5, longitude: -79.0 },
  Tennessee: { latitude: 36.0, longitude: -86.5 },
  Virginia: { latitude: 37.5, longitude: -78.5 },
  WestVirginia: { latitude: 38.5, longitude: -80.5 },
  NewYork: { latitude: 43.0, longitude: -75.0 },
  Maine: { latitude: 45.0, longitude: -69.0 },
  NewHampshire: { latitude: 44.0, longitude: -71.5 },
  Vermont: { latitude: 44.0, longitude: -72.7 },
  Massachusetts: { latitude: 42.0, longitude: -71.8 },
  Connecticut: { latitude: 41.6, longitude: -72.7 },
  RhodeIsland: { latitude: 41.7, longitude: -71.5 },
  NewJersey: { latitude: 40.0, longitude: -74.5 },
  Pennsylvania: { latitude: 41.0, longitude: -77.5 },
  Maryland: { latitude: 39.0, longitude: -76.5 },
  Delaware: { latitude: 39.0, longitude: -75.5 },
  Ohio: { latitude: 40.5, longitude: -82.5 },
  Indiana: { latitude: 40.0, longitude: -86.5 },
  Illinois: { latitude: 40.0, longitude: -89.0 },
  Michigan: { latitude: 44.5, longitude: -85.5 },
  Wisconsin: { latitude: 44.5, longitude: -89.5 },
  Minnesota: { latitude: 46.0, longitude: -94.0 },
  Iowa: { latitude: 42.0, longitude: -93.5 },
  Missouri: { latitude: 38.5, longitude: -92.5 },
  Arkansas: { latitude: 35.0, longitude: -92.0 },
  Louisiana: { latitude: 31.0, longitude: -92.0 },
  Mississippi: { latitude: 32.7, longitude: -89.7 },
  Alabama: { latitude: 32.8, longitude: -86.7 },
  Georgia: { latitude: 32.0, longitude: -83.5 },
  Florida: { latitude: 27.5, longitude: -81.5 },
  SouthCarolina: { latitude: 33.9, longitude: -80.9 },
  Kentucky: { latitude: 37.8, longitude: -85.0 },
  Nebraska: { latitude: 41.5, longitude: -99.5 },
  Kansas: { latitude: 38.5, longitude: -98.0 },
  Oklahoma: { latitude: 35.5, longitude: -97.5 },
  NorthDakota: { latitude: 47.5, longitude: -100.5 },
  SouthDakota: { latitude: 44.5, longitude: -100.0 },
  Hawaii: { latitude: 20.8, longitude: -156.3 },
  Alaska: { latitude: 64.0, longitude: -152.0 },
  DistrictofColumbia: { latitude: 38.9, longitude: -77.0 },
};

const convertToGeoJSON = (data) => ({
  type: "FeatureCollection",
  features: data.map((trail) => ({
    type: "Feature",
    properties: {
      id: trail.Unique_Id,
      name: trail.Trail_Name,
      distance: trail.Distance,
      elevationGain: trail.Elevation_Gain,
      difficulty: trail.Difficulty,
      rating: trail.Rating,
      reviews: trail.Review_Count,
      url: trail.Url,
      image: trail.Cover_Photo,
      Est_Hike_Duration: trail.Est_Hike_Duration,
    },
    geometry: {
      type: "Point",
      coordinates: [trail.Longitude, trail.Latitude],
    },
  })),
});

const clusterLayer = {
  id: "clusters",
  type: "circle",
  source: "trails",
  filter: ["has", "point_count"],
  paint: {
    "circle-color": [
      "step",
      ["get", "point_count"],
      "#2b2b2b",
      10,
      "#2b2b2b",
      50,
      "#2b2b2b",
    ],
    "circle-radius": ["step", ["get", "point_count"], 15, 20, 20, 50, 25],
    "circle-stroke-width": 1,
    "circle-stroke-color": "#ffffff",
    "circle-opacity": 0.8,
  },
};

const clusterCountLayer = {
  id: "cluster-count",
  type: "symbol",
  source: "trails",
  filter: ["has", "point_count"],
  layout: {
    "text-field": "{point_count_abbreviated}",
    "text-font": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"],
    "text-size": 12,
  },
  paint: {
    "text-color": "#ffffff",
  },
};

const unclusteredPointLayer = {
  id: "unclustered-point",
  type: "circle",
  source: "trails",
  filter: ["!", ["has", "point_count"]],
  paint: {
    "circle-color": "#2b2b2b",
    "circle-radius": 8,
    "circle-stroke-width": 1,
    "circle-stroke-color": "#fff",
    "circle-opacity": 0.8,
  },
};

const legend = {
  position: "absolute",
  zIndex: 1000,
  bottom: 30,
  left: 10,
  padding: "10px",
  backgroundColor: "rgba(255, 255, 255, 0.8)",
  borderRadius: "5px",
  fontSize: "16px",
  lineHeight: "1.5",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  opacity: 0.9,
};

const App = () => {
  const [selectedState, setSelectedState] = useState("Oregon");
  const [geoJsonData, setGeoJsonData] = useState(
    convertToGeoJSON(stateDataMap[selectedState])
  );
  const [selectedTrail, setSelectedTrail] = useState(null);
  const mapRef = useRef(null);

  useEffect(() => {
    setGeoJsonData(convertToGeoJSON(stateDataMap[selectedState]));
    if (mapRef.current && mapRef.current.getMap) {
      const map = mapRef.current.getMap();
      const coordinates = stateCoordinates[selectedState];
      if (coordinates) {
        map.flyTo({
          center: [coordinates.longitude, coordinates.latitude],
          zoom: 5,
        });
      }
    }
  }, [selectedState]);

  const handleTrailClick = (event) => {
    const feature = event.features && event.features[0];
    if (feature) setSelectedTrail(feature);
  };

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <select
        className="custom-select"
        value={selectedState}
        onChange={(e) => setSelectedState(e.target.value)}
        style={{ position: "absolute", zIndex: 1000, top: 10, left: 10 }}
      >
        {Object.keys(stateDataMap).map((state) => (
          <option key={state} value={state}>
            {state}
          </option>
        ))}
      </select>

      <Map
        ref={mapRef}
        initialViewState={{
          latitude: 44.0,
          longitude: -120.5,
          zoom: 6.5,
        }}
        mapboxAccessToken={MAPBOX_TOKEN}
        mapStyle={mapboxStyle}
        style={{ width: "100%", height: "100%" }}
        interactiveLayerIds={["clusters", "unclustered-point"]}
        onClick={(event) => {
          const features = event.features || [];
          if (features.length > 0) {
            const clickedFeature = features[0];
            if (clickedFeature.layer.id === "unclustered-point") {
              handleTrailClick(event);
            }
          }
        }}
      >
        <Source
          id="trails"
          type="geojson"
          data={geoJsonData}
          cluster={true}
          clusterMaxZoom={14}
          clusterRadius={50}
        >
          <Layer {...clusterLayer} />
          <Layer {...clusterCountLayer} />
          <Layer {...unclusteredPointLayer} />
          <div style={legend}>
            <div>Click on the dropdown menu to view hikes in each state</div>
            <div>Zoom in to view individual trails and click to view popup</div>
            <p>
              Created by:&nbsp;
              <a
                href="https://interactive-reality.netlify.app/"
                rel="nonopener noreferrer"
                target="_blank"
              >
                Richard Brown
              </a>
            </p>
          </div>
        </Source>

        {selectedTrail && (
          <Popup
            className="custom-popup"
            latitude={selectedTrail.geometry.coordinates[1]}
            longitude={selectedTrail.geometry.coordinates[0]}
            anchor="top"
            onClose={() => setSelectedTrail(null)}
          >
            <div style={{ textAlign: "center", padding: "10px" }}>
              <h3>{selectedTrail.properties.name}</h3>
              <img
                src={
                  selectedTrail.properties.image
                    ? selectedTrail.properties.image
                    : "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.freepik.com%2Fpremium-vector%2Flogo-hiking-adventure_643349-575.jpg&f=1&nofb=1&ipt=8ddbde4e65beac96689cb5f369f57e0d24acb4f3d19a209ba98471ca582e05ef&ipo=images"
                }
                alt={selectedTrail.properties.name}
                style={{
                  width: "100%",
                  maxHeight: "150px",
                  objectFit: "cover",
                }}
              />
              <p>
                <strong>Distance:</strong> {selectedTrail.properties.distance}{" "}
                miles
              </p>
              <p>
                <strong>Estimated Time:</strong>{" "}
                {selectedTrail.properties.Est_Hike_Duration} Minutes
              </p>
              <p>
                <strong>Elevation Gain:</strong>{" "}
                {selectedTrail.properties.elevationGain} ft
              </p>
              <p>
                <strong>Difficulty:</strong>{" "}
                {selectedTrail.properties.difficulty}
              </p>
              <p>
                <strong>Rating:</strong> {selectedTrail.properties.rating} / 5 (
                {selectedTrail.properties.reviews} reviews)
              </p>
              <a
                href={selectedTrail.properties.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#08ff08", textDecoration: "none" }}
              >
                View More
              </a>
            </div>
          </Popup>
        )}
      </Map>
    </div>
  );
};

export default App;
