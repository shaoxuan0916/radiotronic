import type { NextApiRequest, NextApiResponse } from "next"
import axios from "axios"

export default async function (req: NextApiRequest, res: NextApiResponse<any>) {
  // let nodemailer = require("nodemailer")

  const { name, email, subject, message } = req.body

  // SendGrid Api -- rapid-api method
  const data = `{
    "personalizations":[{"to":[{"email":"contact@radiotronic.com.my"}],"subject": "${subject}"}],"from":{"email":"${email}"},"content":[{"type":"text/plain","value":"Name: ${name}  Messages: ${message}"}]}`

  const options = {
    method: "POST",
    url: "https://rapidprod-sendgrid-v1.p.rapidapi.com/mail/send",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": "bca1531201msha05ce8fcbd9fbccp12cbe5jsn698a71914f3d",
      "X-RapidAPI-Host": "rapidprod-sendgrid-v1.p.rapidapi.com",
    },
    data: data,
  }

  await axios
    .request(options)
    .then(function (response) {
      console.log("success", response.data)
      res.status(200).json({})
    })
    .catch(function (error) {
      console.error("error", error)
    })

  // nodemailer method

  // var transporter = nodemailer.createTransport({
  //   host: "smtp.mailtrap.io",
  //   port: 2525,
  //   auth: {
  //     user: "4020c2ab2312cb",
  //     pass: "359263a154af66",
  //   },
  // })

  // const mailData = {
  //   from: email,
  //   to: "contact@radiotronic.com.my",
  //   subject: `Contact form submission from ${name}`,
  //   text: req.body.message + " | Sent from: " + req.body.email,
  //   html: `<p>You have a contact form submission</p><br>
  //       <p><strong>Email: </strong> ${email}</p><br>
  //       <p><strong>Subject: </strong> ${subject}</p><br>
  //       <p><strong>Message: </strong> ${message}</p><br>
  //     `,
  // }

  // await transporter.sendMail(mailData, function (err: any, info: any) {
  //   if (err) console.log("error", err)
  //   else {
  //     console.log("info", info)
  //     res.status(200).json({})
  //   }
  // })
}
