// app/contact/page.tsx or inside any component/page
import ContactForm from "../components/ContactForm";

export default function ContactPage() {
  return (
    <section className="px-4 min-h-[calc(100vh_-_194px)] flex flex-col items-center justify-center">
      <ContactForm />
    </section>
  );
}
