import type { Metadata } from "next";
import { Cta, PageHero, SectionHead } from "@/components/Blocks";
import { ProjectGallery, Testimonials } from "@/components/Interactive";

export const metadata: Metadata = {
  title: "Projects",
  description: "Homes, offices and plots Harsh Shah has visited for Vastu consultation, and what clients say.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero crumb="Projects" eyebrow="Our work" title="Sites & stories" lead="A look at some of the homes, offices and plots Harsh Shah has visited for Vastu consultation." />

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Gallery" title="Site visits" lead="Tap any photo to view it larger." />
          <ProjectGallery />
        </div>
      </section>

      <section className="section sand" style={{ overflow: "hidden" }}>
        <div className="container">
          <SectionHead center eyebrow="Testimonials" title="What our clients say" />
        </div>
        <Testimonials />
      </section>

      <Cta title="Want your space reviewed next?" />
    </>
  );
}
