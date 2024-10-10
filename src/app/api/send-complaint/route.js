import nodemailer from "nodemailer"

export async function  POST(req) {
    try{
        console.log("Reached in backend");
        const { name,email,phone,complaint,complaintType,additionalInfo,} = await req.json()
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,
            },
        });

        const info = await transporter.sendMail({
            from: process.env.MAIL_USER,
            to: email,
            subject: "We Have Received Your Complaint!",
            html: `
                <h1 style="color:blue; font-size:2rem">MV Councellor & Physiologist</h1>
                <img src="https://res.cloudinary.com/dujly8wyv/image/upload/v1728596861/FileUpload1/gstzmnjssn5tihpjjdii.png" style="width:150px ; height:80px" >
                <p>Dear <strong>${name}</strong>,</p>
                <p>Thank you for reaching out to us! We have received your complaint details and will get back to you shortly.</p>
                
                <h3>Your Complaint Details:</h3>
                <ul>
                    <li><strong>Email:</strong> ${email}</li>
                    <li><strong>Phone:</strong> ${phone}</li>
                    <li><strong>ComplaintType:</strong> ${complaintType}</li>
                    <li><strong>Complaint Description:</strong> ${complaint}</li>
                    ${additionalInfo && `<li><strong>Additional Info:</strong> ${additionalInfo}</li>`}
   
                </ul>
                
                <p style="margin: 5px;">If you have any urgent questions, feel free to reply to this email.</p>
                <p style="margin: 5px;">You Have a Nice Day!</p>
                <p style="margin: 5px;">© 2024 MV Councellor & Physiologist</p>
            `,
        });
        return new Response(
            JSON.stringify({
                success: true,
                info: info,
                message: "Successfully email sent",
            }),
            { status: 201 }
        );

    }
    catch (err) {
        console.error('Error occurred:', err);
        return new Response(
            JSON.stringify({
                success: false,
                error: err,
                message: "Unable to send email",
            }),
            { status: 500 }
        );
    }
    
}