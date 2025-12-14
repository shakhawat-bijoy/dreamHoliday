import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { FaStar } from 'react-icons/fa6'
import Container from '../components/common/Container'
import Image from '../components/common/Image'
import Button from '../components/common/Button'
import { packagesData } from '../utils/packagesData'

const AllPackages = () => {
  const heroSlides = [
    {
      title: 'Curated Journeys, Seamless Stays',
      subtitle: 'From alpine escapes to island retreats, book handpicked itineraries built for you.',
      image: 'https://images.unsplash.com/photo-1505761671935-60b3a7427bad?w=1600&q=80',
      cta: 'Plan My Escape',
      link: packagesData[0] ? `/packages/${packagesData[0].id}` : '/packages',
    },
    {
      title: 'Chase the Northern Lights',
      subtitle: 'Glass igloos, husky safaris, and starry skies across Norway & Finland.',
      image: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=1600&q=80',
      cta: 'View Arctic Deals',
      link: packagesData[1] ? `/packages/${packagesData[1].id}` : '/packages',
    },
    {
      title: 'Cities, Culture, Coastlines',
      subtitle: 'Mix heritage walks, food tours, and beach days in one effortless booking.',
      image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1600&q=80',
      cta: 'Browse Packages',
      link: packagesData[2] ? `/packages/${packagesData[2].id}` : '/packages',
    },
  ]

  const [activeSlide, setActiveSlide] = useState(0)
  const totalSlides = heroSlides.length
  const currentSlide = heroSlides[activeSlide]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % totalSlides)
    }, 5000)
    return () => clearInterval(interval)
  }, [totalSlides])

  const goToSlide = (index) => {
    setActiveSlide(index)
  }

  const handlePrev = () => {
    setActiveSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  const handleNext = () => {
    setActiveSlide((prev) => (prev + 1) % totalSlides)
  }

  return (
    <Container className="py-5 md:py-4">
      <div className="flex flex-col gap-10 md:gap-12">
        <div className="relative overflow-hidden rounded-3xl bg-slate-900 text-white shadow-xl aspect-[4/5] sm:aspect-[16/9] lg:aspect-[16/6] min-h-[420px] sm:min-h-[460px] lg:min-h-[520px]">
          <Image
            src={currentSlide.image}
            alt={currentSlide.title}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/20" />

          <div className="absolute left-3 bottom-3 z-20 flex gap-3 sm:left-5 sm:bottom-5">
            <button
              type="button"
              onClick={handlePrev}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 border border-white/30 backdrop-blur hover:bg-white/30 transition"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 border border-white/30 backdrop-blur hover:bg-white/30 transition"
              aria-label="Next slide"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          <div className="absolute bottom-3 left-0 right-0 z-20 flex justify-center gap-2 sm:bottom-5">
            {heroSlides.map((slide, index) => (
              <button
                key={slide.title}
                type="button"
                onClick={() => goToSlide(index)}
                className={`h-2.5 rounded-full transition-all ${
                  activeSlide === index ? 'w-8 bg-white' : 'w-2 bg-white/60 hover:bg-white'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <div className="relative z-10 flex h-full flex-col justify-end p-6 sm:p-10 md:p-14 lg:p-16">
            <div className="grid gap-6 lg:gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div key={activeSlide} className="flex flex-col gap-4 max-w-3xl animate-hero-slide">
                <p className="text-xs uppercase tracking-[0.3em] text-teal-200">Featured escapes</p>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">{currentSlide.title}</h1>
                <p className="text-lg md:text-xl text-slate-100/90">{currentSlide.subtitle}</p>
                
              </div>

              <div className="bg-white/15 border border-white/20 rounded-2xl p-5 sm:p-6 lg:p-7 backdrop-blur shadow-xl w-full max-w-xl lg:ml-auto">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-semibold">Top rated picks</span>
                  <span className="text-xs bg-white/20 px-3 py-1 rounded-full">{packagesData.length} options</span>
                </div>
                <div className="space-y-3">
                  {packagesData.slice(0, 3).map((pkg) => (
                    <div key={pkg.id} className="bg-white/15 border border-white/20 rounded-xl p-3 flex items-center gap-3">
                      <Image
                        src={pkg.images?.[0] || pkg.image}
                        alt={pkg.title}
                        className="w-16 h-16 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <Link to={`/packages/${pkg.id}`} className="text-sm font-semibold line-clamp-1 hover:text-teal-200">
                          {pkg.title}
                        </Link>
                        <p className="text-xs text-white/75">{pkg.location}</p>
                        <div className="flex items-center gap-1 text-xs text-amber-200 mt-1">
                          <FaStar className="w-3.5 h-3.5" />
                          <span className="font-semibold">{pkg.rating}</span>
                          <span className="text-white/60">({pkg.reviews})</span>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <Button to={`/packages/${pkg.id}`} className="bg-teal-600 text-white px-3 py-2 rounded-lg text-xs font-semibold hover:bg-teal-700 transition-colors">
                          Book now
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="flex flex-col gap-3 text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-blue-500">All packages</p>
          <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">Find your next escape</h2>
          <p className="text-slate-600 md:text-lg">Browse curated stays, city breaks, and bucket-list adventures ready to book.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {packagesData.map((pkg) => (
            <div key={pkg.id} className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="relative h-52 w-full overflow-hidden">
                <Image src={pkg.image} alt={pkg.title} className="h-full w-full object-cover" />
                {pkg.badge && (
                  <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-800 shadow">{pkg.badge}</span>
                )}
              </div>

              <div className="flex flex-1 flex-col gap-3 p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs uppercase tracking-wide text-slate-500">{pkg.location}</p>
                    <h3 className="text-lg font-semibold text-slate-900">{pkg.title}</h3>
                  </div>
                  <div className="text-right text-sm text-slate-600">
                    <div className="font-semibold text-slate-900">{pkg.price} <span className="text-xs font-normal text-slate-500">per person</span></div>
                    {pkg.discount && <div className="text-xs text-green-600">{pkg.discount}</div>}
                  </div>
                </div>

                <p className="text-sm text-slate-600 line-clamp-2">{pkg.description}</p>

                <div className="flex flex-wrap gap-2 text-xs text-slate-500">
                  <span className="rounded-full bg-slate-100 px-3 py-1">{pkg.duration}</span>
                  <span className="rounded-full bg-slate-100 px-3 py-1">{pkg.rating.toFixed(1)} ★</span>
                  <span className="rounded-full bg-slate-100 px-3 py-1">{pkg.reviews}+ reviews</span>
                </div>

                <div className="mt-auto pt-2 flex justify-end">
                  <Button to={`/packages/${pkg.id}`} className="justify-end bg-teal-600 text-white hover:bg-teal-700  py-2 px-4 rounded-lg">Book now</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}

export default AllPackages
