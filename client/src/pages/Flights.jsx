import FlightHotelSearch from '../components/home/FlightHotelSearch'
import Banner from '../components/home/Banner'


const Flights = () => {
  return (
    <div>
      <Banner className={`mb-10`}/>
      <FlightHotelSearch />
    </div>
  )
}

export default Flights