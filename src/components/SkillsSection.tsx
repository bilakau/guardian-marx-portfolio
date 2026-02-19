import { motion } from "framer-motion";

const skills = {
  Frontend: [
    { name: "HTML", level: 90 },
    { name: "JavaScript", level: 75 },
    { name: "React", level: 65 },
    { name: "TypeScript", level: 55 },
    { name: "Tailwind CSS", level: 70 },
  ],
  Backend: [
    { name: "Node.js", level: 50 },
  ],
  Tools: [
    { name: "Git", level: 60 },
    { name: "VS Code", level: 85 },
  ],
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-28 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-heading uppercase tracking-[0.2em] text-muted-foreground mb-2">Tech Stack</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Skills & Technologies</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {Object.entries(skills).map(([category, items], catIdx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIdx * 0.15 }}
              className="space-y-6"
            >
              <h3 className="font-heading text-sm uppercase tracking-[0.15em] text-muted-foreground border-b border-border pb-3">
                {category}
              </h3>
              <div className="space-y-5">
                {items.map((skill, i) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-foreground font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 + i * 0.1, ease: "easeOut" }}
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
  );
};

export default SkillsSection;
