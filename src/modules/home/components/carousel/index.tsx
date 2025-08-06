import { Button, Heading } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

const Carousel = () => {
  return (
    <>
      {/* Video Section */}
      <div className="relative h-screen w-full overflow-hidden">
        {/* Video Background */}
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src={process.env.S3_HOME_CAROUSEL_URL} type="video/mp4" />
          {/* Fallback image if video doesn't load */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-400 to-blue-600" />
        </video>

        {/* Video Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-20" />

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white z-10">
          <Heading level="h1" className="text-4xl md:text-6xl font-light mb-4 tracking-wide">
            Ride the Wave
          </Heading>
          <p className="text-lg md:text-xl mb-8 max-w-2xl px-4 font-light">
            Premium surfboards crafted for the ultimate surfing experience
          </p>
          <LocalizedClientLink href="/store">
            <Button variant="secondary" className="bg-white text-black hover:bg-gray-100 px-8 py-3 text-lg font-medium">
              Shop Now
            </Button>
          </LocalizedClientLink>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 -ml-4 text-white animate-bounce">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </>
  )
}

export default Carousel
