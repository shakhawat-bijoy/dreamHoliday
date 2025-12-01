import FlightHotelSearch from '../components/home/FlightHotelSearch'
import Banner from '../components/home/Banner'
import AttractionsMap from '../components/flights/AttractionsMap'
import Destinations from '../components/flights/Destinations'
import TouristDestinations from '../components/flights/TouristDestinations'
import Breadcrumb from '../components/common/Breadcrumb'
import Container from '../components/common/Container'


const Flights = () => {
  return (
    <div>
      <Banner className={`mb-10`}/>
      <Container>
        <Breadcrumb className="my-6" />
      </Container>
      <FlightHotelSearch initialTab="flights" />
      <AttractionsMap/>
      <Destinations/>
      <TouristDestinations/>
    </div>
  )
}

export default Flights