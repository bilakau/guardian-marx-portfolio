import { motion } from "framer-motion";
import { MapPin, ArrowRight, Code2, Sparkles, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const stats = [
  { value: "4+", label: "Tahun Coding" },
  { value: "3+", label: "Projects" },
  { value: "5+", label: "Tech Stack" },
];

const Home = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(0_0%_12%)_0%,hsl(0_0%_7%)_75%)]" />

        <div className="relative z-10 container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 text-sm text-muted-foreground border border-border rounded-full px-4 py-1.5"
              >
                <MapPin size={14} />
                <span>Pematang Siantar, Sumatera Utara</span>
              </motion.div>

              <div>
                <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.9]">
                  <span className="block text-foreground">Guardian Marx</span>
                  <span className="block text-muted-foreground">Christocent</span>
                </h1>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-lg md:text-xl text-muted-foreground mt-6 max-w-lg"
                >
                  Beginner Developer • Web Enthusiast. Membangun pengalaman digital yang menarik dan fungsional sejak
                  2020.
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="flex flex-wrap items-center gap-4"
              >
                <Button
                  asChild
                  size="lg"
                  className="rounded-full bg-foreground text-background hover:bg-foreground/90 font-heading text-sm tracking-wide"
                >
                  <Link to="/projects">
                    View My Work
                    <ArrowRight size={16} className="ml-1" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-full border-border text-foreground hover:bg-accent font-heading text-sm tracking-wide"
                >
                  <Link to="/about">About Me</Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center space-y-1"
              >
                <p className="font-heading text-4xl md:text-5xl font-bold text-foreground">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What I Do - overview cards */}
      <section className="py-20 border-t border-border bg-card/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="text-sm font-heading uppercase tracking-[0.2em] text-muted-foreground mb-2">What I Do</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Bidang Keahlian</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: Monitor,
                title: "Frontend Development",
                desc: "Membangun antarmuka web yang responsif dan interaktif menggunakan HTML, CSS, JavaScript",
              },
              {
                icon: Code2,
                title: "Backend Basics",
                desc: "Memahami dasar-dasar Node.js untuk membangun API sederhana dan logic server-side.",
              },
              {
                icon: Sparkles,
                title: "UI/UX Design",
                desc: "Merancang tampilan yang clean, modern, dan user-friendly dengan perhatian pada detail dan estetika.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="p-8 rounded-2xl bg-card border border-border glow-border hover:bg-accent/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-5 group-hover:bg-secondary transition-colors">
                  <item.icon size={24} className="text-foreground" />
                </div>
                <h3 className="font-heading font-semibold text-foreground text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-border">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto space-y-6"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              Tertarik melihat karya saya?
            </h2>
            <p className="text-muted-foreground">
              Jelajahi project yang sudah saya buat, dari web AI hingga web komik — semua dibuat dengan passion dan
              keinginan untuk terus belajar.
            </p>
            <Button
              asChild
              size="lg"
              className="rounded-full bg-foreground text-background hover:bg-foreground/90 font-heading text-sm tracking-wide"
            >
              <Link to="/projects">
                Lihat Projects <ArrowRight size={16} className="ml-1" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
