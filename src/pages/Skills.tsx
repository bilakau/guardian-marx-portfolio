import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    category: "Frontend",
    description: "Teknologi yang saya gunakan untuk membangun antarmuka pengguna yang interaktif dan responsif.",
    skills: [
      { name: "HTML", level: 60, desc: "Struktur web semantik dan accessible" },
      { name: "CSS", level: 50, desc: "Styling, layouting, dan responsif design" },
      { name: "JavaScript", level: 70, desc: "Logika, DOM manipulation, async programming" },
    ],
  },
  {
    category: "Backend",
    description: "Teknologi server-side yang sedang saya pelajari dan kembangkan.",
    skills: [
      { name: "Node.js", level: 50, desc: "JavaScript runtime untuk server-side" },
      { name: "REST API", level: 45, desc: "Desain dan konsumsi API" },
    ],
  },
  {
    category: "Tools & Others",
    description: "Tools pendukung yang mempermudah workflow development saya.",
    skills: [
      { name: "Git", level: 60, desc: "Version control dan kolaborasi" },
      { name: "VS Code", level: 85, desc: "Code editor utama" },
      { name: "GitHub", level: 65, desc: "Repository hosting dan project management" },
    ],
  },
];

const techBadges = ["HTML5", "CSS3", "JavaScript", "Node.js", "Git", "GitHub", "VS Code", "REST API"];

const Skills = () => {
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
            <p className="text-sm font-heading uppercase tracking-[0.2em] text-muted-foreground mb-3">Tech Stack</p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Skills & Technologies
            </h1>
            <p className="text-muted-foreground mt-4 max-w-xl text-[15px] leading-relaxed">
              Berbagai teknologi yang sudah saya pelajari dan gunakan dalam membangun web applications. Selalu antusias
              untuk mempelajari hal baru.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tech Badges Cloud */}
      <section className="py-14 border-b border-border">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto"
          >
            {techBadges.map((tech, i) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Badge
                  variant="outline"
                  className="px-4 py-2 text-sm font-heading border-border text-muted-foreground hover:text-foreground hover:border-muted-foreground transition-colors cursor-default"
                >
                  {tech}
                </Badge>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Skill Categories with Progress Bars */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="space-y-20 max-w-5xl mx-auto">
            {skillCategories.map((cat, catIdx) => (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              >
                <div className="mb-8">
                  <h2 className="font-heading text-2xl font-bold text-foreground">{cat.category}</h2>
                  <p className="text-sm text-muted-foreground mt-1">{cat.description}</p>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  {cat.skills.map((skill, i) => (
                    <div key={skill.name} className="p-5 rounded-xl bg-card border border-border space-y-3">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-heading font-semibold text-foreground">{skill.name}</p>
                          <p className="text-xs text-muted-foreground mt-0.5">{skill.desc}</p>
                        </div>
                        <span className="text-sm font-heading text-muted-foreground font-medium">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: 0.2 + i * 0.08, ease: "easeOut" }}
                          className="h-full rounded-full bg-gradient-to-r from-muted-foreground to-foreground"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
