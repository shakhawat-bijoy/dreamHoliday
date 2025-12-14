import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { MapPin, Clock3, Star, ArrowLeft, CheckCircle2, Calendar, Users, XCircle } from 'lucide-react'
import Container from '../components/common/Container'
import Image from '../components/common/Image'
import Button from '../components/common/Button'
import { getPackageById } from '../utils/packagesData'

const formatCurrency = (value) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(value)

const PackageDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const pkg = getPackageById(id)

  const [selectedDate, setSelectedDate] = useState('')
  const [travelers, setTravelers] = useState(1)
  const [currentImage, setCurrentImage] = useState(0)
  const [submitted, setSubmitted] = useState(false)

  if (!pkg) {
    return (
      <Container className="py-5 px-4 lg:px-0">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Package not found</h1>
          <p className="text-gray-600">We could not locate that package. Please return to the packages list.</p>
          <div className="flex justify-center gap-3">
            <Button to="/" className="bg-teal-600 text-white px-4 py-2 rounded-lg font-semibold">Back to home</Button>
            <Button to="/packages" className="bg-white border border-teal-500 text-gray-900 px-4 py-2 rounded-lg font-semibold">All packages</Button>
          </div>
        </div>
      </Container>
    )
  }

  const pricePer = (pkg.priceValue ?? Number(String(pkg.price).replace(/[^0-9.]/g, ''))) || 0
  const totalPrice = pricePer * Math.max(1, travelers)

  const handleBooking = () => {
    if (!selectedDate || travelers < 1) {
      alert('Please select a date and number of travelers')
      return
    }

    const packageBookingData = {
      package: pkg,
      date: selectedDate,
      travelers: Math.max(1, travelers),
      totalPrice,
      timestamp: Date.now(),
    }

    localStorage.setItem('selectedPackageForBooking', JSON.stringify(packageBookingData))
    setSubmitted(true)
    navigate('/packages/confirm', { state: packageBookingData })
  }

  const images = pkg.images && pkg.images.length > 0 ? pkg.images : [pkg.image]

  return (
    <div className="bg-slate-50 min-h-screen">
      <Container className="lg:w-[1280px] max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 py-6 lg:py-10">
        <div className="mb-6 flex items-center gap-3 text-sm text-teal-700 font-semibold">
          <button
            className="flex items-center gap-2 hover:text-teal-800"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="w-4 h-4" /> Back
          </button>
          <span className="text-gray-300">/</span>
          <span>Packages</span>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
                    {pkg.badge && <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full">{pkg.badge}</span>}
                    {pkg.discount && <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full">{pkg.discount}</span>}
                  </div>
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">{pkg.title}</h1>
                  <div className="flex flex-wrap items-center gap-4 text-gray-700 text-sm">
                    <span className="inline-flex items-center gap-2"><MapPin className="w-4 h-4 text-teal-600" /> {pkg.location}</span>
                    <span className="inline-flex items-center gap-2"><Clock3 className="w-4 h-4 text-teal-600" /> {pkg.duration}</span>
                    <span className="inline-flex items-center gap-2"><Star className="w-4 h-4 fill-yellow-400 text-yellow-400" /> {pkg.rating} {pkg.reviews ? `(${pkg.reviews} reviews)` : ''}</span>
                  </div>
                </div>
                <div className="text-left lg:text-right">
                  {pkg.originalPrice && <p className="text-sm text-gray-500 line-through">{formatCurrency(pkg.originalPrice)}</p>}
                  <p className="text-3xl lg:text-4xl font-bold text-teal-600">{formatCurrency(pricePer)}</p>
                  <p className="text-sm text-gray-600">per person</p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
                <div className="lg:col-span-2">
                  <Image
                    src={images[currentImage]}
                    alt={pkg.title}
                    className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-xl"
                  />
                </div>
                <div className="grid grid-cols-4 lg:grid-cols-1 gap-3 sm:gap-4">
                  {images.map((img, idx) => (
                    <button
                      type="button"
                      key={`${pkg.id}-img-${idx}`}
                      onClick={() => setCurrentImage(idx)}
                      className={`w-full h-20 sm:h-24 lg:h-[110px] overflow-hidden rounded-lg border-2 transition-all duration-200 ${currentImage === idx ? 'border-teal-600 shadow-md' : 'border-transparent hover:border-teal-300'}`}
                    >
                      <Image src={img} alt={`${pkg.title} ${idx + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3">Overview</h2>
                  <p className="text-gray-700 leading-relaxed">{pkg.description}</p>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3">Highlights</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {pkg.highlights?.map((item, idx) => (
                      <div key={`${pkg.id}-hl-${idx}`} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-teal-600 mt-1" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Itinerary</h2>
                  <div className="space-y-3">
                    {pkg.itinerary?.map((item, idx) => (
                      <div key={`${pkg.id}-it-${idx}`} className="flex gap-4 pb-4 border-b border-gray-100 last:border-0">
                        <div className="flex-shrink-0 w-14 h-14 bg-teal-100 rounded-full flex items-center justify-center text-sm font-bold text-teal-700">
                          {item.day}
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-gray-900">{item.title}</p>
                          <p className="text-gray-700 text-sm leading-relaxed">{item.detail}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">What's included</h3>
                    <div className="space-y-2">
                      {pkg.inclusions?.map((item, idx) => (
                        <div key={`${pkg.id}-inc-${idx}`} className="flex items-start gap-2 text-sm text-gray-700">
                          <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Not included</h3>
                    <div className="space-y-2">
                      {pkg.notIncluded?.map((item, idx) => (
                        <div key={`${pkg.id}-not-${idx}`} className="flex items-start gap-2 text-sm text-gray-700">
                          <XCircle className="w-4 h-4 text-red-500 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-7 space-y-5 border border-gray-100 lg:sticky lg:top-24">
              <h3 className="text-xl font-bold text-gray-900">Book this package</h3>

              <div className="space-y-4">
                <label className="block text-sm font-semibold text-gray-800">
                  <span className="flex items-center gap-2 mb-2"><Calendar className="w-4 h-4 text-teal-600" /> Select date</span>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                  />
                </label>

                <label className="block text-sm font-semibold text-gray-800">
                  <span className="flex items-center gap-2 mb-2"><Users className="w-4 h-4 text-teal-600" /> Travelers</span>
                  <input
                    type="number"
                    min={1}
                    value={travelers}
                    onChange={(e) => setTravelers(Math.max(1, parseInt(e.target.value, 10) || 1))}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                  />
                </label>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 space-y-2 text-sm text-gray-800">
                <div className="flex justify-between"><span>Price per person</span><span className="font-semibold">{formatCurrency(pricePer)}</span></div>
                <div className="flex justify-between"><span>Travelers</span><span className="font-semibold">×{Math.max(1, travelers)}</span></div>
                <div className="border-t border-gray-200 pt-2 flex justify-between text-base font-bold text-gray-900">
                  <span>Total</span><span className="text-teal-600">{formatCurrency(totalPrice)}</span>
                </div>
              </div>

              <button
                type="button"
                onClick={handleBooking}
                className="w-full bg-teal-600 text-white py-3 rounded-lg font-semibold hover:bg-teal-700 shadow-md"
              >
                Confirm booking
              </button>

              {submitted && (
                <div className="flex items-start gap-2 bg-teal-50 border border-teal-100 text-teal-900 px-3 py-2 rounded-lg text-sm">
                  <CheckCircle2 className="w-4 h-4 text-teal-700 mt-0.5" />
                  <span>Saved your selection. We will finalize after you review on booking page.</span>
                </div>
              )}

              <div className="text-xs text-gray-600 space-y-1">
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-600" /> Free cancellation within 24h</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-600" /> Instant confirmation</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-600" /> Secure payment</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default PackageDetails
