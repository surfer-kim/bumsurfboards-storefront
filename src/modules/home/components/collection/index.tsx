import { Heading } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

const Collection = () => {
  return (
    <>
      {/* Product Categories Section */}
      <div className="py-16 bg-gray-50">
        <div className="content-container">
          <div className="text-center mb-12">
            <Heading level="h2" className="text-3xl md:text-4xl font-light mb-4">
              Explore Our Collection
            </Heading>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">Discover the perfect board for your surfing style</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Surfboards Category */}
            <LocalizedClientLink href="/categories/surfboards" className="group">
              <div className="relative overflow-hidden rounded-lg aspect-[4/5] bg-gray-200">
                <img
                  src="/home/collection/surfboards.jpg?height=500&width=400"
                  alt="Surfboards"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-light mb-2">Surfboards</h3>
                  <p className="text-sm opacity-90">Performance & longboards</p>
                </div>
              </div>
            </LocalizedClientLink>

            {/* Soft Top Hybrids Category */}
            <LocalizedClientLink href="/categories/clothings" className="group">
              <div className="relative overflow-hidden rounded-lg aspect-[4/5] bg-gray-200">
                <img
                  src="/home/collection/clothings.jpg?height=500&width=400"
                  alt="Clothings"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-light mb-2">Clothings</h3>
                  <p className="text-sm opacity-90">Shirts and shorts</p>
                </div>
              </div>
            </LocalizedClientLink>

            {/* Accessories Category */}
            <LocalizedClientLink href="/categories/accessories" className="group">
              <div className="relative overflow-hidden rounded-lg aspect-[4/5] bg-gray-200">
                <img
                  src="/home/collection/accessories.jpg?height=500&width=400"
                  alt="Accessories"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-light mb-2">Accessories</h3>
                  <p className="text-sm opacity-90">Fins, leashes & more</p>
                </div>
              </div>
            </LocalizedClientLink>
          </div>
        </div>
      </div>
    </>
  )
}

export default Collection
