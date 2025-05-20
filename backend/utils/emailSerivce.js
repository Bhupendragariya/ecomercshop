import http from "http";
import nodemailer from "nodemailer";
import dotenv from "dotenv"


dotenv.config()



const sendEmailFun = async ({ sendTo, subject, text, html }) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL, 
            pass: process.env.EMAIL_PASS, 
        },
    });

    const mailOptions = {
        from: process.env.EMAIL,  
        to: sendTo,                   
        subject,
        text,
        html,
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log("Email sent: " + info.response);
        return info;
    } catch (error) {
        console.error("Error sending email:", error);
        throw error; 
    }
};

export default sendEmailFun;
