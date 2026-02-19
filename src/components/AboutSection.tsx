import { motion } from "framer-motion";
import { Code2, GraduationCap, Heart } from "lucide-react";

const highlights = [
  { icon: Code2, label: "Coding since 2020", desc: "4+ years of experience" },
  { icon: GraduationCap, label: "SMK TJKT Student", desc: "Computer Network Engineering" },
  { icon: Heart, label: "Coding as Hobby", desc: "Passionate about web dev" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-28 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-16 items-start"
        >
          {/* Left - Bio */}
          <div className="space-y-6">
            <div>
              <p className="text-sm font-heading uppercase tracking-[0.2em] text-muted-foreground mb-2">About Me</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                Crafting digital experiences with passion
              </h2>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Hi! I'm an enthusiastic beginner developer. My journey revolves around creating 
                intuitive and visually engaging user interfaces that bring ideas to life on the web.
              </p>
              <p>
                Currently, I am a Vocational High School student majoring in Computer Science 
                (Telecommunications and Computer Network Engineering or TJKT). I started coding 
                in 2020 as a hobby, and it has since become my biggest passion.
              </p>
            </div>
          </div>

          {/* Right - Highlight cards */}
          <div className="space-y-4">
            {highlights.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-center gap-4 p-5 rounded-xl bg-card border border-border glow-border hover:bg-accent/50 transition-colors group"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent flex items-center justify-center group-hover:bg-secondary transition-colors">
                  <item.icon size={22} className="text-foreground" />
                </div>
                <div>
                  <p className="font-heading font-semibold text-foreground">{item.label}</p>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
