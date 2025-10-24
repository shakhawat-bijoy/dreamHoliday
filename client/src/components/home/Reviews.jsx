import Container from '../common/Container'
import Image from '../common/Image'
import reviews1 from '../../assets/images/reviews1.png'
import reviews2 from '../../assets/images/reviews2.png'
import reviews3 from '../../assets/images/reviews3.png'

import Slider from 'react-slick'
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";

function SampleNextArrow(props) {
  const { style, onClick } = props;
  return (
    <div
      className='w-16 h-16 absolute right-5 top-1/2 translate-y-[-50%] rounded-full border !flex justify-center items-center cursor-pointer'
      style={{ ...style, display: "block", }}
      onClick={onClick}
    >
      <FaArrowRightLong className='text-black' />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { style, onClick } = props;
  return (
    <div
      className='w-16 h-16 absolute left-5 top-1/2 translate-y-[-50%] rounded-full border !flex justify-center items-center z-50 cursor-pointer'
      style={{ ...style, display: "block", }}
      onClick={onClick}
    >
      <FaArrowLeftLong className='text-black' />
    </div>
  );
}

function SampleNextArrow2(props) {
  const { style, onClick } = props;
  return (
    <div
      className='lg:w-16 lg:h-16 w-10 h-10 absolute lg:right-5 right-1 top-1/2 translate-y-[-50%] rounded-full bg-[#c3c3c2] !flex justify-center items-center cursor-pointer'
      style={{ ...style, display: "block", }}
      onClick={onClick}
    >
      <FaArrowRightLong className='text-black' />
    </div>
  );
}

function SamplePrevArrow2(props) {
  const { style, onClick } = props;
  return (
    <div
      className='lg:w-16 lg:h-16 w-10 h-10 absolute lg:left-5 left-1 top-1/2 translate-y-[-50%] rounded-full bg-[#c3c3c2] !flex justify-center items-center z-50 cursor-pointer'
      style={{ ...style, display: "block", }}
      onClick={onClick}
    >
      <FaArrowLeftLong className='text-black' />
    </div>
  );
}

const Reviews = () => {
  var settings = {
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 2,
    dots: false,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 6000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      }, {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: <SampleNextArrow2 />,
          prevArrow: <SamplePrevArrow2 />,
        }
      }
    ]
  };

  return (
    <div className='my-20'>
      <Container className="flex mb-10">
        <div className='flex flex-col gap-4'>
          <h5 className='text-[#000000] text-[32px] leading-[44px] font-semibold font-montserrat tracking-[1.92px]'>Reviews</h5>
          <p className='font-montserrat text-[16px] leading-[24px] text-[#000000]'>What people says about Golobe facilities.</p>
        </div>
      </Container>

      <div className='max-w-full gap-5'>
        <Slider {...settings}>
          {/* Review Card 1 */}
          <div className="px-3">
            <div className="relative">
              <div className="bg-white rounded-[12px] p-6 shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight">
                  "A real sense of community, nurtured"
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for...
                </p>
                <div className="text-right mb-4">
                  <button className="text-gray-500 text-sm hover:text-gray-700 transition-colors">
                    View more
                  </button>
                </div>
                <div className="flex mb-4 gap-1">
                  <span className="text-yellow-400 text-lg">★★★★★</span>
                </div>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 text-base">Olga</h4>
                  <p className="text-gray-500 text-sm">Weave Studios - Kai Tak</p>
                </div>
                <div className="flex items-center mb-4">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center mr-2">
                    <span className="text-xs font-bold text-blue-600">G</span>
                  </div>
                  <span className="text-gray-500 text-sm">Google</span>
                </div>
                <div className="relative -mx-6 -mb-6 mt-4">
                  <Image src={reviews1} alt="Review location" className="w-full h-40 object-cover rounded-b-[12px]" />
                </div>
              </div>
              <div className="absolute inset-0 bg-green-100 rounded-[12px] transform translate-x-3 translate-y-3 -z-10"></div>
            </div>
          </div>

          {/* Review Card 2 */}
          <div className="px-3">
            <div className="relative">
              <div className="bg-white rounded-[12px] p-6 shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight">
                  "The facilities are superb. Clean, slick, bright."
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  "A real sense of community, nurtured" Really appreciate the help and support from the staff...
                </p>
                <div className="text-right mb-4">
                  <button className="text-gray-500 text-sm hover:text-gray-700 transition-colors">
                    View more
                  </button>
                </div>
                <div className="flex mb-4 gap-1">
                  <span className="text-yellow-400 text-lg">★★★★★</span>
                </div>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 text-base">Thomas</h4>
                  <p className="text-gray-500 text-sm">Weave Studios - Olympic</p>
                </div>
                <div className="flex items-center mb-4">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center mr-2">
                    <span className="text-xs font-bold text-blue-600">G</span>
                  </div>
                  <span className="text-gray-500 text-sm">Google</span>
                </div>
                <div className="relative -mx-6 -mb-6 mt-4">
                  <Image src={reviews2} alt="Review location" className="w-full h-40 object-cover rounded-b-[12px]" />
                </div>
              </div>
              <div className="absolute inset-0 bg-green-100 rounded-[12px] transform translate-x-3 translate-y-3 -z-10"></div>
            </div>
          </div>

          {/* Review Card 3 */}
          <div className="px-3">
            <div className="relative">
              <div className="bg-white rounded-[12px] p-6 shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight">
                  "A real sense of community, nurtured"
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for...
                </p>
                <div className="text-right mb-4">
                  <button className="text-gray-500 text-sm hover:text-gray-700 transition-colors">
                    View more
                  </button>
                </div>
                <div className="flex mb-4 gap-1">
                  <span className="text-yellow-400 text-lg">★★★★★</span>
                </div>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 text-base">Eliot</h4>
                  <p className="text-gray-500 text-sm">Weave Studios - Kai Tak</p>
                </div>
                <div className="flex items-center mb-4">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center mr-2">
                    <span className="text-xs font-bold text-blue-600">G</span>
                  </div>
                  <span className="text-gray-500 text-sm">Google</span>
                </div>
                <div className="relative -mx-6 -mb-6 mt-4">
                  <Image src={reviews3} alt="Review location" className="w-full h-40 object-cover rounded-b-[12px]" />
                </div>
              </div>
              <div className="absolute inset-0 bg-green-100 rounded-[12px] transform translate-x-3 translate-y-3 -z-10"></div>
            </div>
          </div>

          {/* Review Card 4 */}
          <div className="px-3">
            <div className="relative">
              <div className="bg-white rounded-[12px] p-6 shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight">
                  "Highly recommend this place"
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Great value for money and excellent customer service. Will definitely be coming back for another visit...
                </p>
                <div className="text-right mb-4">
                  <button className="text-gray-500 text-sm hover:text-gray-700 transition-colors">
                    View more
                  </button>
                </div>
                <div className="flex mb-4 gap-1">
                  <span className="text-yellow-400 text-lg">★★★★☆</span>
                </div>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 text-base">Michael</h4>
                  <p className="text-gray-500 text-sm">Seaside Resort</p>
                </div>
                <div className="flex items-center mb-4">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center mr-2">
                    <span className="text-xs font-bold text-blue-600">G</span>
                  </div>
                  <span className="text-gray-500 text-sm">Google</span>
                </div>
                <div className="relative -mx-6 -mb-6 mt-4">
                  <Image src={reviews1} alt="Review location" className="w-full h-40 object-cover rounded-b-[12px]" />
                </div>
              </div>
              <div className="absolute inset-0 bg-green-100 rounded-[12px] transform translate-x-3 translate-y-3 -z-10"></div>
            </div>
          </div>

          {/* Review Card 5 */}
          <div className="px-3">
            <div className="relative">
              <div className="bg-white rounded-[12px] p-6 shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight">
                  "Amazing experience overall"
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  From booking to checkout, everything was smooth and professional. The facilities exceeded our expectations...
                </p>
                <div className="text-right mb-4">
                  <button className="text-gray-500 text-sm hover:text-gray-700 transition-colors">
                    View more
                  </button>
                </div>
                <div className="flex mb-4 gap-1">
                  <span className="text-yellow-400 text-lg">★★★★★</span>
                </div>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 text-base">Emma</h4>
                  <p className="text-gray-500 text-sm">City Center Hotel</p>
                </div>
                <div className="flex items-center mb-4">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center mr-2">
                    <span className="text-xs font-bold text-blue-600">G</span>
                  </div>
                  <span className="text-gray-500 text-sm">Google</span>
                </div>
                <div className="relative -mx-6 -mb-6 mt-4">
                  <Image src={reviews2} alt="Review location" className="w-full h-40 object-cover rounded-b-[12px]" />
                </div>
              </div>
              <div className="absolute inset-0 bg-green-100 rounded-[12px] transform translate-x-3 translate-y-3 -z-10"></div>
            </div>
          </div>

          {/* Review Card 6 */}
          <div className="px-3">
            <div className="relative">
              <div className="bg-white rounded-[12px] p-6 shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight">
                  "Outstanding hospitality"
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  The staff made us feel like family. Every detail was taken care of and the service was impeccable...
                </p>
                <div className="text-right mb-4">
                  <button className="text-gray-500 text-sm hover:text-gray-700 transition-colors">
                    View more
                  </button>
                </div>
                <div className="flex mb-4 gap-1">
                  <span className="text-yellow-400 text-lg">★★★★★</span>
                </div>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 text-base">David</h4>
                  <p className="text-gray-500 text-sm">Luxury Retreat</p>
                </div>
                <div className="flex items-center mb-4">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center mr-2">
                    <span className="text-xs font-bold text-blue-600">G</span>
                  </div>
                  <span className="text-gray-500 text-sm">Google</span>
                </div>
                <div className="relative -mx-6 -mb-6 mt-4">
                  <Image src={reviews3} alt="Review location" className="w-full h-40 object-cover rounded-b-[12px]" />
                </div>
              </div>
              <div className="absolute inset-0 bg-green-100 rounded-[12px] transform translate-x-3 translate-y-3 -z-10"></div>
            </div>
          </div>

          {/* Review Card 7 */}
          <div className="px-3">
            <div className="relative">
              <div className="bg-white rounded-[12px] p-6 shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight">
                  "Wonderful memories created"
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Every moment was special and the team made sure we had everything we needed. Truly a memorable experience...
                </p>
                <div className="text-right mb-4">
                  <button className="text-gray-500 text-sm hover:text-gray-700 transition-colors">
                    View more
                  </button>
                </div>
                <div className="flex mb-4 gap-1">
                  <span className="text-yellow-400 text-lg">★★★★★</span>
                </div>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 text-base">Lisa</h4>
                  <p className="text-gray-500 text-sm">Paradise Beach Resort</p>
                </div>
                <div className="flex items-center mb-4">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center mr-2">
                    <span className="text-xs font-bold text-blue-600">G</span>
                  </div>
                  <span className="text-gray-500 text-sm">Google</span>
                </div>
                <div className="relative -mx-6 -mb-6 mt-4">
                  <Image src={reviews2} alt="Review location" className="w-full h-40 object-cover rounded-b-[12px]" />
                </div>
              </div>
              <div className="absolute inset-0 bg-green-100 rounded-[12px] transform translate-x-3 translate-y-3 -z-10"></div>
            </div>
          </div>

          {/* Review Card 8 */}
          <div className="px-3">
            <div className="relative">
              <div className="bg-white rounded-[12px] p-6 shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight">
                  "Best vacation ever"
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Everything was perfect from start to finish. The location, service, and amenities were all top-notch...
                </p>
                <div className="text-right mb-4">
                  <button className="text-gray-500 text-sm hover:text-gray-700 transition-colors">
                    View more
                  </button>
                </div>
                <div className="flex mb-4 gap-1">
                  <span className="text-yellow-400 text-lg">★★★★★</span>
                </div>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 text-base">Robert</h4>
                  <p className="text-gray-500 text-sm">Ocean View Hotel</p>
                </div>
                <div className="flex items-center mb-4">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center mr-2">
                    <span className="text-xs font-bold text-blue-600">G</span>
                  </div>
                  <span className="text-gray-500 text-sm">Google</span>
                </div>
                <div className="relative -mx-6 -mb-6 mt-4">
                  <Image src={reviews2} alt="Review location" className="w-full h-40 object-cover rounded-b-[12px]" />
                </div>
              </div>
              <div className="absolute inset-0 bg-green-100 rounded-[12px] transform translate-x-3 translate-y-3 -z-10"></div>
            </div>
          </div>

        </Slider>
      </div>
    </div>
  )
}

export default Reviews