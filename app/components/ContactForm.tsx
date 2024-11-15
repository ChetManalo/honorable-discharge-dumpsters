"use client";

import { FormEvent, useState } from "react";
import axios from "axios";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { useRouter } from "next/navigation";

export default function ContactForm() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [isSending, setIsSending] = useState<boolean>(false);

  const { executeRecaptcha } = useGoogleReCaptcha();
  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSending(true);

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
  
      if (res?.data?.success) {
        const emailRes = await axios.post(
          '/api/inquirySubmit',
          { name, email, subject, message },
          {
            headers: {
              Accept: "application/json, text/plain, */*",
              "Content-Type": "application/json",
            }
          }
        )

        if (!emailRes.data.success) {
          throw new Error(emailRes.data.message);
        }

        router.push("/contact/thank-you");
      } else {
        setErrorMessage("Captcha failed!");
      }
    } catch (err) {
      if (typeof err === "string") {
        setErrorMessage(err);
      } else if (err instanceof Error) {
        setErrorMessage(err.message);
      } else {
        setErrorMessage("An unknown error has occured!");
      }
    }
    setIsSending(false);
  }

  return (
    <form className="text-left p-4 max-w-2xl mx-auto" onSubmit={handleSubmit}>
      <div className="flex gap-2">
        <div className="flex-grow">
          <label className="block mb-1 font-semibold text-lg" htmlFor="name">Name</label>
          <input onChange={(e) => setName(e.target.value)} className="p-2 w-full text-offBlack text-lg border outline-background" type="text" name="name" id="name" autoComplete="off" required />
        </div>
        <div className="flex-grow">
          <label className="block mb-1 font-semibold text-lg" htmlFor="email">Email</label>
          <input onChange={(e) => setEmail(e.target.value)} className="p-2 w-full text-offBlack text-lg border outline-background" type="email" name="email" id="email" autoComplete="off" required />
        </div>
      </div>
      <label className="block mb-1 font-semibold mt-2 text-lg" htmlFor="subject">Subject - <span className="text-sm font-normal">Service, dumpster, etc.</span></label>
      <input onChange={(e) => setSubject(e.target.value)} className="p-2 w-full text-offBlack text-lg border outline-background" type="text" name="subject" id="subject" autoComplete="off" required />
      <label className="block mb-1 font-semibold mt-2 text-lg" htmlFor="message">Message - <span className="text-sm font-normal">A description of your problem or a question.</span></label>
      <textarea onChange={(e) => setMessage(e.target.value)} className="p-2 w-full text-offBlack text-lg border outline-background" maxLength={500} rows={5} name="message" id="message" required></textarea>
      <div className="flex justify-end items-center gap-4 mt-4">
        <p className="text-highlight" role="alert" aria-live="assertive">
          {errorMessage}
        </p>
        <button className={`hover:bg-highlightDarken text-offWhite px-8 py-3 rounded font-semibold ${isSending ? "bg-highlightDarken" : "bg-highlight"}`} disabled={isSending}  aria-live="polite">{isSending ? "Sending..." : "Submit"}</button>
      </div>
    </form>
  )
}