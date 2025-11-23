import FlightHotelSearch from '../components/home/FlightHotelSearch'
import Banner from '../components/home/Banner'
import RecentSearch from '../components/hotels/RecentSearch'
import Destinations from '../components/flights/Destinations'
import TouristDestinations from '../components/flights/TouristDestinations'


const Hotels = () => {
  return (
    <div>
      <Banner className={`mb-10`}/>
      <FlightHotelSearch initialTab="stays" />
      <RecentSearch/>
      <Destinations/>
      <TouristDestinations/>
    </div>
  )
}

export default Hotels