const employerCreation = (userData) => {
  return `
 <!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
      background-color: #f2f7fc;
      margin: 0;
      padding: 40px 0;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      background-color: #ffffff;
      padding: 30px;
      border-radius: 12px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }
    .header {
      text-align: center;
      margin-bottom: 30px;
    }
    .header img {
      max-width: 150px;
      height: auto;
      margin-bottom: 10px;
    }
    h1 {
      color: #007744;
      font-size: 28px;
      text-align: center;
      margin-bottom: 30px;
    }
    p {
      font-size: 16px;
      line-height: 1.8;
      color: #4a4a4a;
      margin: 15px 0;
    }
    .credentials {
      background-color: #f2f7fc;
      padding: 15px;
      border-radius: 8px;
      margin-bottom: 30px;
      font-size: 15px;
      color: #333333;
    }
    .credentials strong {
      display: inline-block;
      min-width: 120px;
    }
    .cta-button {
      display: block;
      width: fit-content;
      margin: 30px auto;
      padding: 15px 25px;
      background-color: #007744;
      color: #ffffff;
      text-decoration: none;
      font-weight: bold;
      border-radius: 50px;
      text-align: center;
      transition: background-color 0.3s ease;
    }
    .cta-button:hover {
      background-color: #005c33;
    }
    .footer {
      margin-top: 50px;
      font-size: 12px;
      color: #777777;
      text-align: center;
      border-top: 1px solid #e5e5e5;
      padding-top: 20px;
    }
    .footer p {
      margin: 5px 0;
    }
    .footer a {
      color: #007744;
      text-decoration: none;
    }
    .footer a:hover {
      text-decoration: underline;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <img src="https://firebasestorage.googleapis.com/v0/b/tal-app-533c7.appspot.com/o/primaryLogo.png?alt=media&token=e4c75645-92d9-4098-b337-8a9b4df577b7" alt="TAL Logo">
    </div>
    <h1>Welcome to TAL, ${userData?.name}!</h1>
    <p>Your employer account has been successfully created. You can now log in to the TAL platform.</p>
    
    <p>Here are your login credentials:</p>
    
    <div class="credentials">
      <p><strong>Email:</strong> ${userData?.email}</p>
      <p><strong>Temporary Password:</strong> ${userData?.password}</p>
    </div>
    
    <p>To access your account, click the button below and log in with the provided credentials. We recommend changing your password after logging in for the first time.</p>
    
    <a href="${process?.env?.EmployerLoginURL}" class="cta-button">Log In to Your Account</a>
    
    <p>If you encounter any issues or have any questions, feel free to contact us at <a href="mailto:support@tal.com">support@tal.com</a>.</p>
    
    <p>We’re excited to have you onboard!</p>
    
    <p>Best regards,<br/>The TAL Team</p>
    
    <div class="footer">
      <p>&copy; 2024 TAL. All rights reserved.</p>
      <p>TAL</p>
    </div>
  </div>
</body>
</html>

  `;
};

export default employerCreation;
