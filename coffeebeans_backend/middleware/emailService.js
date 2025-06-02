import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.hostinger.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_COFFEEBENS,
    pass: process.env.PASS_FOR_EMAIL_COFFEEBENS,
  },
});

export const sendRegistrationEmail = async (email, name) => {
  await transporter.sendMail({
    from: `"Coffee Beans" <${process.env.EMAIL_COFFEEBENS}>`,
    to: email,
    subject: "Welcome to Coffee Beans!",
    html: `<p>Hello ${name},</p>
            <p>Your account has been successfully created 🎉</p>
            <p>We're excited to have you with us at <strong>CoffeeBeans</strong>!</p>
            <p>If you have any questions or need help, feel free to reach out:</p>
            <ul>
                <li>Email: <a href="mailto:info@coffeebeans.pro">info@coffeebeans.pro</a></li>
                <li>Phone: +33 6 43 69 66 94</li>
                <li>Website: <a href="https://coffeebeans.pro">coffeebeans.pro</a></li>
            </ul>
            <p>Enjoy your journey ☕<br/>— The CoffeeBeans Team</p>`,
  });
};
