import { sendContactConfirmation, sendContactEmail, type ContactFormData } from "@lib/email/resend"
import { NextResponse, type NextRequest } from "next/server"

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()

        // Validate required fields
        const { name, email, subject, message } = body

        if (!name || !email || !subject || !message) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(email)) {
            return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
        }

        const contactData: ContactFormData = {
            name: name.trim(),
            email: email.trim().toLowerCase(),
            phone: body.phone?.trim() || undefined,
            subject: subject.trim(),
            message: message.trim(),
        }

        // Send email to business
        await sendContactEmail(contactData)

        // Send confirmation email to customer
        await sendContactConfirmation(contactData)

        return NextResponse.json(
            {
                success: true,
                message: "Your message has been sent successfully! We'll get back to you soon.",
            },
            { status: 200 },
        )
    } catch (error) {
        console.error("Contact form error:", error)

        return NextResponse.json(
            {
                error: "Failed to send message. Please try again later or contact us directly.",
                details: error instanceof Error ? error.message : "Unknown error",
            },
            { status: 500 },
        )
    }
}
