import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  MessageCircle,
  Instagram,
  Youtube,
  Facebook,
  Loader2,
} from "lucide-react";
import { PageHero, Reveal, GoldLabel, FinalCTA, showToast } from "@/components/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Pavitram India" },
      {
        name: "description",
        content:
          "Get in touch with Pavitram India for community, business, investment or employment enquiries.",
      },
      { property: "og:title", content: "Contact Pavitram India" },
      { property: "og:description", content: "Reach our cooperative community team." },
    ],
  }),
  component: ContactPage,
});

type Form = {
  name: string;
  mobile: string;
  email: string;
  role: string;
  purpose: string;
  message: string;
};
const ROLES = ["Consumer", "Merchant", "Investor", "Career", "Other"];
const PURPOSES = [
  "Join Community",
  "Business Inquiry",
  "Investment",
  "Employment",
  "General Query",
];

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="block text-[11px] font-bold uppercase tracking-widest text-ink/80">
        {label}
        {required && <span className="text-gold"> *</span>}
      </span>
      <div className="mt-2">{children}</div>
    </label>
  );
}

const inputCls =
  "w-full rounded-[10px] border border-[#E2E8F0] bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-gold focus:shadow-[0_0_0_3px_rgba(201,149,42,0.18)]";

function ContactPage() {
  const [f, setF] = useState<Form>({
    name: "",
    mobile: "",
    email: "",
    role: "",
    purpose: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const set = <K extends keyof Form>(k: K, v: Form[K]) => setF((p) => ({ ...p, [k]: v }));

  const submit = async () => {
    if (!f.name || !f.mobile || !f.role || !f.purpose || !f.message) {
      showToast("Please fill all required fields");
      return;
    }
    setSending(true);
    await new Promise((r) => setTimeout(r, 1100));
    setSending(false);
    setF({ name: "", mobile: "", email: "", role: "", purpose: "", message: "" });
    showToast("Message sent! We'll be in touch shortly.");
  };

  return (
    <>
      <PageHero
        breadcrumb={[{ label: "Home", to: "/" }, { label: "Contact" }]}
        label="Contact Us"
        title="Get In Touch"
        subtitle="Reach out to us to join the community, explore business opportunities, or learn more about our cooperative services."
      />

      <section className="bg-haze py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <h2 className="font-display text-3xl font-bold text-ink">Contact Information</h2>
            <div className="mt-8 space-y-4">
              {[
                {
                  Icon: MapPin,
                  title: "Registered Office",
                  body: "Pavitram India Corporate HQ\nCAT Square, Rau-CAT Rd\nIndore, Madhya Pradesh 452013, India",
                },
                {
                  Icon: Phone,
                  title: "Phone / WhatsApp",
                  body: "+91 9-165-166-000",
                  badge: "WhatsApp Enabled",
                },
                { Icon: Mail, title: "Email", body: "hello@pavitramindia.com" },
                { Icon: Globe, title: "Social", body: "pavitramindia.com", socials: true },
              ].map((c, i) => (
                <div
                  key={i}
                  className="rounded-2xl bg-white p-5 shadow-[0_4px_18px_rgba(13,27,62,0.06)] transition hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(13,27,62,0.1)]"
                >
                  <div className="flex items-start gap-4">
                    <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gold/10 text-gold">
                      <c.Icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <p className="text-[11px] font-bold uppercase tracking-widest text-mist">
                        {c.title}
                      </p>
                      <p className="mt-1 whitespace-pre-line text-sm font-medium text-ink">
                        {c.body}
                      </p>
                      {c.badge && (
                        <span className="mt-2 inline-flex items-center gap-1 rounded-full bg-green-100 px-3 py-1 text-[11px] font-bold text-green-700">
                          <span className="h-1.5 w-1.5 rounded-full bg-green-600" /> {c.badge}
                        </span>
                      )}
                      {c.socials && (
                        <div className="mt-3 flex gap-2">
                          {[MessageCircle, Instagram, Youtube].map((I, k) => (
                            <a
                              key={k}
                              href="#"
                              className="grid h-9 w-9 place-items-center rounded-full border border-mist/20 text-mist transition hover:border-gold hover:text-gold"
                            >
                              <I className="h-4 w-4" />
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full border-2 border-green-500 px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-green-600 transition hover:bg-green-500 hover:text-white"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp Community
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full border-2 border-blue-500 px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-blue-600 transition hover:bg-blue-500 hover:text-white"
              >
                <Facebook className="h-4 w-4" /> Facebook Group
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-3xl bg-white p-8 shadow-[0_20px_60px_-20px_rgba(13,27,62,0.18)] md:p-10">
              <h3 className="font-display text-2xl font-bold text-ink">Send a Message</h3>
              <div className="mt-6 space-y-5">
                <Field label="Full Name" required>
                  <input
                    className={inputCls}
                    placeholder="e.g. Ramesh Patel"
                    value={f.name}
                    onChange={(e) => set("name", e.target.value)}
                  />
                </Field>
                <Field label="Mobile Number" required>
                  <div className="flex gap-2">
                    <select className={`${inputCls} w-24 shrink-0`} defaultValue="+91">
                      <option>+91</option>
                    </select>
                    <input
                      className={inputCls}
                      placeholder="10-digit mobile number"
                      value={f.mobile}
                      onChange={(e) => set("mobile", e.target.value)}
                    />
                  </div>
                </Field>
                <Field label="Email Address (Optional)">
                  <input
                    className={inputCls}
                    placeholder="ramesh@example.com"
                    value={f.email}
                    onChange={(e) => set("email", e.target.value)}
                  />
                </Field>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="I am a" required>
                    <select
                      className={inputCls}
                      value={f.role}
                      onChange={(e) => set("role", e.target.value)}
                    >
                      <option value="">Select Role</option>
                      {ROLES.map((r) => (
                        <option key={r}>{r}</option>
                      ))}
                    </select>
                  </Field>
                  <Field label="Purpose" required>
                    <select
                      className={inputCls}
                      value={f.purpose}
                      onChange={(e) => set("purpose", e.target.value)}
                    >
                      <option value="">Select Purpose</option>
                      {PURPOSES.map((p) => (
                        <option key={p}>{p}</option>
                      ))}
                    </select>
                  </Field>
                </div>
                <Field label="Message" required>
                  <textarea
                    rows={4}
                    className={inputCls}
                    placeholder="How can we help you?"
                    value={f.message}
                    onChange={(e) => set("message", e.target.value)}
                  />
                </Field>

                <button
                  onClick={submit}
                  disabled={sending}
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-navy px-6 py-3.5 text-sm font-bold text-white transition hover:bg-gold hover:text-navy disabled:opacity-70"
                >
                  {sending ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" /> Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>
                <p className="text-center text-xs text-mist">
                  Your information is safe with us. We never share personal data.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mx-auto mt-16 max-w-7xl px-6">
          <div className="overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white shadow-[0_12px_40px_-12px_rgba(13,27,62,0.12)]">
            <iframe
              src="https://maps.google.com/maps?q=CAT%20Square%2C%20Rau-CAT%20Rd%2C%20Indore%2C%20Madhya%20Pradesh%20452013&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="380"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Pavitram India Registered Office Location - CAT Square, Indore"
              className="w-full block"
            />
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
