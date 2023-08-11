'use client'
import GoogleMapReact from "google-map-react"

export default function Map() {
    const center = {
        lat: 36.5411460000,
        lng: -4.6221580000
    }

    const ReactComponent = () => <div style={{width: 15, height: 15, backgroundColor: 'red', borderRadius: '50%'}}></div>

    return (
        <GoogleMapReact
            bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_MAPSAPIKEY }}
            defaultCenter={center}
            defaultZoom={16}
        >
            <ReactComponent lat={36.5411460000} lng={-4.6221580000} />
        </GoogleMapReact>
    )
}