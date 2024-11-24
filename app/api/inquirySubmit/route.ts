"use server";

import { NextResponse } from "next/server";
import validator from 'validator';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: "smtp.mailersend.net",
  port: 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  },
});

export async function POST(req: Request) {
  const data = await req.formData();
  const name: string = data.get("name") as string;
  const email: string = data.get("email") as string;
  const subject: string = data.get("subject") as string;
  const message: string = data.get("message") as string;
  const file: File | null = data.get('file') as File;

  const cleanName = validator.escape(name);
  const cleanMessage = validator.escape(message);

  if (!validator.isEmail(email)) {
    return NextResponse.json({
      success: false,
      message: "Invalid email address"
    })
  }

  const cleanEmail = validator.normalizeEmail(email);

  const validImageTypes = ["image/jpg", "image/jpeg", "image/png", "image/jfif", "image/pjpeg", "image/pjp"];
  if (!validImageTypes.includes(file.type)) {
    return NextResponse.json({
      success: false,
      message: "Invalid image type. Must be jpg, jpeg, or png."
    })
  }

  let buffer = null;
  if (file) {
    const bytes = await file.arrayBuffer();
    buffer = Buffer.from(bytes);
  }

  try {
    if (buffer) {
      await transporter.sendMail({
        from: '"HDD Inquiry" <MS_bVVyld@trial-neqvygm896z40p7w.mlsender.net>',
        to: "patriotsworkingforyou@gmail.com",
        subject,
        html: `<b>Name: </b>${cleanName}<br><b>Email: </b>${cleanEmail}<br><b>Message: </b>${cleanMessage}`,
        attachments: [
          {
            filename: "image",
            content: buffer,
          }
        ]
      });
    } else {
      await transporter.sendMail({
        from: '"HDD Inquiry" <MS_bVVyld@trial-neqvygm896z40p7w.mlsender.net>',
        to: "patriotsworkingforyou@gmail.com",
        subject,
        html: `<b>Name: </b>${cleanName}<br><b>Email: </b>${cleanEmail}<br><b>Message: </b>${cleanMessage}`,
      });
    }

    return NextResponse.json({
      success: true,
    });
  } catch (err) {
    console.log(err);
    return NextResponse.json({
      success: false
    })
  }
}