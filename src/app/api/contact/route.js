import nodemailer from 'nodemailer'

export async function POST(request) {
    const data = await request.json()
    
    const { fullname, email, message } = data
    
    const user = process.env.EMAIL

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: user,
            pass: process.env.EMAIL_PASS,
        },
    });

    try {
        const mail = await transporter.sendMail({
            from: user,
            to: 'lemkhayeryassine2002@gmail.com',
            replyTo: email,
            subject: `Contact form submission from ${fullname}`,
            html: `
                <p>Fullname: ${fullname}</p>
                <p>Email: ${email}</p>
                <p>Message: ${message}</p>
            `
        })

        console.log('Message sent:', mail.messageId)

        return new Response(JSON.stringify({ message: 'Success' }))
    } catch (error) {
        console.log(error)
        new Response(JSON.stringify({
            message: 'Could not send the email! your message was not sent! Your message was not sent.'
        }))
    }
}