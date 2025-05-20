import http from "http";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import validator from 'validator'; 


dotenv.config()



const sendEmailFun = async ({ sendTo, subject, text, html }) => {
    if (!sendTo || !subject || !html) {
        throw new Error("Missing required email parameters.");
    }

    
    if (!validator.isEmail(sendTo)) {
        throw new Error("Invalid recipient email address.");
    }

   
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
        return { success: true, info };
    } catch (error) {
        console.error("Error sending email:", error);
        return { success: false, error: error.message };
    }
};

export default sendEmailFun;

