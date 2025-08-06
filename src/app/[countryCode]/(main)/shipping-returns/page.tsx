import { Heading, Text } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Shipping & Returns",
    description: "Learn about our shipping options, return policy, and how we handle exchanges.",
}

export default function ShippingReturnsPage() {
    return (
        <div className="py-6">
            <div className="content-container">
                {/* Header */}
                <div className="text-center mb-12">
                    <Heading level="h1" className="text-4xl md:text-5xl font-light mb-4">
                        Shipping & Returns
                    </Heading>
                    <Text className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Everything you need to know about getting your gear delivered and our hassle-free return process.
                    </Text>
                </div>

                <div className="max-w-4xl mx-auto space-y-12">
                    {/* Shipping Information */}
                    <section>
                        <Heading level="h2" className="text-3xl font-light mb-6 text-black-600">
                            Shipping Information
                        </Heading>

                        <div className="grid md:grid-cols-2 gap-8 mb-8">
                            <div className="bg-white rounded-lg border border-gray-200 p-6">
                                <Heading level="h3" className="text-xl font-medium mb-4 flex items-center">
                                    <svg className="w-6 h-6 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    Free Shipping
                                </Heading>
                                <Text className="text-gray-600 mb-4">
                                    Free standard shipping on all orders over $150 within the continental US.
                                </Text>
                                <ul className="text-sm text-gray-500 space-y-1">
                                    <li>• 5-7 business days delivery</li>
                                    <li>• Tracking number provided</li>
                                    <li>• Signature required for boards</li>
                                </ul>
                            </div>

                            <div className="bg-white rounded-lg border border-gray-200 p-6">
                                <Heading level="h3" className="text-xl font-medium mb-4 flex items-center">
                                    <svg className="w-6 h-6 text-black-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                    Express Shipping
                                </Heading>
                                <Text className="text-gray-600 mb-4">Need your gear fast? We offer expedited shipping options.</Text>
                                <ul className="text-sm text-gray-500 space-y-1">
                                    <li>• 2-3 business days: $25</li>
                                    <li>• Next day: $45</li>
                                    <li>• Available for most items</li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-orange-50 rounded-lg p-6 mb-8">
                            <Heading level="h3" className="text-lg font-medium mb-3 text-orange-800">
                                Surfboard Shipping
                            </Heading>
                            <Text className="text-orange-700 mb-4">
                                Surfboards require special handling and packaging to ensure they arrive in perfect condition.
                            </Text>
                            <div className="grid md:grid-cols-2 gap-4 text-sm">
                                <div>
                                    <Text className="font-medium text-orange-800 mb-2">Packaging:</Text>
                                    <ul className="text-orange-700 space-y-1">
                                        <li>• Professional board bags included</li>
                                        <li>• Extra foam padding for protection</li>
                                        <li>• Reinforced cardboard boxing</li>
                                    </ul>
                                </div>
                                <div>
                                    <Text className="font-medium text-orange-800 mb-2">Delivery:</Text>
                                    <ul className="text-orange-700 space-y-1">
                                        <li>• Freight shipping for boards over 9'</li>
                                        <li>• Appointment scheduling available</li>
                                        <li>• Inspection upon delivery recommended</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-50 rounded-lg p-6">
                            <Heading level="h3" className="text-lg font-medium mb-3">
                                International Shipping
                            </Heading>
                            <Text className="text-gray-600 mb-4">
                                We ship worldwide! International shipping rates and delivery times vary by destination.
                            </Text>
                            <ul className="text-sm text-gray-600 space-y-2">
                                <li>• Canada: 7-10 business days, starting at $35</li>
                                <li>• Europe: 10-14 business days, starting at $65</li>
                                <li>• Australia/NZ: 12-16 business days, starting at $85</li>
                                <li>• Other destinations: Contact us for quote</li>
                                <li>• Customs duties and taxes are buyer's responsibility</li>
                            </ul>
                        </div>
                    </section>

                    {/* Returns & Exchanges */}
                    <section>
                        <Heading level="h2" className="text-3xl font-light mb-6 text-black-600">
                            Returns & Exchanges
                        </Heading>

                        <div className="bg-green-50 rounded-lg p-6 mb-8">
                            <Heading level="h3" className="text-xl font-medium mb-3 text-green-800">
                                Our Promise
                            </Heading>
                            <Text className="text-green-700 text-lg">
                                We want you to be 100% stoked with your purchase. If you're not completely satisfied, we'll make it
                                right with our hassle-free return and exchange policy.
                            </Text>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 mb-8">
                            <div>
                                <Heading level="h3" className="text-xl font-medium mb-4">
                                    Return Policy
                                </Heading>
                                <div className="space-y-4">
                                    <div className="border-l-4 border-blue-500 pl-4">
                                        <Text className="font-medium">Stock Surfboards</Text>
                                        <Text className="text-gray-600 text-sm">30 days return window, full refund if unused</Text>
                                    </div>
                                    <div className="border-l-4 border-orange-500 pl-4">
                                        <Text className="font-medium">Accessories & Gear</Text>
                                        <Text className="text-gray-600 text-sm">60 days return window, original packaging required</Text>
                                    </div>
                                    <div className="border-l-4 border-red-500 pl-4">
                                        <Text className="font-medium">Custom Boards</Text>
                                        <Text className="text-gray-600 text-sm">Final sale, but we guarantee craftsmanship quality</Text>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <Heading level="h3" className="text-xl font-medium mb-4">
                                    Exchange Policy
                                </Heading>
                                <Text className="text-gray-600 mb-4">
                                    Not quite the right fit? We offer free exchanges within 30 days for stock items.
                                </Text>
                                <ul className="text-sm text-gray-600 space-y-2">
                                    <li>• Size exchanges: Free within 30 days</li>
                                    <li>• Model exchanges: Subject to price difference</li>
                                    <li>• One exchange per item</li>
                                    <li>• Item must be in original condition</li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg border border-gray-200 p-6">
                            <Heading level="h3" className="text-xl font-medium mb-4">
                                How to Return or Exchange
                            </Heading>
                            <div className="grid md:grid-cols-3 gap-6">
                                <div className="text-center">
                                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                        <span className="text-black-600 font-bold">1</span>
                                    </div>
                                    <Text className="font-medium mb-2">Contact Us</Text>
                                    <Text className="text-sm text-gray-600">
                                        Email us at returns@medusaboards.com or call (555) WAVE-RIDE to initiate your return.
                                    </Text>
                                </div>
                                <div className="text-center">
                                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                        <span className="text-black-600 font-bold">2</span>
                                    </div>
                                    <Text className="font-medium mb-2">Pack & Ship</Text>
                                    <Text className="text-sm text-gray-600">
                                        We'll send you a prepaid return label. Pack your item securely and drop it off.
                                    </Text>
                                </div>
                                <div className="text-center">
                                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                        <span className="text-black-600 font-bold">3</span>
                                    </div>
                                    <Text className="font-medium mb-2">Get Refunded</Text>
                                    <Text className="text-sm text-gray-600">
                                        Once we receive your return, we'll process your refund within 3-5 business days.
                                    </Text>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Warranty */}
                    <section>
                        <Heading level="h2" className="text-3xl font-light mb-6 text-black-600">
                            Warranty & Guarantee
                        </Heading>

                        <div className="bg-white rounded-lg border border-gray-200 p-6">
                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <Heading level="h3" className="text-xl font-medium mb-4">
                                        Craftsmanship Guarantee
                                    </Heading>
                                    <Text className="text-gray-600 mb-4">
                                        All our surfboards come with a 1-year warranty against manufacturing defects.
                                    </Text>
                                    <ul className="text-sm text-gray-600 space-y-2">
                                        <li>• Delamination coverage</li>
                                        <li>• Fin box defects</li>
                                        <li>• Structural integrity issues</li>
                                        <li>• Free repair or replacement</li>
                                    </ul>
                                </div>
                                <div>
                                    <Heading level="h3" className="text-xl font-medium mb-4">
                                        What's Not Covered
                                    </Heading>
                                    <Text className="text-gray-600 mb-4">
                                        Normal wear and tear from regular use is not covered by warranty.
                                    </Text>
                                    <ul className="text-sm text-gray-600 space-y-2">
                                        <li>• Dings from impact</li>
                                        <li>• UV damage from sun exposure</li>
                                        <li>• Pressure dents</li>
                                        <li>• Cosmetic scratches</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Contact */}
                    <div className="bg-blue-50 rounded-lg p-8 text-center">
                        <Heading level="h2" className="text-2xl font-light mb-4">
                            Questions About Shipping or Returns?
                        </Heading>
                        <Text className="text-gray-600 mb-6">
                            Our customer service team is here to help with any shipping or return questions.
                        </Text>
                        <LocalizedClientLink className="flex flex-col sm:flex-row gap-4 justify-center" href="/contact">
                            <div className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors">
                                Contact Us
                            </div>
                        </LocalizedClientLink>
                    </div>
                </div>
            </div>
        </div>
    )
}
