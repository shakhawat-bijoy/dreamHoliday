import React from 'react'
import { MapPin, Clock3, Star, Plane } from 'lucide-react'
import Container from '../common/Container'
import Button from '../common/Button'
import Image from '../common/Image'
import { packagesData } from '../../utils/packagesData'

const Packages = ({ className = '' }) => {
  const featuredPackages = packagesData.slice(0, 6)

  return (
    <div className={`${className}`}>
      <Container className="lg:w-[1280px] max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 py-12 sm:py-16 lg:py-20">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
          <div>
            <p className="uppercase text-teal-700 font-semibold text-xs tracking-[0.3em] mb-2">Curated Packages</p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">Handpicked getaways for you</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl">
              Choose from immersive itineraries crafted by our travel experts—flights, stays, and experiences bundled for a stress-free holiday.
            </p>
          </div>
          <div className="flex gap-3">
            <Button
              text="All packages"
              to="/packages"
              className="bg-white border border-teal-500 text-gray-900 hover:bg-teal-500 hover:text-white transition-colors px-4 sm:px-5 py-2 rounded-lg text-sm sm:text-base"
            />
          </div>
        </div>

        <div className="grid gap-6 sm:gap-7 lg:gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {featuredPackages.map((pack) => (
            <div
              key={pack.id}
              className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="relative h-56">
                <Image
                  src={pack.image}
                  alt={pack.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                  <div>
                    <div className="inline-flex items-center gap-2 bg-white/90 text-gray-900 px-3 py-1 rounded-full text-xs font-semibold shadow-sm">
                      <Plane className="w-3.5 h-3.5" />
                      Flight + Stay
                    </div>
                    <h3 className="mt-3 text-xl font-bold text-white drop-shadow-sm">{pack.title}</h3>
                  </div>
                  <div className="flex items-center gap-1 text-white text-sm font-semibold bg-black/30 px-3 py-1 rounded-full">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    {pack.rating}
                  </div>
                </div>
              </div>

              <div className="p-5 sm:p-6 flex flex-col gap-3">
                <div className="flex items-center gap-3 text-gray-700 text-sm font-semibold">
                  <MapPin className="w-4 h-4 text-teal-600" />
                  <span>{pack.location}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600 text-sm">
                  <Clock3 className="w-4 h-4 text-teal-600" />
                  <span>{pack.duration}</span>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {pack.highlights.map((item, idx) => (
                    <span
                      key={`${pack.id}-highlight-${idx}`}
                      className="px-3 py-1 bg-teal-50 text-teal-800 rounded-full text-xs font-semibold"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between mt-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-gray-500">Starting at</p>
                    <p className="text-2xl font-bold text-gray-900">{pack.price}</p>
                    <p className="text-xs text-gray-500">per traveler, includes flights</p>
                  </div>
                  <Button
                    text="View details"
                    to={`/packages/${pack.id}`}
                    className="bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors text-sm font-semibold"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default Packages
