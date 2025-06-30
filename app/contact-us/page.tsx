// app/contact/page.tsx or inside any component/page
import ContactForm from "../components/ContactForm";

export default function ContactPage() {
  return (
    <section className="px-4 pt-[90px] min-h-[calc(100vh_-_104px)] flex flex-col items-center justify-center">
      <ContactForm />
    </section>
  );
}
