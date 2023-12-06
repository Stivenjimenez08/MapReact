import React from 'react'
import { Marker } from "react-leaflet";

const ListMarkers = (location) => {
    
    const {locations} = location

    const markers = locations.map((loc,i)=>(

        <Marker key= {i} position={loc.location} />
    ))

    return markers
}

export default ListMarkers
