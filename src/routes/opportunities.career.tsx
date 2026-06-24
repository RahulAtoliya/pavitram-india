import { createFileRoute } from "@tanstack/react-router";
import { Briefcase } from "lucide-react";
import { OppDetailPage } from "@/lib/opp-detail";

export const Route = createFileRoute("/opportunities/career")({
  head: () => ({
    meta: [
      { title: "Career Opportunities — Pavitram India" },
      { name: "description", content: "Find dignified, organised employment matched to your qualifications inside the Pavitram cooperative network." },
      { property: "og:title", content: "Careers with Pavitram India" },
      { property: "og:description", content: "Dignified work, real growth, real community." },
    ],
  }),
  component: () => <OppDetailPage d={{
    slug: "career",
    title: "As a Career",
    hindi: "करियर के रूप में",
    label: "Career",
    Icon: Briefcase,
    intro: "Connect with dignified and organized employment opportunities tailored perfectly to your qualifications and skills. Pavitra Rozgar pairs talent with the right roles inside a values-driven network.",
    benefits: [
      "Employment according to qualification and interest",
      "Dignified and organized work culture",
      "Skill development and awareness",
      "Mentorship from senior associates",
    ],
    steps: [
      { title: "Sign up", body: "Share your skills, experience and interests." },
      { title: "Match", body: "Get matched to roles inside the network." },
      { title: "Grow", body: "Learn, earn and progress with mentorship." },
    ],
  }} />,
});
