import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ChevronDown } from "lucide-react";
import { PageHero, Reveal, GoldLabel, FinalCTA, showToast } from "@/components/site";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Pavitram India" },
      {
        name: "description",
        content:
          "Answers about the Pavitram India community, opportunities, services and the Pavitram Business Network.",
      },
      { property: "og:title", content: "Frequently Asked Questions — Pavitram India" },
      { property: "og:description", content: "Everything you need to know about Pavitram India." },
    ],
  }),
  component: FAQPage,
});

type Category = "About Pavitram" | "Opportunities & Network" | "Services";
const CATS: ("All" | Category)[] = ["All", "About Pavitram", "Opportunities & Network", "Services"];

const FAQS: { cat: Category; q: string; a: string }[] = [
  {
    cat: "About Pavitram",
    q: "What is Pavitram India?",
    a: "Pavitram India is a self-reliant cooperative community where members fulfill each other's needs — from daily essentials to education, health, real estate, and financial services. It's a professionally managed network built on transparency, ethics, and collective growth.",
  },
  {
    cat: "About Pavitram",
    q: "What are the four pillars of the community?",
    a: "The four pillars are: Intellectual Citizen (प्रबुद्ध नागरिक), Prosperous Family (समृद्ध परिवार), Self-Reliant Society (आत्मनिर्भर समाज), and Developed India (विकसित भारत). Together they represent our vision for a self-sustaining, empowered nation.",
  },
  {
    cat: "About Pavitram",
    q: "How does the community financially support its members?",
    a: "Members benefit through reduced expenses via cooperative purchasing, income opportunities through the business network, investment returns of 12%+ through the cooperative model, and access to employment through Pavitram Rozgar.",
  },
  {
    cat: "Opportunities & Network",
    q: "What opportunities are available for individuals?",
    a: "You can join as a Consumer (access ethical products/services), Merchant (grow your business), Investor (earn cooperative returns), or as a Career associate (find dignified employment matching your skills).",
  },
  {
    cat: "Opportunities & Network",
    q: "Who are the main collaborators of this network?",
    a: "Our network includes government policy implementers, beneficiaries of government schemes, independent organizations, and community members across 15+ states in India.",
  },
  {
    cat: "Opportunities & Network",
    q: "What is the Pavitram Business Network?",
    a: "It is a professionally managed cooperative business network spanning 15+ states with 10,000+ members. It connects consumers, merchants, investors, and career associates through ethical, transparent, and mutually beneficial partnerships.",
  },
  {
    cat: "Services",
    q: "What is Pavitram Mart?",
    a: "Pavitram Mart is a multi-category, multi-vendor, multi-location B2B and B2C e-commerce platform where all products are available in one place at fair cooperative prices.",
  },
  {
    cat: "Services",
    q: "What solutions are provided under Pavitram Properties?",
    a: "Pavitram Properties offers complete solutions for all property-related needs including buying, selling, renting, and investment in real estate across India.",
  },
  {
    cat: "Services",
    q: "What is Pavitram Gyan?",
    a: "Pavitram Gyan is the education arm focused on awareness, skill development, and equal education access for all community members, regardless of background.",
  },
  {
    cat: "Services",
    q: "What is Pavitram Rozgar?",
    a: "Pavitram Rozgar connects job seekers with dignified employment and business opportunities that match their qualifications, abilities, and personal interests within the cooperative network.",
  },
];

const CHECKLIST = [
  "As a User/Consumer",
  "As a Business Associate",
  "As a Working Associate",
  "As a Financial Associate",
  "As a Resources Associate",
  "As a Social Partner",
  "As a Media Partner",
  "As a Legal Advisor",
  "As a Healthcare Provider",
  "As an Education Partner",
  "As a Technical Expert",
  "As a Business Strategy Guide",
  "Following Wellness Guidelines",
  "Following Network Ethics",
  "Advocating for Fair Opportunity",
  "Promoting Scientific Temper",
  "Avoiding Unverifiable Claims",
  "Supporting Cooperative Dining",
  "Supporting Cooperative Retail",
  "Advocating Organised Jobs",
  "Participating in Professional Meetups",
  "Volunteering Industrial Skills",
  "Mentoring Young Professionals",
  "Promoting Cooperative Values",
  "Ensuring Professional Equality",
  "Protecting Business Environment",
  "Upholding Legal Values",
];

function FAQPage() {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState<"All" | Category>("All");
  const [open, setOpen] = useState<number | null>(0);
  const [checked, setChecked] = useState<Set<number>>(new Set());

  const filtered = useMemo(
    () =>
      FAQS.filter((f) => {
        if (cat !== "All" && f.cat !== cat) return false;
        if (query && !(f.q.toLowerCase() + f.a.toLowerCase()).includes(query.toLowerCase()))
          return false;
        return true;
      }),
    [query, cat],
  );

  const toggle = (i: number) => {
    const n = new Set(checked);
    if (n.has(i)) {
      n.delete(i);
    } else {
      n.add(i);
    }
    setChecked(n);
  };

  return (
    <>
      <section className="relative isolate overflow-hidden bg-navy pt-36 pb-20">
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage: "radial-gradient(rgba(201,149,42,0.3) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <GoldLabel>Have a Question?</GoldLabel>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-5 font-display text-4xl font-bold text-white md:text-6xl">
              Frequently Asked Questions
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mx-auto mt-10 flex max-w-2xl items-center gap-3 rounded-full bg-white px-5 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.25)] ring-2 ring-transparent transition focus-within:ring-gold/60">
              <Search className="h-5 w-5 text-mist" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search questions..."
                className="w-full bg-transparent text-sm text-ink placeholder:text-mist/70 outline-none"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-haze py-20">
        <div className="mx-auto max-w-4xl px-6">
          <Reveal className="flex flex-wrap justify-center gap-2">
            {CATS.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-wider transition ${
                  cat === c
                    ? "border-navy bg-navy text-white"
                    : "border-mist/30 bg-white text-ink hover:border-gold hover:text-gold"
                }`}
              >
                {c}
              </button>
            ))}
          </Reveal>

          <div className="mt-10 space-y-3">
            {filtered.map((f, i) => {
              const isOpen = open === i;
              return (
                <Reveal key={f.q + i} delay={i * 0.03}>
                  <div
                    className={`rounded-2xl bg-white shadow-[0_4px_18px_rgba(13,27,62,0.06)] transition ${isOpen ? "border-l-4 border-gold" : ""}`}
                  >
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    >
                      <span className="font-display text-lg font-bold text-ink">{f.q}</span>
                      <ChevronDown
                        className={`h-5 w-5 shrink-0 text-gold transition-transform ${isOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                        >
                          <p className="px-6 pb-6 text-[15px] leading-relaxed text-mist">{f.a}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </Reveal>
              );
            })}
            {filtered.length === 0 && (
              <p className="py-12 text-center text-mist">No questions match your search.</p>
            )}
          </div>
        </div>
      </section>

      {/* Checklist */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-6">
          <Reveal className="text-center">
            <GoldLabel>Self Assessment</GoldLabel>
            <h2 className="mt-5 font-display text-4xl font-bold text-ink md:text-[48px]">
              Community Contribution Checklist
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-mist">
              Are you contributing? Check all that apply to measure your engagement with cooperative
              community development.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-12 rounded-3xl bg-haze p-8 shadow-[0_20px_60px_-20px_rgba(13,27,62,0.18)] md:p-10">
              <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-widest text-mist">
                <span>Progress</span>
                <span className="text-ink">
                  {checked.size} out of {CHECKLIST.length} ways
                </span>
              </div>
              <div className="mt-2 h-2 overflow-hidden rounded-full bg-mist/15">
                <motion.div
                  animate={{ width: `${(checked.size / CHECKLIST.length) * 100}%` }}
                  transition={{ duration: 0.4 }}
                  className="h-full rounded-full bg-gradient-to-r from-gold to-gold-light"
                />
              </div>
              {checked.size === 0 && (
                <p className="mt-3 text-xs text-mist">Select below to start your assessment.</p>
              )}

              <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {CHECKLIST.map((label, i) => {
                  const on = checked.has(i);
                  return (
                    <button
                      key={label}
                      onClick={() => toggle(i)}
                      className={`flex items-center gap-3 rounded-xl border bg-white px-4 py-3 text-left text-sm transition ${
                        on
                          ? "border-gold text-ink shadow-[0_0_0_3px_rgba(201,149,42,0.12)]"
                          : "border-mist/15 text-ink/85 hover:border-gold/60"
                      }`}
                    >
                      <span
                        className={`grid h-5 w-5 shrink-0 place-items-center rounded-md border transition ${on ? "border-gold bg-gold" : "border-mist/40 bg-white"}`}
                      >
                        {on && (
                          <svg viewBox="0 0 12 12" className="h-3 w-3 text-navy">
                            <path
                              d="M2 6l3 3 5-6"
                              stroke="currentColor"
                              strokeWidth="2"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        )}
                      </span>
                      <span>{label}</span>
                    </button>
                  );
                })}
              </div>

              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <button
                  onClick={() => showToast(`Your score: ${checked.size}/${CHECKLIST.length}`)}
                  className="rounded-full border-2 border-ink/80 px-6 py-3 text-sm font-bold text-ink transition hover:bg-ink hover:text-white"
                >
                  Share My Score
                </button>
                <button
                  onClick={() => showToast("Thank you for taking the Golden Rules Pledge!")}
                  className="rounded-full bg-gold px-6 py-3 text-sm font-bold text-navy transition hover:scale-[1.03] hover:shadow-[0_10px_30px_rgba(201,149,42,0.4)]"
                >
                  Take the Golden Rules Pledge
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
