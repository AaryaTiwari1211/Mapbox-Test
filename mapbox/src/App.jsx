import { useState } from 'react'
import './App.css'
import 'mapbox-gl/dist/mapbox-gl.css'
import ReactMapGL from 'react-map-gl'
function App() {
  // 'pk.eyJ1IjoiYWFyeWF0aXdhcmkiLCJhIjoiY2xnZDZhZmxwMDVlYTNncWZwc2ViNThnbiJ9.b5gkUgo-Im8y5Isc_D2pSg'
  const [viewport, setViewPort] = useState({
    latitude: 45.4211,
    longitude: -75.6903,
  })
  return (
    <div>
      <ReactMapGL
        mapboxAccessToken='pk.eyJ1IjoiYWFyeWF0aXdhcmkiLCJhIjoiY2xnZDZhZmxwMDVlYTNncWZwc2ViNThnbiJ9.b5gkUgo-Im8y5Isc_D2pSg'
        mapStyle={"mapbox://styles/mapbox/streets-v11"}
        style={{ width: '300px', height: '300px' }}
        onViewportChange={viewport => {
          setViewPort(viewport);
      }}
      />
    </div>

  )
}

export default App
