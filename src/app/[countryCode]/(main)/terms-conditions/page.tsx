import { Heading, Text } from "@medusajs/ui"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Terms & Conditions",
    description: "Read our terms and conditions for using our website and purchasing our products.",
}

export default function TermsPage() {
    const lastUpdateDate = new Date("2025/07/30")
    return (
        <div className="py-6">
            <div className="content-container">
                {/* Header */}
                <div className="text-center mb-12">
                    <Heading level="h1" className="text-4xl md:text-5xl font-light mb-4">
                        Terms & Conditions
                    </Heading>
                    <Text className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Please read these terms and conditions carefully before using our website or purchasing our products.
                    </Text>
                    <Text className="text-sm text-gray-500 mt-4">
                        Last updated: {lastUpdateDate.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                    </Text>
                </div>

                <div className="max-w-4xl mx-auto prose prose-lg">
                    {/* Agreement */}
                    <section className="mb-12">
                        <Heading level="h2" className="text-2xl font-medium mb-4 text-black-600">
                            1. Agreement to Terms
                        </Heading>
                        <Text className="text-gray-700 leading-relaxed mb-4">
                            By accessing and using this website, you accept and agree to be bound by the terms and provision of this
                            agreement. If you do not agree to abide by the above, please do not use this service.
                        </Text>
                        <Text className="text-gray-700 leading-relaxed">
                            These Terms and Conditions ("Terms") govern your use of our website located at medusaboards.com (the
                            "Service") operated by Medusa Surfboards ("us", "we", or "our").
                        </Text>
                    </section>

                    {/* Products and Services */}
                    <section className="mb-12">
                        <Heading level="h2" className="text-2xl font-medium mb-4 text-black-600">
                            2. Products and Services
                        </Heading>
                        <div className="space-y-4">
                            <div>
                                <Heading level="h3" className="text-lg font-medium mb-2">
                                    Product Information
                                </Heading>
                                <Text className="text-gray-700 leading-relaxed">
                                    We strive to provide accurate product descriptions, specifications, and pricing. However, we do not
                                    warrant that product descriptions or other content is accurate, complete, reliable, current, or
                                    error-free. Colors and dimensions may vary slightly from those shown on your screen.
                                </Text>
                            </div>
                            <div>
                                <Heading level="h3" className="text-lg font-medium mb-2">
                                    Custom Orders
                                </Heading>
                                <Text className="text-gray-700 leading-relaxed">
                                    Custom surfboard orders are subject to additional terms. All custom orders require a 50% deposit and
                                    are considered final sale once production begins. Estimated completion times are approximate and may
                                    vary based on complexity and current order volume.
                                </Text>
                            </div>
                        </div>
                    </section>

                    {/* Pricing and Payment */}
                    <section className="mb-12">
                        <Heading level="h2" className="text-2xl font-medium mb-4 text-black-600">
                            3. Pricing and Payment
                        </Heading>
                        <div className="space-y-4">
                            <Text className="text-gray-700 leading-relaxed">
                                All prices are listed in USD and are subject to change without notice. We reserve the right to modify
                                prices at any time, but price changes will not affect orders that have already been confirmed.
                            </Text>
                            <Text className="text-gray-700 leading-relaxed">
                                Payment is due at the time of order placement unless other arrangements have been made. We accept major
                                credit cards, PayPal, and offer financing options for qualified purchases. All transactions are
                                processed securely through encrypted payment gateways.
                            </Text>
                            <Text className="text-gray-700 leading-relaxed">
                                Sales tax will be added to orders as required by applicable law. International orders may be subject to
                                customs duties and taxes, which are the responsibility of the customer.
                            </Text>
                        </div>
                    </section>

                    {/* Shipping and Delivery */}
                    <section className="mb-12">
                        <Heading level="h2" className="text-2xl font-medium mb-4 text-black-600">
                            4. Shipping and Delivery
                        </Heading>
                        <div className="space-y-4">
                            <Text className="text-gray-700 leading-relaxed">
                                Shipping times are estimates and not guaranteed. We are not responsible for delays caused by shipping
                                carriers, weather conditions, or other circumstances beyond our control.
                            </Text>
                            <Text className="text-gray-700 leading-relaxed">
                                Risk of loss and title for items purchased pass to you upon delivery to the shipping carrier. We
                                recommend purchasing shipping insurance for high-value items.
                            </Text>
                            <Text className="text-gray-700 leading-relaxed">
                                You are responsible for providing accurate shipping information. Additional charges may apply for
                                address corrections or redelivery attempts.
                            </Text>
                        </div>
                    </section>

                    {/* Returns and Refunds */}
                    <section className="mb-12">
                        <Heading level="h2" className="text-2xl font-medium mb-4 text-black-600">
                            5. Returns and Refunds
                        </Heading>
                        <div className="space-y-4">
                            <Text className="text-gray-700 leading-relaxed">
                                Returns must be initiated within the specified return period for each product category. Items must be
                                returned in original condition with all original packaging and accessories.
                            </Text>
                            <Text className="text-gray-700 leading-relaxed">
                                Refunds will be processed to the original payment method within 5-10 business days after we receive and
                                inspect the returned item. Shipping costs are non-refundable unless the return is due to our error.
                            </Text>
                            <Text className="text-gray-700 leading-relaxed">
                                Custom orders and personalized items are final sale and cannot be returned unless there is a
                                manufacturing defect.
                            </Text>
                        </div>
                    </section>

                    {/* Warranty and Liability */}
                    <section className="mb-12">
                        <Heading level="h2" className="text-2xl font-medium mb-4 text-black-600">
                            6. Warranty and Limitation of Liability
                        </Heading>
                        <div className="space-y-4">
                            <div>
                                <Heading level="h3" className="text-lg font-medium mb-2">
                                    Product Warranty
                                </Heading>
                                <Text className="text-gray-700 leading-relaxed">
                                    Our surfboards come with a limited warranty against manufacturing defects for one year from the date
                                    of purchase. This warranty does not cover normal wear and tear, damage from misuse, or damage caused
                                    by accidents.
                                </Text>
                            </div>
                            <div>
                                <Heading level="h3" className="text-lg font-medium mb-2">
                                    Limitation of Liability
                                </Heading>
                                <Text className="text-gray-700 leading-relaxed">
                                    Surfing involves inherent risks. We are not liable for any injuries or damages that may occur while
                                    using our products. Our liability is limited to the purchase price of the product. We recommend proper
                                    training and safety precautions when surfing.
                                </Text>
                            </div>
                        </div>
                    </section>

                    {/* Intellectual Property */}
                    <section className="mb-12">
                        <Heading level="h2" className="text-2xl font-medium mb-4 text-black-600">
                            7. Intellectual Property
                        </Heading>
                        <Text className="text-gray-700 leading-relaxed mb-4">
                            All content on this website, including but not limited to text, graphics, logos, images, and software, is
                            the property of Medusa Surfboards and is protected by copyright and other intellectual property laws.
                        </Text>
                        <Text className="text-gray-700 leading-relaxed">
                            You may not reproduce, distribute, modify, or create derivative works of our content without express
                            written permission. Our trademarks and trade names may not be used without our prior written consent.
                        </Text>
                    </section>

                    {/* Privacy */}
                    <section className="mb-12">
                        <Heading level="h2" className="text-2xl font-medium mb-4 text-black-600">
                            8. Privacy and Data Protection
                        </Heading>
                        <Text className="text-gray-700 leading-relaxed mb-4">
                            We respect your privacy and are committed to protecting your personal information. Our Privacy Policy,
                            which is incorporated into these Terms, explains how we collect, use, and protect your information.
                        </Text>
                        <Text className="text-gray-700 leading-relaxed">
                            By using our website, you consent to the collection and use of your information as described in our
                            Privacy Policy.
                        </Text>
                    </section>

                    {/* User Conduct */}
                    <section className="mb-12">
                        <Heading level="h2" className="text-2xl font-medium mb-4 text-black-600">
                            9. User Conduct
                        </Heading>
                        <Text className="text-gray-700 leading-relaxed mb-4">
                            You agree to use our website only for lawful purposes and in accordance with these Terms. You may not:
                        </Text>
                        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                            <li>Use the website in any way that violates applicable laws or regulations</li>
                            <li>Transmit any harmful, offensive, or inappropriate content</li>
                            <li>Attempt to gain unauthorized access to our systems</li>
                            <li>Interfere with the proper functioning of the website</li>
                            <li>Use automated systems to access or collect data from the website</li>
                        </ul>
                    </section>

                    {/* Modifications */}
                    <section className="mb-12">
                        <Heading level="h2" className="text-2xl font-medium mb-4 text-black-600">
                            10. Modifications to Terms
                        </Heading>
                        <Text className="text-gray-700 leading-relaxed mb-4">
                            We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting
                            on our website. Your continued use of the website after changes are posted constitutes acceptance of the
                            modified Terms.
                        </Text>
                        <Text className="text-gray-700 leading-relaxed">
                            We encourage you to review these Terms periodically to stay informed of any updates.
                        </Text>
                    </section>

                    {/* Governing Law */}
                    <section className="mb-12">
                        <Heading level="h2" className="text-2xl font-medium mb-4 text-black-600">
                            11. Governing Law and Disputes
                        </Heading>
                        <Text className="text-gray-700 leading-relaxed mb-4">
                            These Terms are governed by the laws of the State of California, without regard to conflict of law
                            principles. Any disputes arising from these Terms or your use of our website will be resolved through
                            binding arbitration in California.
                        </Text>
                        <Text className="text-gray-700 leading-relaxed">
                            If any provision of these Terms is found to be unenforceable, the remaining provisions will remain in full
                            force and effect.
                        </Text>
                    </section>

                    {/* Contact Information */}
                    <section className="mb-12">
                        <Heading level="h2" className="text-2xl font-medium mb-4 text-black-600">
                            12. Contact Information
                        </Heading>
                        <Text className="text-gray-700 leading-relaxed mb-4">
                            If you have any questions about these Terms and Conditions, please contact us:
                        </Text>
                        <div className="bg-gray-50 rounded-lg p-6">
                            <div className="space-y-2">
                                <Text className="font-medium">Bumsurfboards</Text>
                                <Text className="text-gray-600">123 Surf Avenue</Text>
                                <Text className="text-gray-600">Pipeline Beach, CA 90210</Text>
                                <Text className="text-gray-600">Phone: (555) WAVE-RIDE</Text>
                                <Text className="text-gray-600">Email: legal@medusaboards.com</Text>
                            </div>
                        </div>
                    </section>

                    {/* Acknowledgment */}
                    <div className="bg-blue-50 rounded-lg p-8 text-center">
                        <Heading level="h3" className="text-xl font-medium mb-4">
                            Acknowledgment
                        </Heading>
                        <Text className="text-gray-700">
                            By using our website and services, you acknowledge that you have read, understood, and agree to be bound
                            by these Terms and Conditions.
                        </Text>
                    </div>
                </div>
            </div>
        </div>
    )
}
