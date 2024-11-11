import { ContactForm } from "../components"

export default function page() {
  return (
    <main className="text-center py-16">
      <h2 className="text-4xl md:text-5xl font-semibold mb-4">Contact Us</h2>
      <p className="md:text-lg max-w-xl mx-auto">Use this form to email us or email us directly at <a className="text-background underline" href="mailto:patriotsworkingforyou@gmail.com">patriotsworkingforyou@gmail.com</a> or call/text us at <a className="text-background underline" href="tel:3525297664">(352) 549-7664</a></p>
      <ContactForm />
    </main>
  )
}