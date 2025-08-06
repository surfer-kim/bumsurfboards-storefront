import { Heading, Text } from "@medusajs/ui"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "About Us",
    description: "Learn about our passion for surfing and crafting premium surfboards.",
}

export default function AboutPage() {
    return (
        <div className="py-6">
            <div className="content-container">
                {/* Carousel Section */}
                <div className="relative h-96 mb-16 rounded-lg overflow-hidden">
                    <img
                        src="/about/carousel.jpg?height=400&width=1200"
                        alt="Surfboard crafting workshop"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                        <div className="text-center text-white">
                            <Heading level="h1" className="text-4xl md:text-6xl font-light mb-4">
                                Our Story
                            </Heading>
                            <Text className="text-xl font-light">Crafting waves since 1985</Text>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="max-w-4xl mx-auto">
                    {/* Introduction */}
                    <div className="mb-16 text-center">
                        <Heading level="h2" className="text-3xl font-light mb-6">
                            Passion Meets Precision
                        </Heading>
                        <Text className="text-lg text-gray-600 leading-relaxed">
                            For over three decades, we've been dedicated to creating surfboards that don't just ride waves—they become
                            an extension of the surfer. Every board we craft tells a story of passion, precision, and the endless
                            pursuit of that perfect ride.
                        </Text>
                    </div>

                    {/* Two Column Section */}
                    <div className="grid md:grid-cols-2 gap-12 mb-16">
                        <div>
                            <img
                                src="/about/about-1.jpg?height=300&width=400"
                                alt="Master craftsman shaping surfboard"
                                className="w-full h-64 object-cover rounded-lg mb-6"
                            />
                            <Heading level="h3" className="text-2xl font-light mb-4">
                                Master Craftsmanship
                            </Heading>
                            <Text className="text-gray-600 leading-relaxed">
                                Our master shapers bring decades of experience to every board. Using traditional techniques combined
                                with modern innovation, each surfboard is meticulously crafted to deliver unparalleled performance in
                                the water.
                            </Text>
                        </div>
                        <div>
                            <img
                                src="/about/about-2.jpg?height=300&width=400"
                                alt="Master craftsman shaping surfboard"
                                className="w-full h-64 object-cover rounded-lg mb-6"
                            />
                            <Heading level="h3" className="text-2xl font-light mb-4">
                                Born from the Ocean
                            </Heading>
                            <Text className="text-gray-600 leading-relaxed">
                                Our designs are inspired by the ocean itself. We study wave patterns, water dynamics, and surfer
                                movements to create boards that work in harmony with nature's most powerful force. Every curve and
                                contour serves a purpose.
                            </Text>
                        </div>
                    </div>

                    {/* Values Section */}
                    <div className="bg-gray-50 rounded-lg p-8 mb-16">
                        <Heading level="h2" className="text-3xl font-light mb-8 text-center">
                            Our Values
                        </Heading>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <Heading level="h3" className="text-xl font-medium mb-2">
                                    Performance
                                </Heading>
                                <Text className="text-gray-600">
                                    Every board is designed for optimal performance, whether you're a beginner or a pro.
                                </Text>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                        />
                                    </svg>
                                </div>
                                <Heading level="h3" className="text-xl font-medium mb-2">
                                    Sustainability
                                </Heading>
                                <Text className="text-gray-600">
                                    We're committed to protecting the oceans we love through eco-friendly practices.
                                </Text>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                        />
                                    </svg>
                                </div>
                                <Heading level="h3" className="text-xl font-medium mb-2">
                                    Community
                                </Heading>
                                <Text className="text-gray-600">
                                    We're more than a brand—we're a community of surfers united by our love for the ocean.
                                </Text>
                            </div>
                        </div>
                    </div>

                    {/* Team Section */}
                    <div className="text-center mb-16">
                        <Heading level="h2" className="text-3xl font-light mb-8">
                            Meet the Team
                        </Heading>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div>
                                <img
                                    src="/about/john-john-florence.jpg?height=250&width=250"
                                    alt="Master Shaper"
                                    className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
                                />
                                <Heading level="h3" className="text-xl font-medium mb-2">
                                    John John Florence
                                </Heading>
                                <Text className="text-gray-600 mb-2">Master Shaper & Founder</Text>
                                <Text className="text-sm text-gray-500">35+ years of shaping experience</Text>
                            </div>
                            <div>
                                <img
                                    src="/about/kelly-slater.jpg?height=250&width=250"
                                    alt="Design Director"
                                    className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
                                />
                                <Heading level="h3" className="text-xl font-medium mb-2">
                                    Kelly Slater
                                </Heading>
                                <Text className="text-gray-600 mb-2">Design Director</Text>
                                <Text className="text-sm text-gray-500">Innovation meets tradition</Text>
                            </div>
                            <div>
                                <img
                                    src="/about/kookapinto.jpg?height=250&width=250"
                                    alt="Head Craftsman"
                                    className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
                                />
                                <Heading level="h3" className="text-xl font-medium mb-2">
                                    Kookapinto
                                </Heading>
                                <Text className="text-gray-600 mb-2">Head Craftsman</Text>
                                <Text className="text-sm text-gray-500">Precision in every detail</Text>
                            </div>
                        </div>
                    </div>

                    {/* Call to Action */}
                    <div className="bg-blue-50 rounded-lg p-8 text-center">
                        <Heading level="h1" className="text-3xl font-light mb-4">
                            Ready to Find Your Perfect Board?
                        </Heading>
                        <Text className="text-lg text-gray-600 mb-6">
                            Let us help you discover the surfboard that will take your surfing to the next level.
                        </Text>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="/store" className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors">
                                Shop Surfboards
                            </a>
                            <a
                                href="/contact"
                                className="border border-black text-black px-8 py-3 rounded-lg hover:bg-black hover:text-white transition-colors"
                            >
                                Get in Touch
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
