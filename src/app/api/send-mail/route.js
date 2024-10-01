import nodemailer from "nodemailer"


export async function POST (req){
    try{
        const {email,description}=await req.json()
        const transporter = nodemailer.createTransport({
            service:"gmail",
            auth:{
                user:process.env.MAIL_USER,
                pass:process.env.MAIL_PASS
            }
        })
        const info = await transporter.sendMail({
            from:process.env.MAIL_USER,
            to:email,
            subject:"Notice",
            html:`
            <h1 style="color:blue" >OfficialRishiTeam</h1>
            <img 
            src="https://picsum.photos/200/300"/>
            <p>Your Message: <strong> ${description}</strong> </p>
            <p style="margin:5 px">You Have a Nice Day Sir</p>

            <p style="margin:5 px">© 2024 officialRishiTeam</p>
            `
            
        })
        return new Response (JSON.stringify({
            success:true,
            info:info,
            message:"SuccessFully email sent"
        }),{status:201})
    }
    catch(err){
        return new Response (JSON.stringify({
            success:false,
            error:err,
            message:"Unable to sent email "
        }),{status:500})
    }
}