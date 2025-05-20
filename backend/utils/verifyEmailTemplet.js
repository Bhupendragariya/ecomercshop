const verifycationEmail = ( username, otp) =>{
    return  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Email Verification</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f4f4f4;
      padding: 20px;
    }
    .email-container {
      background-color: #ffffff;
      border-radius: 10px;
      padding: 30px;
      max-width: 600px;
      margin: 0 auto;
      text-align: center;
    }
    .btn {
      background-color: #28a745;
      color: #ffffff;
      padding: 10px 20px;
      border: none;
      border-radius: 5px;
      text-decoration: none;
      font-size: 16px;
    }
    .footer {
      font-size: 12px;
      color: #888888;
      margin-top: 20px;
    }
  </style>
</head>
<body>
  <div class="email-container">
    <h2>Welcome to [Your App Name]!</h2>
    <p>Hi {{name}},</p>
    <p>Thanks for signing up with [Your App Name]! To complete your registration, please verify your email address by clicking the button below:</p>
    <a href="{{verification_link}}" class="btn">Verify Email</a>
    <p>If you did not register for an account, please ignore this email.</p>
    <div class="footer">
      <p>&copy; [Year] [Your App Name]. All rights reserved.</p>
    </div>
  </div>
</body>
</html>
`
}

export default verifycationEmail;