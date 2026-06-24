import { createFileRoute } from "@tanstack/react-router";
import { Store } from "lucide-react";
import { OppDetailPage } from "@/lib/opp-detail";

export const Route = createFileRoute("/opportunities/merchant")({
  head: () => ({
    meta: [
      { title: "Merchant Opportunities — Pavitram India" },
      { name: "description", content: "Partner with Pavitram India to reach a dedicated community customer base and grow ethically." },
      { property: "og:title", content: "Join as a Merchant — Pavitram India" },
      { property: "og:description", content: "Transparent B2B and B2C partnerships for ethical growth." },
    ],
  }),
  component: () => <OppDetailPage d={{
    slug: "merchant",
    title: "As a Merchant",
    hindi: "व्यापारी के रूप में",
    label: "Merchant",
    Icon: Store,
    intro: "Partner with us to reach a dedicated community customer base and grow your business with transparent partnerships. List products and services across a multi-vendor, multi-location cooperative framework.",
    benefits: [
      "Transparent business partnerships",
      "Multi-vendor, multi-location B2B and B2C framework",
      "Significant income enhancement",
      "Verified buyer community",
    ],
    steps: [
      { title: "Apply", body: "Submit your business profile for verification." },
      { title: "Onboard", body: "List products and services on the network." },
      { title: "Grow", body: "Reach verified members across 15+ states." },
    ],
  }} />,
});
