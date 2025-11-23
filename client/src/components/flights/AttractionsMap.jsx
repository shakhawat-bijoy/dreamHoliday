import React, { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import Button from '../common/Button'

// Fix for default marker icons in React-Leaflet
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
})

const AttractionsMap = () => {
  const [Leaflet, setLeaflet] = useState(null)

  useEffect(() => {
    let mounted = true
    ;(async () => {
      // load leaflet CSS + runtime modules only on client
      await import('leaflet/dist/leaflet.css')
      const { MapContainer, TileLayer, Marker, Popup } = await import('react-leaflet')
      if (mounted) setLeaflet({ MapContainer, TileLayer, Marker, Popup })
    })()
    return () => { mounted = false }
  }, [])

  if (!Leaflet) return null // or a placeholder/skeleton

  const { MapContainer, TileLayer, Marker, Popup } = Leaflet

  return (
    <>
      <div className='max-w-[1230px] mx-auto md:my-20 my-8 px-4'>
        <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4'>
          <div className='flex flex-col gap-4'>
            <h1 className='text-[#000] text-xl sm:text-2xl md:text-[32px] font-semibold font-montserrat'>
              Let's go places together
            </h1>
            <p className='text-sm md:text-base font-normal font-montserrat'>
              Discover the latest offers and news and start planning your next trip with us.
            </p>
          </div>
          <div className='flex-shrink-0'>
            <Button 
              text='See All' 
              className='px-4 py-2 text-black rounded-md border border-[#8DD3BB] text-sm font-medium whitespace-nowrap'
            />
          </div>
        </div>
      </div>

      <div className='w-full h-[300px] sm:h-[400px] md:h-[500px]'>
        <MapContainer 
          center={[6.9271, 79.8612]} 
          zoom={8} 
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={[6.9271, 79.8612]}>
            <Popup>Sri Lanka</Popup>
          </Marker>
        </MapContainer>
      </div>
    </>
  )
}

export default AttractionsMap