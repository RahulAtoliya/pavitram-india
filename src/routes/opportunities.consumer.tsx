import { createFileRoute } from "@tanstack/react-router";
import { User } from "lucide-react";
import { OppDetailPage } from "@/lib/opp-detail";

export const Route = createFileRoute("/opportunities/consumer")({
  head: () => ({
    meta: [
      { title: "Consumer Opportunities — Pavitram India" },
      {
        name: "description",
        content:
          "Access daily needs, essentials and services at fair cooperative prices as a Pavitram consumer.",
      },
      { property: "og:title", content: "Join as a Consumer — Pavitram India" },
      {
        property: "og:description",
        content: "Ethical products and services at cooperative prices.",
      },
    ],
  }),
  component: () => (
    <OppDetailPage
      d={{
        slug: "consumer",
        title: "As a Consumer",
        hindi: "उपभोक्ता के रूप में",
        label: "Consumer",
        Icon: User,
        intro:
          "Access high-quality, ethically sourced products and services at fair cooperative prices. Become part of a network that puts member needs ahead of margins, with transparent pricing and verified quality at every step.",
        benefits: [
          "Access to daily needs and essential services",
          "Significant reduction in expenses",
          "Cooperative community support",
          "Verified suppliers and ethical sourcing",
        ],
        steps: [
          { title: "Register", body: "Create your Pavitram member profile in minutes." },
          { title: "Explore", body: "Browse cooperative services across 12 categories." },
          { title: "Save & contribute", body: "Reduce expenses while supporting the network." },
        ],
      }}
    />
  ),
});
