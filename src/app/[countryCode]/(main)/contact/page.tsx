"use client"

import type React from "react"

import { Button, Heading, Label, Text } from "@medusajs/ui"
import { useState } from "react"

interface FormData {
    name: string
    email: string
    phone: string
    subject: string
    message: string
}

interface ApiResponse {
    success?: boolean
    message?: string
    error?: string
    details?: string
}

export default function ContactPage() {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<{
        type: "success" | "error" | null
        message: string
    }>({ type: null, message: "" })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))

        // Clear status when user starts typing
        if (submitStatus.type) {
            setSubmitStatus({ type: null, message: "" })
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        setSubmitStatus({ type: null, message: "" })

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            })

            const data: ApiResponse = await response.json()

            if (response.ok && data.success) {
                setSubmitStatus({
                    type: "success",
                    message: data.message || "Thank you for your message! We'll get back to you soon.",
                })

                // Reset form
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    subject: "",
                    message: "",
                })
            } else {
                setSubmitStatus({
                    type: "error",
                    message: data.error || "Failed to send message. Please try again.",
                })
            }
        } catch (error) {
            console.error("Form submission error:", error)
            setSubmitStatus({
                type: "error",
                message: "Network error. Please check your connection and try again.",
            })
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className="py-6">
            <div className="content-container">
                {/* Carousel Section */}
                <div className="relative h-96 mb-16 rounded-lg overflow-hidden">
                    <img
                        src="/contact/carousel.jpg?height=400&width=1200"
                        alt="Surfboard crafting workshop"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                        <div className="text-center text-white">
                            <Heading level="h1" className="text-4xl md:text-6xl font-light mb-4">
                                Get in Touch
                            </Heading>
                            <Text className="text-xl font-light">Crafting waves since 1985</Text>
                        </div>
                    </div>
                </div>

                {/* Header */}
                <div className="text-center mb-12">
                    <Heading level="h2" className="text-3xl font-light mb-6">
                        Let's Talk Waves
                    </Heading>
                    <Text className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Ready to find your perfect board? Have questions about our craftsmanship? Whether you're a first-time surfer
                        or a seasoned pro, we're stoked to help you catch your next wave.
                    </Text>
                </div>

                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div className="bg-white rounded-lg p-8 shadow-sm border">
                            <Heading level="h2" className="text-2xl font-light mb-6">
                                Send us a Message
                            </Heading>

                            {/* Status Messages */}
                            {submitStatus.type && (
                                <div
                                    className={`mb-6 p-4 rounded-lg ${submitStatus.type === "success"
                                        ? "bg-green-50 border border-green-200 text-green-800"
                                        : "bg-red-50 border border-red-200 text-red-800"
                                        }`}
                                >
                                    <div className="flex items-center">
                                        {submitStatus.type === "success" ? (
                                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                <path
                                                    fillRule="evenodd"
                                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        ) : (
                                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                <path
                                                    fillRule="evenodd"
                                                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        )}
                                        <span className="font-medium">{submitStatus.message}</span>
                                    </div>
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <Label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                            Full Name *
                                        </Label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="Your full name"
                                            disabled={isSubmitting}
                                        />
                                    </div>
                                    <div>
                                        <Label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                            Email Address *
                                        </Label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="your@email.com"
                                            disabled={isSubmitting}
                                        />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <Label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                            Phone Number
                                        </Label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="(555) 123-4567"
                                            disabled={isSubmitting}
                                        />
                                    </div>
                                    <div>
                                        <Label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                                            Subject *
                                        </Label>
                                        <select
                                            id="subject"
                                            name="subject"
                                            required
                                            value={formData.subject}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            disabled={isSubmitting}
                                        >
                                            <option value="">Select a subject</option>
                                            <option value="general">General Inquiry</option>
                                            <option value="custom">Custom Board Request</option>
                                            <option value="repair">Board Repair</option>
                                            <option value="wholesale">Wholesale Inquiry</option>
                                            <option value="support">Customer Support</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <Label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                        Message *
                                    </Label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows={6}
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical"
                                        placeholder="Tell us about your surfing style, preferred board dimensions, or any questions you have..."
                                        disabled={isSubmitting}
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? (
                                        <div className="flex items-center justify-center">
                                            <svg
                                                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                            >
                                                <circle
                                                    className="opacity-25"
                                                    cx="12"
                                                    cy="12"
                                                    r="10"
                                                    stroke="currentColor"
                                                    strokeWidth="4"
                                                ></circle>
                                                <path
                                                    className="opacity-75"
                                                    fill="currentColor"
                                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                ></path>
                                            </svg>
                                            Sending...
                                        </div>
                                    ) : (
                                        "Send Message"
                                    )}
                                </Button>
                            </form>
                        </div>

                        {/* Contact Information */}
                        <div className="space-y-8">
                            {/* Store Information */}
                            <div className="bg-gray-50 rounded-lg p-8">
                                <Heading level="h3" className="text-xl font-medium mb-6">
                                    Visit Our Shop
                                </Heading>
                                <div className="space-y-4">
                                    <div className="flex items-start space-x-3">
                                        <svg className="w-5 h-5 text-gray-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                            />
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                            />
                                        </svg>
                                        <div>
                                            <Text className="font-medium">Address</Text>
                                            <Text className="text-gray-600">
                                                123 Ocean Boulevard
                                                <br />
                                                Surf City, CA 90210
                                            </Text>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-3">
                                        <svg className="w-5 h-5 text-gray-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                            />
                                        </svg>
                                        <div>
                                            <Text className="font-medium">Phone</Text>
                                            <Text className="text-gray-600">(555) SURF-123</Text>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-3">
                                        <svg className="w-5 h-5 text-gray-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                            />
                                        </svg>
                                        <div>
                                            <Text className="font-medium">Email</Text>
                                            <Text className="text-gray-600">info@bumsurfboards.com</Text>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Store Hours */}
                            <div className="bg-blue-50 rounded-lg p-8">
                                <Heading level="h3" className="text-xl font-medium mb-6">
                                    Store Hours
                                </Heading>
                                <div className="space-y-2">
                                    <div className="flex justify-between">
                                        <Text>Monday - Friday</Text>
                                        <Text className="font-medium">9:00 AM - 7:00 PM</Text>
                                    </div>
                                    <div className="flex justify-between">
                                        <Text>Saturday</Text>
                                        <Text className="font-medium">8:00 AM - 8:00 PM</Text>
                                    </div>
                                    <div className="flex justify-between">
                                        <Text>Sunday</Text>
                                        <Text className="font-medium">10:00 AM - 6:00 PM</Text>
                                    </div>
                                </div>
                            </div>

                            {/* Services */}
                            <div className="bg-orange-50 rounded-lg p-8">
                                <Heading level="h3" className="text-xl font-medium mb-6">
                                    Our Services
                                </Heading>
                                <ul className="space-y-3">
                                    <li className="flex items-center space-x-3">
                                        <svg className="w-5 h-5 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        <Text>Custom Surfboard Shaping</Text>
                                    </li>
                                    <li className="flex items-center space-x-3">
                                        <svg className="w-5 h-5 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        <Text>Board Repairs & Ding Fixes</Text>
                                    </li>
                                    <li className="flex items-center space-x-3">
                                        <svg className="w-5 h-5 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        <Text>Fin Setup & Tuning</Text>
                                    </li>
                                    <li className="flex items-center space-x-3">
                                        <svg className="w-5 h-5 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        <Text>Surfing Lessons</Text>
                                    </li>
                                    <li className="flex items-center space-x-3">
                                        <svg className="w-5 h-5 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        <Text>Board Rentals</Text>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
