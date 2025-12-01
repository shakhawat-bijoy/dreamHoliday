import FlightHotelSearch from '../components/home/FlightHotelSearch'
import Banner from '../components/home/Banner'
import RecentSearch from '../components/hotels/RecentSearch'
import Destinations from '../components/flights/Destinations'
import TouristDestinations from '../components/flights/TouristDestinations'
import Breadcrumb from '../components/common/Breadcrumb'
import Container from '../components/common/Container'


const Hotels = () => {
  return (
    <div>
      <Banner className={`mb-10`}/>
      <Container>
        <Breadcrumb className="my-6" />
      </Container>
      <FlightHotelSearch initialTab="stays" />
      <RecentSearch/>
      <Destinations/>
      <TouristDestinations/>
    </div>
  )
}

export default Hotels