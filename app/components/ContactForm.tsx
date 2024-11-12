"use client";

import { FormEvent, useState } from "react";
import axios from "axios";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { useRouter } from "next/navigation";

export default function ContactForm() {
  const [name, setName] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const [subject, setSubject] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const { executeRecaptcha } = useGoogleReCaptcha();
  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      if (!executeRecaptcha) {
        console.log('Recaptcha not available to execute.');
        throw new Error("Recaptcha error");
      }
  
      const gRecaptchaToken = await executeRecaptcha('inquirySubmit');
  
      const res = await axios.post(
        '/api/recaptchaSubmit',
        { gRecaptchaToken },
        {
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
          }
        }
      );
  
      if (res?.data?.success === true) {
        await axios.post(
          '/api/inquirySubmit',
          { name, email, subject, message },
          {
            headers: {
              Accept: "application/json, text/plain, */*",
              "Content-Type": "application/json",
            }
          }
        )

        router.push("/contact/thank-you");
      } else {
        setErrorMessage("Captcha failed!");
      }
    } catch (err) {
      console.log(err);
      setErrorMessage("An error has occurred! Message not sent!");
    }
  }

  return (
    <form className="text-left p-4 max-w-2xl mx-auto" onSubmit={handleSubmit}>
      <div className="flex gap-2">
        <div className="flex-grow">
          <label className="block mb-1 font-semibold" htmlFor="name">Name</label>
          <input onChange={(e) => setName(e.target.value)} className="p-2 w-full text-offBlack text-lg border" type="text" name="name" id="name" autoComplete="off" required />
        </div>
        <div className="flex-grow">
          <label className="block mb-1 font-semibold" htmlFor="email">Email</label>
          <input onChange={(e) => setEmail(e.target.value)} className="p-2 w-full text-offBlack text-lg border" type="email" name="email" id="email" autoComplete="off" required />
        </div>
      </div>
      <label className="block mb-1 font-semibold mt-2" htmlFor="subject">Subject</label>
      <input onChange={(e) => setSubject(e.target.value)} className="p-2 w-full text-offBlack text-lg border" type="text" name="subject" id="subject" autoComplete="off" required />
      <label className="block mb-1 font-semibold mt-2" htmlFor="message">Message</label>
      <textarea onChange={(e) => setMessage(e.target.value)} className="p-2 w-full text-offBlack text-lg border" rows={5} name="message" id="message" required></textarea>
      <div className="flex justify-between mt-4">
        <p className="text-highlight">
          {errorMessage}
        </p>
        <button className='bg-highlight hover:bg-highlightDarken text-offWhite px-8 py-3 rounded font-semibold'>Submit</button>
      </div>
    </form>
  )
}