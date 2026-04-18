import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { SocialProof } from "@/components/SocialProof";
import { HowItWorks } from "@/components/HowItWorks";
import { Features } from "@/components/Features";
import { UseCases } from "@/components/UseCases";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { DownloadCTA } from "@/components/DownloadCTA";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "OneMeet | Real Connections, Real Proximity, Real People" },
      {
        name: "description",
        content:
          "OneMeet is a proximity-based professional networking app. Discover verified people physically nearby. Face verified, mutual consent, no fake profiles.",
      },
      { property: "og:title", content: "OneMeet | Real Connections, Real Proximity, Real People" },
      {
        property: "og:description",
        content:
          "Discover and connect with verified professionals nearby. Face verified profiles. Zero fake accounts. Available on iOS and Android.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function Index() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <SocialProof />
      <HowItWorks />
      <Features />
      <UseCases />
      <Testimonials />
      <FAQ />
      <DownloadCTA />
      <Footer />
    </main>
  );
}
