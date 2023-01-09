const nodemailer = require('nodemailer');

export default async function handler(req, res) {
  const { body } = req;
  
  if (body === undefined ||
    body.name === undefined ||
    body.city === undefined ||
    body.start === undefined ||
    body.end === undefined ||
    body.link === undefined ||
    body.email === undefined) {
      return res.status(502).send("Invalid Request");
    }
    let transporter = nodemailer.createTransport({
      host: 'ssl0.ovh.net',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.FORM_EMAIL, // generated ethereal user
        pass: process.env.FORM_PASSWORD, // generated ethereal password
      },
    });
    let message = `<h1>Nouvelle contribution à bric-à-brac/h1>
    <p>Nom de l'évenement ${body.name}</p>
    <p>Ville: ${body.city}</p>
    <p>Date: ${body.start}-${body.end}</p>
    <p>Lien: ${body.link}</p>
    <p>Contact de l'organisation: ${body.email}</p>`;
    
    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: process.env.FORM_EMAIL, // sender address
      to: process.env.FORM_CONTACT, // list of receivers
      subject: `Nouvelle contribution à bric-à-brac`, // Subject line
      text: message, // plain text body
      html: message, // html body
    });
    
    return res.status(200).send("Success");
  }
  