const nodemailer = require('nodemailer');

module.exports = class Email {
  constructor(user) {
    this.to = user.email;
    this.from = `Tours App: <${process.env.EMAIL_FROM}>`;
  }

  newTransport() {
    return nodemailer.createTransport({
      host: 'smtp.mailtrap.io',
      port: '587',
      auth: {
        user: 'ba035e72bd7b9c',
        pass: 'd63cb8eba3dc78',
      },
    });
  }

  // Send the actual email
  async send(subject) {
    const mailOptions = {
      from: this.from,
      to: this.to,
      subject,
      text: 'Email Tours App',
      html: '<b>Email Tours App</b>',
    };
    console.log('mailOptions', mailOptions);
    await this.newTransport().sendMail(mailOptions);
  }

  async sendWelcome() {
    await this.send('Welcome to the Tours App');
  }

  async sendPasswordReset() {
    await this.send('Your password reset token (valid for only 10 minutes)');
  }
};
