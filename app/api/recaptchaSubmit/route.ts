import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: Response) {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  const postData = await req.json();
  const { gRecaptchaToken } = postData;

  let response;

  const formData = `secret=${secretKey}&response=${gRecaptchaToken}`;

  try {
    response = await axios.post(
      "https://www.google.com/recaptcha/api/siteverify",
      formData,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    )
  } catch (err) {
    return NextResponse.json({
      success: false
    })
  }

  if (response && response.data?.success && response.data?.score > 0.5) {
    console.log("score: ", response.data?.score);

    return NextResponse.json({
      success: true,
      score: response.data.score,
    });
  } else {
    return NextResponse.json({
      success: false
    });
  }
}