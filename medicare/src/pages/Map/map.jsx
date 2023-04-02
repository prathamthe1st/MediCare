import React from "react";
import ReactMapGL from "react-map-gl"

export default function Map() {
    const [viewport, setViewport] = React.useState({
        latitude: 19.0803,
        longitude: 72.8806,
        zoom: 10
    });

    return (
        <div>
            <ReactMapGL {...viewport}
            mapboxAccessToken="pk.eyJ1IjoicHJhdGhhbXRoZTFzdCIsImEiOiJjbGZ3czN0aXUwazlkM2VxdWljcmt3MjhzIn0.45U1YoK40iFNEeQey6iBOA"
            mapStyle={"mapbox://styles/mapbox/streets-v11"}
            style={{width: '80vw', height: '80vh'}}
            
            // addControl.(new mapboxgl.NavigationControl());
            onViewportChange={viewport => {
                setViewport(viewport);
            }}
            >
                Markers Here
            </ReactMapGL>
        </div>
    )
}