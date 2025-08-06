import { Resend } from "resend"

if (!process.env.RESEND_API_KEY) {
  throw new Error("RESEND_API_KEY environment variable is required")
}

export const resend = new Resend(process.env.RESEND_API_KEY)

export interface ContactFormData {
  name: string
  email: string
  phone?: string
  subject: string
  message: string
}

export async function sendContactEmail(data: ContactFormData) {
  try {
    const { data: emailData, error } = await resend.emails.send({
      from: process.env.RESEND_FROM!,
      to: [process.env.RESEND_TO!],
      replyTo: data.email,
      subject: `New Contact Form Submission: ${data.subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #495057; margin-top: 0;">Contact Details</h3>
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            ${data.phone ? `<p><strong>Phone:</strong> ${data.phone}</p>` : ""}
            <p><strong>Subject:</strong> ${data.subject}</p>
          </div>
          
          <div style="background-color: #fff; padding: 20px; border: 1px solid #dee2e6; border-radius: 8px;">
            <h3 style="color: #495057; margin-top: 0;">Message</h3>
            <p style="line-height: 1.6; color: #333;">${data.message.replace(/\n/g, "<br>")}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #e9ecef; border-radius: 8px; font-size: 12px; color: #6c757d;">
            <p>This email was sent from the Bumsurfboards contact form.</p>
            <p>Submitted at: ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `,
    })

    if (error) {
      console.error("Resend error:", error)
      throw new Error("Failed to send email")
    }

    return { success: true, data: emailData }
  } catch (error) {
    console.error("Email sending error:", error)
    throw error
  }
}

export async function sendContactConfirmation(data: ContactFormData) {
  try {
    const storeUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/store`
    const { data: emailData, error } = await resend.emails.send({
      from: process.env.RESEND_FROM!, // Replace with your verified domain
      to: [data.email],
      subject: "Thank you for contacting Bumsurfboards",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
            Thank You for Reaching Out!
          </h2>
          
          <p style="font-size: 16px; line-height: 1.6; color: #333;">
            Hi ${data.name},
          </p>
          
          <p style="font-size: 16px; line-height: 1.6; color: #333;">
            Thank you for contacting Bumsurfboards! We've received your message and will get back to you within 24 hours.
          </p>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #495057; margin-top: 0;">Your Message Summary</h3>
            <p><strong>Subject:</strong> ${data.subject}</p>
            <p><strong>Message:</strong></p>
            <p style="font-style: italic; color: #666;">"${data.message}"</p>
          </div>
          
          <p style="font-size: 16px; line-height: 1.6; color: #333;">
            In the meantime, feel free to browse our collection of premium surfboards or check out our latest blog posts about surfing techniques and board care.
          </p>
          
          <div style="text-align: center; margin: 30px 0;">
            <a href="${storeUrl}" style="background-color: #007bff; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">
              Browse Our Surfboards
            </a>
          </div>
          
          <div style="margin-top: 30px; padding: 20px; background-color: #e9ecef; border-radius: 8px;">
            <h4 style="color: #495057; margin-top: 0;">Contact Information</h4>
            <p style="margin: 5px 0;"><strong>Phone:</strong> (555) SURF-123</p>
            <p style="margin: 5px 0;"><strong>Email:</strong> info@bumsurfboards.com</p>
            <p style="margin: 5px 0;"><strong>Address:</strong> 123 Ocean Boulevard, Surf City, CA 90210</p>
          </div>
          
          <div style="margin-top: 20px; text-align: center; font-size: 12px; color: #6c757d;">
            <p>Crafting waves since 1985</p>
            <p>© ${new Date().getFullYear()} Bumsurfboards. All rights reserved.</p>
          </div>
        </div>
      `,
    })

    if (error) {
      throw new Error("Failed to send confirmation email")
    }

    return { success: true, data: emailData }
  } catch (error) {
    throw error
  }
}