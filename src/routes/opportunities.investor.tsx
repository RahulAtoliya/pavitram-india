import { createFileRoute } from "@tanstack/react-router";
import { TrendingUp } from "lucide-react";
import { OppDetailPage } from "@/lib/opp-detail";

export const Route = createFileRoute("/opportunities/investor")({
  head: () => ({
    meta: [
      { title: "Investor Opportunities — Pavitram India" },
      { name: "description", content: "Invest in community-driven projects with transparent returns targeting 12%+ cooperative annual returns." },
      { property: "og:title", content: "Invest with Pavitram India" },
      { property: "og:description", content: "Transparent cooperative investment with community impact." },
    ],
  }),
  component: () => <OppDetailPage d={{
    slug: "investor",
    title: "As an Investor",
    hindi: "निवेश के रूप में",
    label: "Investor",
    Icon: TrendingUp,
    intro: "Invest in community-driven projects with transparent returns and a focus on collective growth. Every project is backed by clear ownership, audited reporting, and shared upside with the community.",
    benefits: [
      "12%+ target cooperative annual return",
      "Transparent funding and ownership model",
      "Community-driven real estate & projects",
      "Quarterly performance reporting",
    ],
    steps: [
      { title: "Qualify", body: "Complete a brief investor profile and KYC." },
      { title: "Choose", body: "Review and select community-backed projects." },
      { title: "Earn & impact", body: "Receive returns while creating real impact." },
    ],
  }} />,
});
