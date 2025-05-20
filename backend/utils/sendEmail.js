import sendEmail from "./emailSerivce.js";

const sendEmailFun = async (to, subject, text, html) => {
  try {
    const result = await sendEmail(to, subject, text, html);
    return result.success === true;
  } catch (error) {
    console.error("Email send failed:", error.message);
    return false;
  }
};

export default sendEmailFun;
