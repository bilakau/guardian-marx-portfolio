import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import projectAi from "@/assets/project-ai.jpg";
import projectStore from "@/assets/project-store.jpg";
import projectComic from "@/assets/project-comic.jpg";

const projects = [
  {
    title: "Web AI",
    desc: "Dibuat menggunakan framework Vanilla JavaScript dengan model SPA (Single Page Application). Ini project pertama saya.",
    url: "https://ai.fmcstore.web.id",
    image: projectAi,
    tech: ["Vanilla JS", "SPA"],
  },
  {
    title: "Web Jualan",
    desc: "Dibuat menggunakan framework Vanilla JavaScript. Ini project kedua saya.",
    url: "https://cloud.fmcstore.web.id",
    image: projectStore,
    tech: ["Vanilla JS"],
  },
  {
    title: "Web Comic",
    desc: "Dibuat menggunakan framework React dengan TypeScript dan kostumisasi berbasis Tailwind CSS.",
    url: "https://fmccomic.my.id",
    image: projectComic,
    tech: ["React", "TypeScript", "Tailwind CSS"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-28 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-heading uppercase tracking-[0.2em] text-muted-foreground mb-2">Portfolio</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Featured Projects</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, i) => (
            <motion.a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group rounded-xl overflow-hidden bg-card border border-border glow-border hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_hsl(0_0%_0%/0.5)] transition-all duration-300"
            >
              {/* Image */}
              <div className="aspect-video overflow-hidden bg-secondary">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-heading font-semibold text-foreground text-lg">{project.title}</h3>
                  <ExternalLink size={16} className="text-muted-foreground group-hover:text-foreground transition-colors" />
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{project.desc}</p>
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
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
