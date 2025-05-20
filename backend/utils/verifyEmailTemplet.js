const verifycationEmail = (username, otp) => {
  return `
    <div style="font-family:sans-serif; max-width:600px; margin:0 auto;">
      <h2>Welcome, ${username}!</h2>
      <p>Thanks for registering on our e-commerce platform.</p>
      <p>Your verification code is:${otp}</p>
      <h3 style="background:#f4f4f4; padding:10px; border-radius:5px; display:inline-block;">${otp}</h3>
      <p>This code will expire in 10 minutes.</p>
      <p>If you did not request this, please ignore this email.</p>
    </div>
  `;
};

export default verifycationEmail;
