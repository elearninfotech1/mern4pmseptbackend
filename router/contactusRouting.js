const express = require("express");
const nodemailer = require("nodemailer");
const contactusRouting = express.Router();

contactusRouting.post("/contactus", (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "elearninfotech1@gmail.com",
        pass: "rctr lyhl jqwl jorj",
      },
    });
    const mailOptions = {
      from: `${email}`,
      to: "enuttech@gmail.com",
      subject: `Contact Us Page ${subject}`,
      text: `Name: ${name} \n Email: ${email} \n Phone: ${phone} \n Subject: ${subject} \n Message: ${message}`,
    };

    transport.sendMail(mailOptions, (error, info) => {
      if (error) throw error;
      res.send({ status: true, message: "Mail sent successfully" });
      console.log("Mail sent successfull");
    });
  } catch (err) {
    res.send({ status: false, message: "Something went wrong" });
  }
});

module.exports = contactusRouting;
