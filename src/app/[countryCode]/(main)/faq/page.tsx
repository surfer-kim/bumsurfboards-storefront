import { Heading, Text } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Frequently Asked Questions",
    description: "Find answers to common questions about our surfboards, ordering, and services.",
}

export default function FAQPage() {
    const faqData = [
        {
            category: "Surfboards & Products",
            questions: [
                {
                    question: "What's the difference between your surfboard types?",
                    answer:
                        "Our longboards (9'+ feet) are perfect for beginners and cruising, offering stability and easy wave catching. Shortboards (5'6\"-7' feet) are designed for performance surfing with quick turns and maneuvers. Soft-top hybrids combine the forgiveness of foam construction with performance features, ideal for intermediate surfers.",
                },
                {
                    question: "How do I choose the right board size?",
                    answer:
                        "Board size depends on your weight, height, skill level, and surfing style. As a general rule: beginners should choose boards 2-3 feet taller than their height with more volume, while experienced surfers can go shorter. Our team offers free consultations to help you find your perfect match - just give us a call!",
                },
                {
                    question: "Do you offer custom board shaping?",
                    answer:
                        "We specialize in custom boards tailored to your exact specifications. Our master shapers work with you to create a board that matches your surfing style, local wave conditions, and personal preferences. Custom orders typically take 4-6 weeks and require a 50% deposit.",
                },
                {
                    question: "What materials do you use in your boards?",
                    answer:
                        "We use premium materials including high-density EPS foam cores, fiberglass cloth, and eco-friendly epoxy resins. Our soft-tops feature durable EVA foam decks. All our boards are hand-laminated for superior strength and performance. We're committed to using sustainable materials whenever possible.",
                },
            ],
        },
        {
            category: "Ordering & Payment",
            questions: [
                {
                    question: "How do I place an order?",
                    answer:
                        "You can order directly through our website, visit our shaping bay, or call us at (555) WAVE-RIDE. For custom boards, we recommend scheduling a consultation first. We accept all major credit cards, PayPal, and offer financing options for purchases over $500.",
                },
                {
                    question: "Do you offer payment plans?",
                    answer:
                        "Yes! We offer 0% interest payment plans for purchases over $500. You can split your payment into 3, 6, or 12 monthly installments. Custom boards can be paid in two installments: 50% deposit when ordering and 50% upon completion.",
                },
                {
                    question: "Can I modify or cancel my order?",
                    answer:
                        "Stock board orders can be modified or cancelled within 24 hours of placing the order. Custom board orders can be modified during the first week of production, but cancellations after work begins may incur a 25% restocking fee. We'll always work with you to find the best solution.",
                },
            ],
        },
        {
            category: "Repairs & Maintenance",
            questions: [
                {
                    question: "Do you repair boards not purchased from you?",
                    answer:
                        "Yes! We repair all types of surfboards regardless of where they were purchased. Our repair services include ding repair, delamination fixes, fin box repairs, and complete restorations. Most repairs are completed within 3-5 business days.",
                },
                {
                    question: "How much do repairs typically cost?",
                    answer:
                        "Repair costs vary by damage type and size. Small dings start at $25, while larger repairs or restorations can range from $75-200. We provide free estimates and will always get your approval before starting work. Many repairs can be quoted from photos sent via email.",
                },
                {
                    question: "How do I care for my surfboard?",
                    answer:
                        "Rinse your board with fresh water after each session, store it in a cool, dry place away from direct sunlight, and use a board bag for transport. Avoid leaving your board in hot cars or on hot sand. Regular waxing and checking for small dings can prevent bigger problems.",
                },
            ],
        },
        {
            category: "Store & Services",
            questions: [
                {
                    question: "Can I test ride a board before buying?",
                    answer:
                        "We offer demo sessions for most of our stock boards. Demo fees start at $25/day and can be applied toward your purchase if you buy within 7 days. We also host demo days at local breaks - follow our social media for announcements.",
                },
                {
                    question: "Do you offer surf lessons?",
                    answer:
                        "Yes! Our certified instructors offer private and group lessons for all skill levels. Lessons include board rental, wetsuit, and personalized coaching. We also offer advanced coaching for technique refinement and wave reading skills.",
                },
                {
                    question: "What's your return policy?",
                    answer:
                        "Stock boards can be returned within 30 days in original condition for a full refund. Custom boards are final sale but we guarantee your satisfaction - if there's an issue with craftsmanship, we'll make it right. Accessories can be returned within 60 days.",
                },
            ],
        },
    ]

    return (
        <div className="py-6">
            <div className="content-container">
                {/* Header */}
                <div className="text-center mb-12">
                    <Heading level="h1" className="text-4xl md:text-5xl font-light mb-4">
                        Frequently Asked Questions
                    </Heading>
                    <Text className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Got questions? We've got answers! If you don't find what you're looking for, feel free to reach out to our
                        team.
                    </Text>
                </div>

                <div className="max-w-4xl mx-auto">
                    {faqData.map((category, categoryIndex) => (
                        <div key={categoryIndex} className="mb-12">
                            <Heading level="h2" className="text-2xl font-medium mb-6 text-black-600 border-b border-blue-200 pb-2">
                                {category.category}
                            </Heading>

                            <div className="space-y-6">
                                {category.questions.map((faq, faqIndex) => (
                                    <div key={faqIndex} className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
                                        <Heading level="h3" className="text-lg font-medium mb-3 text-gray-900">
                                            {faq.question}
                                        </Heading>
                                        <Text className="text-gray-600 leading-relaxed">{faq.answer}</Text>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}

                    {/* Contact CTA */}
                    <div className="bg-blue-50 rounded-lg p-8 text-center mt-12">
                        <Heading level="h2" className="text-2xl font-light mb-4">
                            Still Have Questions?
                        </Heading>
                        <Text className="text-gray-600 mb-6">
                            Our team of surf experts is here to help! Whether you need advice on board selection, have questions about
                            our services, or want to chat about local surf conditions.
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
