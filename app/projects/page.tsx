import type { Metadata } from "next";
import { IMAGES } from "@/lib/site";
import { MaskLines, Reveal } from "@/components/motion";
import { CtaBanner, PageHero, Projects, Testimonials } from "@/components/sections";

export const metadata: Metadata = {
  title: "Projects & Testimonials",
  description: "Sites Harsh Shah has visited for Vastu consultation, and what clients say about working with Vastupath Energy.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        crumb="Projects"
        label="Our work"
        lines={["Sites", <em key="p">&amp; stories</em>]}
        lede="A look at some of the homes, offices and businesses Harsh Shah has visited for Vastu consultation."
        image={IMAGES.haveli}
        imageAlt="Mubarak Mahal, a haveli in the City Palace courtyard, Jaipur"
      />

      <section className="sec bg-paper">
        <div className="wrap">
          <div className="sec-head split">
            <div style={{ display: "grid", gap: 22 }}>
              <Reveal><span className="label">Site visits</span></Reveal>
              <MaskLines as="h2" lines={["Recent", <em key="r">consultations</em>]} />
            </div>
            <Reveal delay={0.2}><p className="lede">Tap any project to view the photo larger.</p></Reveal>
          </div>
          <Projects />
        </div>
      </section>

      <section className="sec bg-olive">
        <div className="wrap"><Testimonials /></div>
      </section>

      <CtaBanner title={<>Want your space <em>reviewed next?</em></>} />
    </>
  );
}
