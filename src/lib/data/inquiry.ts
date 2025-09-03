
"use server"

import { sdk } from "@lib/config"

export const sendInquiryEmail = async (
    name: string,
    email: string,
    phone: string,
    subject: string,
    message: string,
) => {
    return sdk.client
        .fetch(
            `/inquiry`,
            {
                method: "POST",
                body: {
                    name,
                    email,
                    phone,
                    subject,
                    message
                },
                headers: {
                    "Content-Type": "application/json",
                },
            })
}
