"use client";

import { useState, FormEvent } from "react";
import { motion } from "motion/react";
import { Phone, MessageCircle, Send, CheckCircle, AlertCircle } from "lucide-react";
import { leadFormSection } from "@/lib/landowner-content";

export default function LeadForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    landLocation: "",
    landSize: "",
    roadWidth: "",
    additionalMessage: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Reset error state on user input so they can retry
    if (status === "error") {
      setStatus("idle");
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const res = await fetch("/api/landowner-inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Submission failed");

      setStatus("success");
      setFormData({
        fullName: "",
        phoneNumber: "",
        email: "",
        landLocation: "",
        landSize: "",
        roadWidth: "",
        additionalMessage: "",
      });
    } catch {
      setStatus("error");
    }
  };

  const inputClasses =
    "w-full bg-surface border border-border-light rounded-xl px-4 py-3.5 text-text placeholder:text-text-muted/60 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent/50 transition-all duration-200";

  return (
    <section id="lead-form" className="relative py-24 md:py-32 bg-surface overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e5e5_1px,transparent_1px)] [background-size:50px_50px] opacity-40 dark:opacity-[0.03]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Left: Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="bg-surface-alt rounded-3xl p-8 md:p-12 border border-border-light shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-text tracking-tight mb-4">
                {leadFormSection.heading.en}
              </h2>
              <p className="text-text-secondary mb-8 leading-relaxed">
                {leadFormSection.subheading.en}
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-text mb-2">
                      {leadFormSection.fullNameLabel.en} <span className="text-accent">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      placeholder="Md. Kamal Hossain"
                      className={inputClasses}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-text mb-2">
                      {leadFormSection.phoneLabel.en} <span className="text-accent">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      required
                      placeholder="01XXXXXXXXX"
                      className={inputClasses}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-text mb-2">
                      {leadFormSection.emailLabel.en}
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className={inputClasses}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-text mb-2">
                      {leadFormSection.landLocationLabel.en} <span className="text-accent">*</span>
                    </label>
                    <input
                      type="text"
                      name="landLocation"
                      value={formData.landLocation}
                      onChange={handleChange}
                      required
                      placeholder="Sector, Thana, District"
                      className={inputClasses}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-text mb-2">
                      {leadFormSection.landSizeLabel.en} <span className="text-accent">*</span>
                    </label>
                    <input
                      type="text"
                      name="landSize"
                      value={formData.landSize}
                      onChange={handleChange}
                      required
                      placeholder="e.g. 10 Katha"
                      className={inputClasses}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-text mb-2">
                      {leadFormSection.roadWidthLabel.en} <span className="text-accent">*</span>
                    </label>
                    <input
                      type="text"
                      name="roadWidth"
                      value={formData.roadWidth}
                      onChange={handleChange}
                      required
                      placeholder="e.g. 20 ft"
                      className={inputClasses}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-text mb-2">
                    {leadFormSection.messageLabel.en}
                  </label>
                  <textarea
                    name="additionalMessage"
                    value={formData.additionalMessage}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Any specific questions or details about your land..."
                    className={`${inputClasses} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting" || status === "success"}
                  className="w-full bg-accent hover:bg-accent-hover disabled:bg-accent/60 text-text-on-accent font-bold text-base py-4 px-8 rounded-xl transition-all duration-300 hover:scale-[1.01] active:scale-95 disabled:cursor-not-allowed shadow-lg shadow-accent/20 flex items-center justify-center gap-2 dark:btn-glow-accent"
                >
                  {status === "submitting" ? (
                    <>
                      <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      {leadFormSection.submittingButton.en}
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" strokeWidth={2} />
                      {leadFormSection.submitButton.en}
                    </>
                  )}
                </button>

                {/* Status messages */}
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-3 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300 rounded-xl px-5 py-4 border border-emerald-200 dark:border-emerald-800"
                  >
                    <CheckCircle className="w-5 h-5 flex-shrink-0" strokeWidth={2} />
                    <p className="text-sm font-medium">{leadFormSection.successMessage.en}</p>
                  </motion.div>
                )}

                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-3 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 rounded-xl px-5 py-4 border border-red-200 dark:border-red-800"
                  >
                    <AlertCircle className="w-5 h-5 flex-shrink-0" strokeWidth={2} />
                    <p className="text-sm font-medium">{leadFormSection.errorMessage.en}</p>
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>

          {/* Right: Quick contact + info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Quick contact buttons */}
            <div className="bg-surface-alt rounded-2xl p-8 border border-border-light shadow-sm">
              <h3 className="text-lg font-semibold text-text mb-6">
                Prefer to talk? Reach us directly
              </h3>
              <div className="space-y-4">
                <a
                  href="tel:01625555700"
                  className="flex items-center gap-4 w-full bg-surface hover:bg-accent/5 rounded-xl px-5 py-4 border border-border-light transition-all duration-200 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Phone className="w-6 h-6 text-accent" strokeWidth={1.5} />
                  </div>
                  <div className="text-left">
                    <p className="text-xs text-text-muted uppercase tracking-wide font-medium">
                      {leadFormSection.callUs.en}
                    </p>
                    <p className="text-base font-semibold text-text">01625-555700</p>
                  </div>
                </a>

                <a
                  href="https://wa.me/8801725555700"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 w-full bg-surface hover:bg-emerald-50 dark:hover:bg-emerald-900/10 rounded-xl px-5 py-4 border border-border-light transition-all duration-200 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center group-hover:bg-emerald-200 dark:group-hover:bg-emerald-800/40 transition-colors">
                    <MessageCircle className="w-6 h-6 text-emerald-600 dark:text-emerald-400" strokeWidth={1.5} />
                  </div>
                  <div className="text-left">
                    <p className="text-xs text-text-muted uppercase tracking-wide font-medium">
                      {leadFormSection.whatsApp.en}
                    </p>
                    <p className="text-base font-semibold text-text">01725-555700</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Why choose AHS info */}
            <div className="bg-surface-alt rounded-2xl p-8 border border-border-light shadow-sm">
              <h3 className="text-lg font-semibold text-text mb-4">
                Why AHS Properties?
              </h3>
              <ul className="space-y-3">
                {[
                  "100% RAJUK approved projects",
                  "No upfront cost for landowners",
                  "In-house design & engineering team",
                  "Clear, fair space-sharing agreements",
                  "On-time handover guarantee",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-text-secondary">
                    <span className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="w-2 h-2 rounded-full bg-accent" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
