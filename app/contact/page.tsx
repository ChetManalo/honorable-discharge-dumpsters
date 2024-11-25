import { ContactForm } from "../components"

export default function page() {
  return (
    <main className="text-center py-16">
      <h2 className="text-5xl md:text-6xl font-header font-semibold mb-4">Contact Us</h2>
      <p className="md:text-lg max-w-xl mx-auto">Use this form to email us or email us directly at <a className="text-background underline" href="mailto:patriotsworkingforyou@gmail.com">patriotsworkingforyou@gmail.com</a> or call/text us at <a className="text-background underline" href="tel:7272406256">(727) 240-6256</a></p>
      <ContactForm />
    </main>
  )
}