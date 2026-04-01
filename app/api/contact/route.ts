import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
    console.log("🚀 API Route Hit: /api/contact"); // Pata chalega ke request aayi hai ya nahi

    try {
        // Step 1: Check Environment Variables
        console.log("🔍 Checking Environment Variables...");
        if (!process.env.GMAIL_USER || !process.env.GMAIL_PASS) {
            console.error("❌ ERROR: GMAIL_USER ya GMAIL_PASS missing hai!");
        } else {
            console.log("✅ Environment Variables mil gaye hain.");
        }

        // Step 2: Receive Data
        const { name, email, message } = await req.json();
        console.log("📦 Payload Received:", { name, email, message });

        if (!name || !email || !message) {
            console.log("⚠️ Validation Failed: Koi field khali hai.");
            return NextResponse.json(
                { message: "All fields are required" },
                { status: 400 }
            );
        }

        // Step 3: Create Transporter
        console.log("⚙️ Creating Nodemailer transporter...");
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_PASS,
            },
        });

        const mailOptions = {
            from: email,
            to: process.env.GMAIL_USER,
            subject: `New Portfolio Message from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
            html: `<h3>New Portfolio Message</h3><p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong></p><p>${message}</p>`,
        };

        // Step 4: Send Email
        console.log("⏳ Sending email...");
        await transporter.sendMail(mailOptions);
        console.log("✅ Email sent successfully!");

        return NextResponse.json(
            { message: "Email sent successfully" },
            { status: 200 }
        );
    } catch (error) {
        // Step 5: Catch Errors
        console.error("❌ Nodemailer Error Detail:", error);
        return NextResponse.json(
            { message: "Failed to send email" },
            { status: 500 }
        );
    }
}