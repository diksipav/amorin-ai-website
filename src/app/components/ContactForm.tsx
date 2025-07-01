"use client";

import { useRef, useState } from "react";
import { useTranslations } from "next-intl";

const ContactForm = () => {
  const t = useTranslations("contact-form");

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  const isFormValid =
    name.trim() !== "" && email.trim() !== "" && msg.trim() !== "";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;

    // Honeypot spam check
    if ((form.elements.namedItem("company") as HTMLInputElement)?.value) {
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, msg }),
      });

      if (!res.ok) throw new Error("Failed to send");

      const data = await res.json();
      if (data.ok) {
        setSubmitted(true);
        setName("");
        setEmail("");
        setMsg("");
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 4000); // 4 seconds
      }
    } catch (err) {
      console.error("Submission failed", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-[456px] mx-auto bg-white rounded-xl shadow-md p-5 sm:p-8 pb-[23px] sm:pb-[34px] relative">
      <form ref={formRef} onSubmit={handleSubmit}>
        <h2 className="text-textDark">{t("title")}</h2>
        <p className="mb-8 text-textDark hidden xs:block">{t("subtitle")}</p>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block font-medium text-textDark mb-1"
          >
            {t("name")} <span className="text-themeLight">*</span>
          </label>
          <input
            ref={emailRef}
            id="name"
            name="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-themeLight"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block font-medium text-textDark mb-1"
          >
            {t("email")} <span className="text-themeLight">*</span>
          </label>
          <input
            ref={emailRef}
            id="email"
            name="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-themeLight"
            autoComplete="email"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="msg" className="block font-medium text-textDark mb-1">
            {t("msg")} <span className="text-themeLight">*</span>
          </label>
          <textarea
            id="msg"
            name="msg"
            required
            rows={4}
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-themeLight"
          />
        </div>
        {/* Honeypot field */}
        <input
          type="text"
          name="company"
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
        />
        <button
          type="submit"
          className={`w-[120px] text-text font-semibold px-7 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-themeLight focus:ring-offset-2 transition-colors duration-300
              ${
                loading || !isFormValid
                  ? "bg-themeLight/70 cursor-auto"
                  : "bg-themeLight hover:bg-theme cursor-pointer"
              }
            `}
          disabled={loading || !isFormValid}
        >
          {loading ? t("cta-sending") : t("cta")}
        </button>
        {showSuccess && (
          <p className="absolute bottom-0 sm:bottom-1 pl-3 mt-4 text-textDark transition-opacity duration-500">
            {t("successful-msg")}
          </p>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
