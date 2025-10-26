import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import Slider from 'react-slick'
import Container from '../components/common/Container'
import Button from '../components/common/Buttton'
import logoImage from '../assets/images/logo.png'
import login1 from '../assets/images/login1.jpg'
import login2 from '../assets/images/login2.jpg'
import banner1 from '../assets/images/banner1.png'
import banner2 from '../assets/images/banner2.png'
import banner3 from '../assets/images/banner3.png'
import Image from '../components/common/Image'

const AddPaymentMethod = () => {
    const [active, setActive] = useState(0)
    const [paymentData, setPaymentData] = useState({
        cardNumber: '',
        expiryDate: '',
        cvc: '',
        nameOnCard: '',
        country: 'United States',
        secureInfo: false,
    })

    const loginSliderData = [
        {
            id: 1,
            image: login1,
            title: "Welcome to Dream Holidays",
            description: "Discover amazing destinations and create unforgettable memories"
        },
        {
            id: 2,
            image: login2,
            title: "Explore Paradise",
            description: "Find your perfect getaway with our exclusive travel packages"
        },
        {
            id: 3,
            image: banner1,
            title: "Adventure Awaits",
            description: "Experience the world's most beautiful destinations"
        },
        {
            id: 4,
            image: banner2,
            title: "Luxury Travel",
            description: "Indulge in premium experiences and world-class hospitality"
        },
        {
            id: 5,
            image: banner3,
            title: "Create Memories",
            description: "Make every journey an unforgettable adventure"
        }
    ]

    const handlePaymentChange = (e) => {
        setPaymentData({
            ...paymentData,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Payment data:', paymentData)
        alert('Payment method added successfully!')
    }

    const sliderSettings = {
        dots: true,
        arrows: false,
        infinite: true,
        fade: true,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,

        beforeChange: (_, next) => {
            setActive(next);
        },

        appendDots: dots => (
            <div
                style={{
                    position: "absolute",
                    bottom: "1%",
                    left: "50%",
                    transform: "translateX(-50%)",
                }}
            >
                <ul style={{
                    margin: "0px",
                    display: "flex",
                    gap: "16px",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "20px 0",
                    listStyle: "none"
                }}> {dots} </ul>
            </div>
        ),
        customPaging: i => (
            <div className="relative group cursor-pointer">
                {/* Progress Bar Container */}
                <div className={`
                  relative w-12 h-1 rounded-full overflow-hidden transition-all duration-700 ease-in-out
                  ${i === active ? 'bg-white/30' : 'bg-white/20 hover:bg-white/25'}
                `}>
                    {/* Active Progress Bar */}
                    <div className={`
                    absolute top-0 left-0 h-full rounded-full transition-all duration-700 ease-in-out
                    ${i === active
                            ? 'w-full bg-gradient-to-r from-teal-400 to-blue-500 shadow-lg shadow-teal-500/50'
                            : 'w-0 bg-white/40'
                        }
                  `} />
                </div>

                {/* Slide Number */}
                <div className={`
                  absolute -top-6 left-1/2 transform -translate-x-1/2 transition-all duration-500 ease-in-out
                  ${i === active
                        ? 'text-white font-bold text-xs opacity-100 scale-110'
                        : 'text-white/60 font-medium text-xs opacity-70 scale-100 group-hover:opacity-90 group-hover:scale-105'
                    }
                `}>
                    {String(i + 1).padStart(2, '0')}
                </div>

                {/* Active Dot */}
                <div className={`
                  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                  w-1.5 h-1.5 rounded-full transition-all duration-300 ease-in-out
                  ${i === active
                        ? 'bg-white scale-100 opacity-100 shadow-lg shadow-white/50'
                        : 'bg-white/60 scale-0 opacity-0 group-hover:scale-75 group-hover:opacity-80'
                    }
                `} />
            </div>
        ),

        responsive: [
            {
                breakpoint: 1024,
                settings: {}
            },
            {
                breakpoint: 600,
                settings: {}
            },
            {
                breakpoint: 480,
                settings: {
                    appendDots: dots => (
                        <div
                            style={{
                                position: "absolute",
                                left: "50%",
                                bottom: "10%",
                                transform: "translateX(-50%)",
                                width: "100%",
                                display: "flex",
                                justifyContent: "center"
                            }}
                        >
                            <ul
                                style={{
                                    margin: "0px",
                                    display: "flex",
                                    gap: "12px",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    listStyle: "none",
                                    padding: "0px"
                                }}
                            >
                                {dots}
                            </ul>
                        </div>
                    ),
                    customPaging: i => (
                        <div className="relative group cursor-pointer px-1">
                            {/* Mobile Progress Bar */}
                            <div className={`
                            relative w-8 h-0.5 rounded-full overflow-hidden transition-all duration-500 ease-in-out
                            ${i === active ? 'bg-white/40' : 'bg-white/20'}
                          `}>
                                <div className={`
                                absolute top-0 left-0 h-full rounded-full transition-all duration-500 ease-in-out
                                ${i === active
                                        ? 'w-full bg-gradient-to-r from-teal-400 to-blue-500'
                                        : 'w-0 bg-white/40'
                                    }
                              `} />
                            </div>

                            {/* Mobile Active Dot */}
                            <div className={`
                            absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                            w-1 h-1 rounded-full transition-all duration-300 ease-in-out
                            ${i === active
                                    ? 'bg-white scale-100 opacity-100'
                                    : 'bg-white/60 scale-0 opacity-0'
                                }
                          `} />
                        </div>
                    ),
                }
            }
        ],
    };

    return (
        <div className="min-h-screen py-4 md:py-0">
            <Container>
                <div className="min-h-screen flex">
                    {/* Left Side - Slider */}
                    <div className="hidden lg:block relative flex-1 min-h-screen overflow-hidden rounded-3xl">
                        <Slider {...sliderSettings}>
                            {loginSliderData.map((slide) => (
                                <div key={slide.id}>
                                    <div className='h-screen flex items-center justify-center relative'>
                                        <div className='w-full h-[900px] relative '>
                                            <Image src={slide.image} className="w-full h-full object-cover rounded-xl" />
                                            <div className='absolute inset-0 bg-opacity-30'></div>
                                            <div className='absolute bottom-16 left-8 right-8 text-white'>
                                                <h3 className='text-2xl sm:text-3xl lg:text-4xl font-bold font-league mb-3 leading-tight'>
                                                    {slide.title}
                                                </h3>
                                                <p className='text-base sm:text-lg lg:text-xl font-medium font-montserrat opacity-90 leading-relaxed max-w-md'>
                                                    {slide.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>

                    {/* Right Side - Payment Form */}
                    <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-white">
                        <div className="max-w-md w-full space-y-8">
                            {/* Logo */}
                            <div className="text-center">
                                <div className="flex items-center justify-center mb-6">
                                    <Image
                                        to={'/'}
                                        src={logoImage}
                                        alt="Dream Holidays"
                                        className="h-8 w-auto mr-2"
                                    />
                                    <span className="text-xl font-semibold text-gray-900"></span>
                                </div>
                            </div>

                            {/* Back Button */}
                            <Link
                                to="/register"
                                className="flex items-center text-gray-600 hover:text-gray-800 mb-4 bg-transparent border-none cursor-pointer"
                            >
                                <ArrowLeft className="w-4 h-4 mr-2" />
                                Back
                            </Link>

                            {/* Payment Form */}
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-2">Add a payment method</h2>
                                <p className="text-gray-600 mb-8">Let's get you set up so you can access your personal account</p>

                                <form className="space-y-6" onSubmit={handleSubmit}>
                                    {/* Card Number */}
                                    <div>
                                        <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">
                                            Card Number
                                        </label>
                                        <div className="relative">
                                            <input
                                                id="cardNumber"
                                                name="cardNumber"
                                                type="text"
                                                required
                                                value={paymentData.cardNumber}
                                                onChange={handlePaymentChange}
                                                placeholder="1234 1234 1234 1234"
                                                className="appearance-none relative block w-full px-3 py-3 pr-10 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                                            />
                                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                                                <div className="w-8 h-5 bg-blue-600 rounded text-white text-xs flex items-center justify-center">
                                                    VISA
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Expiry Date and CVC */}
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700 mb-1">
                                                Exp. Date
                                            </label>
                                            <input
                                                id="expiryDate"
                                                name="expiryDate"
                                                type="text"
                                                required
                                                value={paymentData.expiryDate}
                                                onChange={handlePaymentChange}
                                                placeholder="03/25"
                                                className="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="cvc" className="block text-sm font-medium text-gray-700 mb-1">
                                                CVC
                                            </label>
                                            <input
                                                id="cvc"
                                                name="cvc"
                                                type="text"
                                                required
                                                value={paymentData.cvc}
                                                onChange={handlePaymentChange}
                                                placeholder="123"
                                                className="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                                            />
                                        </div>
                                    </div>

                                    {/* Name on Card */}
                                    <div>
                                        <label htmlFor="nameOnCard" className="block text-sm font-medium text-gray-700 mb-1">
                                            Name on Card
                                        </label>
                                        <input
                                            id="nameOnCard"
                                            name="nameOnCard"
                                            type="text"
                                            required
                                            value={paymentData.nameOnCard}
                                            onChange={handlePaymentChange}
                                            placeholder="John Doe"
                                            className="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                                        />
                                    </div>

                                    {/* Country */}
                                    <div>
                                        <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                                            Country or Region
                                        </label>
                                        <select
                                            id="country"
                                            name="country"
                                            value={paymentData.country}
                                            onChange={handlePaymentChange}
                                            className="appearance-none relative block w-full px-3 py-3 border border-gray-300 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                                        >
                                            <option value="United States">United States</option>
                                            <option value="Canada">Canada</option>
                                            <option value="United Kingdom">United Kingdom</option>
                                            <option value="Australia">Australia</option>
                                        </select>
                                    </div>

                                    {/* Secure Info Checkbox */}
                                    <div className="flex items-center">
                                        <input
                                            id="secureInfo"
                                            name="secureInfo"
                                            type="checkbox"
                                            checked={paymentData.secureInfo}
                                            onChange={(e) => setPaymentData({ ...paymentData, secureInfo: e.target.checked })}
                                            className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
                                        />
                                        <label htmlFor="secureInfo" className="ml-2 block text-sm text-gray-900">
                                            Securely save my information for 1-click checkout
                                        </label>
                                    </div>

                                    {/* Add Payment Method Button */}
                                    <div>
                                        <Button
                                            onClick={handleSubmit}
                                            text="Add Payment Method"
                                            type="submit"
                                            to='/account'
                                            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-teal-500 hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-colors"
                                        />
                                    </div>

                                    {/* Terms Text */}
                                    <p className="text-xs text-gray-500 text-center">
                                        By confirming your subscription, you allow Dream Holidays to charge your card for this payment and future payments in accordance with their terms. You can always cancel your subscription.
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default AddPaymentMethod