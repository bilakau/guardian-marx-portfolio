import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import projectAi from "@/assets/project-ai.jpg";
import projectStore from "@/assets/project-store.jpg";
import projectComic from "@/assets/project-comic.jpg";

const projects = [
  {
    title: "Web AI",
    subtitle: "Project Pertama",
    desc: "Dibuat menggunakan framework Vanilla JavaScript dengan model SPA (Single Page Application). Project pertama yang menandai awal perjalanan saya dalam web development. Menampilkan integrasi AI dengan antarmuka yang clean dan responsif.",
    url: "https://ai.fmcstore.web.id",
    image: projectAi,
    tech: ["Vanilla JS", "SPA", "HTML", "CSS"],
    highlights: ["Single Page Application", "Clean UI", "AI Integration"],
  },
  {
    title: "Web Jualan",
    subtitle: "Project Kedua",
    desc: "Platform e-commerce sederhana yang dibuat menggunakan Vanilla JavaScript. Menampilkan katalog produk, keranjang belanja, dan antarmuka yang user-friendly untuk pengalaman berbelanja online.",
    url: "https://cloud.fmcstore.web.id",
    image: projectStore,
    tech: ["Vanilla JS", "HTML", "CSS"],
    highlights: ["E-commerce", "Product Catalog", "User Friendly"],
  },
  {
    title: "Web Comic",
    subtitle: "Project Terbaru",
    desc: "Platform baca komik online yang dibangun menggunakan React dengan TypeScript dan Tailwind CSS. Merupakan project paling advanced saya, dengan arsitektur component-based dan styling modern.",
    url: "https://fmccomic.my.id",
    image: projectComic,
    tech: ["React", "TypeScript", "Tailwind CSS"],
    highlights: ["Component-Based", "Type Safe", "Modern Stack"],
  },
];

const Projects = () => {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-20 border-b border-border">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="text-sm font-heading uppercase tracking-[0.2em] text-muted-foreground mb-3">Portfolio</p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Featured Projects
            </h1>
            <p className="text-muted-foreground mt-4 max-w-xl text-[15px] leading-relaxed">
              Kumpulan project yang telah saya bangun. Setiap project adalah cerminan dari proses belajar 
              dan perkembangan skill saya sebagai developer.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects List - stacked cards */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="space-y-16 max-w-5xl mx-auto">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group"
              >
                <div className="grid lg:grid-cols-2 gap-8 items-center rounded-2xl bg-card border border-border glow-border overflow-hidden hover:border-muted-foreground/30 transition-all duration-300">
                  {/* Image */}
                  <div className={`aspect-video lg:aspect-auto lg:h-full overflow-hidden bg-secondary ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-8 lg:p-10 space-y-5">
                    <div>
                      <p className="text-xs font-heading uppercase tracking-[0.15em] text-muted-foreground mb-1">
                        {project.subtitle}
                      </p>
                      <h3 className="font-heading font-bold text-foreground text-2xl md:text-3xl">{project.title}</h3>
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed">{project.desc}</p>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2">
                      {project.highlights.map((h) => (
                        <span
                          key={h}
                          className="text-xs text-muted-foreground bg-accent px-3 py-1 rounded-full"
                        >
                          {h}
                        </span>
                      ))}
                    </div>

                    {/* Tech badges */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {project.tech.map((t) => (
                        <Badge
                          key={t}
                          variant="secondary"
                          className="text-xs font-heading bg-secondary text-secondary-foreground border-0"
                        >
                          {t}
                        </Badge>
                      ))}
                    </div>

                    {/* Link */}
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-heading font-medium text-foreground hover:text-muted-foreground transition-colors pt-2 group/link"
                    >
                      Visit Live Site
                      <ArrowUpRight size={16} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
