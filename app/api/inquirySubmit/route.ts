"use server";

import { NextResponse } from "next/server";
import validator from 'validator';

const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.mailersend.net",
  port: 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  },
});

type Inquiry = {
  name: string,
  email: string,
  subject: string,
  message: string
}

export async function POST(req: Request, res: Response) {
  const data = await req.json();
  const { name, email, subject, message }: Inquiry = data;

  const cleanName = validator.escape(name);
  const cleanEmail = validator.normalizeEmail(email);
  const cleanMessage = validator.escape(message);

  try {
    await transporter.sendMail({
      from: '"HDD Inquiry" <MS_bVVyld@trial-neqvygm896z40p7w.mlsender.net>',
      to: "patriotsworkingforyou@gmail.com",
      subject,
      html: `<b>Name: </b>${cleanName}<br><b>Email: </b>${cleanEmail}<br><b>Message: </b>${cleanMessage}`,
    });

    return NextResponse.json({
      success: true
    });
  } catch (err) {
    return NextResponse.json({
      success: false
    })
  }
}