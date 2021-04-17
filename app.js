const express = require('express');
const nodemailer = require('nodemailer');
const path = require('path');
var config = require('./secrets');

const app = express();
app.set('view engine','ejs'); 
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/email', (req,res) => {
    console.log(req.body);
    const {Name,email,companyName,companyNumber,message} = req.body;
    main(Name,email,companyName,companyNumber,message);
    ack(Name,email,companyName,companyNumber,message);
    // res.redirect('/');
    return res.json({});
    // console.log(res.status);
} )
app.listen(3000, () => console.log('Server started...'));


// Nodemailer
"use strict";

async function main(Name,email,companyName,companyNumber,message) {
  let testAccount = await nodemailer.createTestAccount();

  let transporter = nodemailer.createTransport({
    host: "smtp.office365.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: config.user, // generated ethereal user
      pass: config.pass, // generated ethereal password
    },
  })

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: "noreply@bitecope.com", // sender address
    to: "support@bitecope.com", // list of receivers
    subject: "Got new client request ✔", // Subject line
    html: `<!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
    <head>
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta name="x-apple-disable-message-reformatting">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <title></title>
      
        <style type="text/css">
          a { color: #236fa1; text-decoration: none; }
          p{ color: black}
    @media only screen and (min-width: 620px) {
      .u-row {
        width: 600px !important;
      }
      .u-row .u-col {
        vertical-align: top;
      }
    
      .u-row .u-col-100 {
        width: 600px !important;
      }

      span{
        text-align: left;
        color:006400;
      }
    
    }
    
    @media (max-width: 620px) {
      .u-row-container {
        max-width: 100% !important;
        padding-left: 0px !important;
        padding-right: 0px !important;
      }
      .u-row .u-col {
        min-width: 320px !important;
        max-width: 100% !important;
        display: block !important;
      }
      .u-row {
        width: calc(100% - 40px) !important;
      }
      .u-col {
        width: 100% !important;
      }
      .u-col > div {
        margin: 0 auto;
      }
    }
    body {
      margin: 0;
      padding: 0;
    }
    
    table,
    tr,
    td {
      vertical-align: top;
      border-collapse: collapse;
    }
    
    p {
      margin: 0;
    }

    span{
      text-align:left;
      color:006400;
    }
    
    .ie-container table,
    .mso-container table {
      table-layout: fixed;
    }
    
    * {
      line-height: inherit;
    }
    
    a[x-apple-data-detectors='true'] {
      color: inherit !important;
      text-decoration: none !important;
    }
    
    </style>
      
      
    
    <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap" rel="stylesheet" type="text/css"><link href="https://fonts.googleapis.com/css?family=Pacifico&display=swap" rel="stylesheet" type="text/css">
    
    </head>
    
    <body class="clean-body" style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #39d7f8">
      <br><table style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #39d7f8;width:100%" cellpadding="0" cellspacing="0">
      <tbody>
      <tr style="vertical-align: top">
        <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
    <div class="u-row-container" style="padding: 0px;background-color: transparent">
      <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #ffffff;">
        <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
         <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
      <div style="width: 100% !important;">
    <div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
      
    <table style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td style="overflow-wrap:break-word;word-break:break-word;padding:44px 10px 10px;font-family:'Montserrat',sans-serif;" align="left">
            
    <table width="100%" cellpadding="0" cellspacing="0" border="0">
      <tr>
        <td style="padding-right: 0px;padding-left: 0px;" align="center">
          
          <img align="center" border="0" src="https://i.imgur.com/ErQe7CJ.png" alt="Image" title="Image" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 26%;max-width: 150.8px;" width="150.8"/>
          
        </td>
      </tr>
    </table>
    
          </td>
        </tr>
      </tbody>
    </table>
    
    <table style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Montserrat',sans-serif;" align="left">
            
      <div style="color: #34495e; line-height: 140%; text-align: center; word-wrap: break-word;">
        <p style="font-size: 14px; line-height: 140%;"><span style="font-size: 26px; line-height: 36.4px; font-family: Pacifico, cursive; color: #226fa0;"><strong><span style="line-height: 36.4px; font-size: 26px;">Kudos Team <span style="font-size: 26px; line-height: 36.4px;">Bitecope!</span></span></strong></span></p>
      </div>
    
          </td>
        </tr>
      </tbody>
    </table>
    
    <table style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td style="overflow-wrap:break-word;word-break:break-word;padding:10px 33px;font-family:'Montserrat',sans-serif;" align="left">
            
      <div style="color: #686d6d; line-height: 210%; text-align: center; word-wrap: break-word;">
        <p style="font-size: 14px; line-height: 210%; text-align: left;">Hey we got a new client named <span style="color: #169078; font-size: 14px; line-height: 29.4px;">${Name}</span>!</p>
    <p style="font-size: 14px; line-height: 210%; text-align: left;">&nbsp;</p>
    <p style="font-size: 14px; line-height: 210%; text-align: left;">Here's what we got from ${Name}: </p>
    <p style="font-size: 14px; line-height: 210%; text-align: left;">Client email: <span style="color: #169078; text-align: left;font-size: 14px; line-height: 29.4px;">${email}</span><br>Client company name: <span style="color: #169078; text-align: left; font-size: 14px; line-height: 29.4px;">${companyName}</span><br>Client contact number: <span style="color: #169078; text-align: left; font-size: 14px; line-height: 29.4px;">${companyNumber}</span><br>Client message: <span style="color: #169078; text-align: left; font-size: 14px; line-height: 29.4px;">${message}</span></p>
    <p style="font-size: 14px; line-height: 210%; text-align: left;">Let's rock it ! </p>
      </div>
    
          </td>
        </tr>
      </tbody>
    </table>
    
      </div> 
    </div>
    </div>
    </div>
      </div>
    </div>
    
    
    
    <div class="u-row-container" style="padding: 0px 0px 4px;background-color: transparent">
      <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #ffffff;">
        <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
        <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
      <div style="width: 100% !important;">
      <div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
      
    <table style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td style="overflow-wrap:break-word;word-break:break-word;padding:10px 10px 40px;font-family:'Montserrat',sans-serif;" align="left">
            
    <div align="center">
      <div style="display: table; max-width:123px;">
        <table align="left" border="0" cellspacing="0" cellpadding="0" width="32" height="32" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;vertical-align: top;margin-right: 30px">
          <tbody><tr style="vertical-align: top"><td align="left" valign="middle" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
            <a href="https://mobile.twitter.com/bitecope" title="Twitter" target="_blank">
              <img src="https://i.imgur.com/MyGR0sg.png" alt="Twitter" title="Twitter" width="32" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
            </a>
          </td></tr>
        </tbody></table>
        <table align="left" border="0" cellspacing="0" cellpadding="0" width="32" height="32" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;vertical-align: top;margin-right: 0px">
          <tbody><tr style="vertical-align: top"><td align="left" valign="middle" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
            <a href="https://www.linkedin.com/company/bitecope/" title="LinkedIn" target="_blank">
              <img src="https://i.imgur.com/KkipkvS.png" alt="LinkedIn" title="LinkedIn" width="32" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
            </a>
          </td></tr>
        </tbody></table>
      </div>
    </div>
    
          </td>
        </tr>
      </tbody>
    </table>
    
     </div>
      </div>
    </div>
        </div>
      </div>
    </div>
    
    
        </td>
      </tr>
      </tbody>
      </table>
      <br>
    </body>
    
    </html>`, // html body
  });
  console.log("Message sent: %s", info.messageId);
}


// acknowledgement to client
async function ack(Name,email,companyName,companyNumber,message) {
  let testAccount = await nodemailer.createTestAccount();

  let transporter = nodemailer.createTransport({
    host: "smtp.office365.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: config.user, // generated ethereal user
      pass: config.pass, // generated ethereal password
    },
  })

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: "noreply@bitecope.com", // sender address
    to: email, // list of receivers
    subject: "Bitecope: Form details ", // Subject line
    html: `
    <!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
    <head>
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta name="x-apple-disable-message-reformatting">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <title></title>
      
        <style type="text/css">
          a { color: #236fa1; text-decoration: none; }
          p{ color: black}
    @media only screen and (min-width: 620px) {
      .u-row {
        width: 600px !important;
      }
      .u-row .u-col {
        vertical-align: top;
      }
    
      .u-row .u-col-100 {
        width: 600px !important;
      }

      span{
        text-align: left;
        color:006400;
      }
    
    }
    
    @media (max-width: 620px) {
      .u-row-container {
        max-width: 100% !important;
        padding-left: 0px !important;
        padding-right: 0px !important;
      }
      .u-row .u-col {
        min-width: 320px !important;
        max-width: 100% !important;
        display: block !important;
      }
      .u-row {
        width: calc(100% - 40px) !important;
      }
      .u-col {
        width: 100% !important;
      }
      .u-col > div {
        margin: 0 auto;
      }
    }
    body {
      margin: 0;
      padding: 0;
    }
    
    table,
    tr,
    td {
      vertical-align: top;
      border-collapse: collapse;
    }
    
    p {
      margin: 0;
    }

    span{
      text-align:left;
      color:006400;
    }
    
    .ie-container table,
    .mso-container table {
      table-layout: fixed;
    }
    
    * {
      line-height: inherit;
    }
    
    a[x-apple-data-detectors='true'] {
      color: inherit !important;
      text-decoration: none !important;
    }
    
    </style>
      
      
    
    <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap" rel="stylesheet" type="text/css"><link href="https://fonts.googleapis.com/css?family=Pacifico&display=swap" rel="stylesheet" type="text/css">
    
    </head>
    
    <body class="clean-body" style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #39d7f8">
      <br><table style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #39d7f8;width:100%" cellpadding="0" cellspacing="0">
      <tbody>
      <tr style="vertical-align: top">
        <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
    <div class="u-row-container" style="padding: 0px;background-color: transparent">
      <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #ffffff;">
        <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
         <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
      <div style="width: 100% !important;">
    <div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
      
    <table style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td style="overflow-wrap:break-word;word-break:break-word;padding:44px 10px 10px;font-family:'Montserrat',sans-serif;" align="left">
            
    <table width="100%" cellpadding="0" cellspacing="0" border="0">
      <tr>
        <td style="padding-right: 0px;padding-left: 0px;" align="center">
          
          <img align="center" border="0" src="https://i.imgur.com/ErQe7CJ.png" alt="Image" title="Image" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 26%;max-width: 150.8px;" width="150.8"/>
          
        </td>
      </tr>
    </table>
    
          </td>
        </tr>
      </tbody>
    </table>
    
    <table style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Montserrat',sans-serif;" align="left">
            
      <div style="color: #34495e; line-height: 140%; text-align: center; word-wrap: break-word;">
        <p style="font-size: 14px; line-height: 140%;"><span style="font-size: 26px; line-height: 36.4px; font-family: Pacifico, cursive; color: #226fa0;"><strong><span style="line-height: 36.4px; font-size: 26px;">Welcome to <span style="font-size: 26px; line-height: 36.4px;">Bitecope!</span></span></strong></span></p>
      </div>
    
          </td>
        </tr>
      </tbody>
    </table>
    
    <table style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td style="overflow-wrap:break-word;word-break:break-word;padding:10px 33px;font-family:'Montserrat',sans-serif;" align="left">
            
      <div style="color: #686d6d; line-height: 210%; text-align: center; word-wrap: break-word;">
        <p style="font-size: 14px; line-height: 210%; text-align: left;">Hey <span style="color: #169078; font-size: 14px; line-height: 29.4px;">${Name}</span>!</p>
    <p style="font-size: 14px; line-height: 210%; text-align: left;">Thank you for showing interest in <a href="https://bitecope.com/" target="_blank" rel="noopener">Bitecope</a>! Our support team will get back to you soon!</p>
    <p style="font-size: 14px; line-height: 210%; text-align: left;">&nbsp;</p>
    <p style="font-size: 14px; line-height: 210%; text-align: left;">Here's what we got from you.</p>
    <p style="font-size: 14px; line-height: 210%; text-align: left;">Your email: <span style="color: #169078; text-align: left;font-size: 14px; line-height: 29.4px;">${email}</span><br>Your company name: <span style="color: #169078; text-align: left; font-size: 14px; line-height: 29.4px;">${companyName}</span><br>Your contact number: <span style="color: #169078; text-align: left; font-size: 14px; line-height: 29.4px;">${companyNumber}</span><br />Your message: <span style="color: #169078; text-align: left; font-size: 14px; line-height: 29.4px;">${message}</span></p>
    <p style="font-size: 14px; line-height: 210%; text-align: left;">We hope to work with you soon! </p>
    <p style="font-size: 14px; line-height: 210%; text-align: left;">&nbsp;</p>
    <p style="font-size: 14px; line-height: 210%; text-align: left;">Regards,</p>
    <p style="font-size: 14px; line-height: 210%; text-align: left;">Bitecope.</p>
      </div>
    
          </td>
        </tr>
      </tbody>
    </table>
    
      </div> 
    </div>
    </div>
    </div>
      </div>
    </div>
    
    
    
    <div class="u-row-container" style="padding: 0px 0px 4px;background-color: transparent">
      <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #ffffff;">
        <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
        <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
      <div style="width: 100% !important;">
      <div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
      
    <table style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td style="overflow-wrap:break-word;word-break:break-word;padding:10px 10px 40px;font-family:'Montserrat',sans-serif;" align="left">
            
    <div align="center">
      <div style="display: table; max-width:123px;">
        <table align="left" border="0" cellspacing="0" cellpadding="0" width="32" height="32" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;vertical-align: top;margin-right: 30px">
          <tbody><tr style="vertical-align: top"><td align="left" valign="middle" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
            <a href="https://mobile.twitter.com/bitecope" title="Twitter" target="_blank">
              <img src="https://i.imgur.com/MyGR0sg.png" alt="Twitter" title="Twitter" width="32" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
            </a>
          </td></tr>
        </tbody></table>
        <table align="left" border="0" cellspacing="0" cellpadding="0" width="32" height="32" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;vertical-align: top;margin-right: 0px">
          <tbody><tr style="vertical-align: top"><td align="left" valign="middle" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
            <a href="https://www.linkedin.com/company/bitecope/" title="LinkedIn" target="_blank">
              <img src="https://i.imgur.com/KkipkvS.png" alt="LinkedIn" title="LinkedIn" width="32" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
            </a>
          </td></tr>
        </tbody></table>
      </div>
    </div>
    
          </td>
        </tr>
      </tbody>
    </table>
    
     </div>
      </div>
    </div>
        </div>
      </div>
    </div>
      </td>
      </tr>
      </tbody>
      </table>
      <br>
    </body>
    
    </html>       
 `,
  });
  console.log("Message sent: %s", info.messageId);
}
main().catch(console.error);
ack().catch(console.error);
