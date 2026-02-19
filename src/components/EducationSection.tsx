import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
  {
    school: "SD Negeri Gajing Jaya",
    period: "Sekolah Dasar",
    desc: "Pendidikan dasar — fondasi awal perjalanan akademik.",
  },
  {
    school: "SMP Negeri 9 Pematang Siantar",
    period: "Sekolah Menengah Pertama",
    desc: "Mengembangkan minat dalam teknologi dan komputer.",
  },
  {
    school: "SMK — TJKT",
    period: "Sekolah Menengah Kejuruan",
    desc: "Jurusan Teknik Jaringan Komputer dan Telekomunikasi. Mendalami pemrograman dan pengembangan web.",
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-28 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-heading uppercase tracking-[0.2em] text-muted-foreground mb-2">Background</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Education Timeline</h2>
        </motion.div>

        <div className="relative max-w-2xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-[23px] top-0 bottom-0 w-px bg-border" />

          <div className="space-y-12">
            {education.map((edu, i) => (
              <motion.div
                key={edu.school}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative pl-14"
              >
                {/* Dot */}
                <div className="absolute left-[14px] top-1 w-[18px] h-[18px] rounded-full border-2 border-muted-foreground bg-background flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-muted-foreground" />
                </div>

                <div className="p-5 rounded-xl bg-card border border-border glow-border">
                  <div className="flex items-center gap-2 mb-1">
                    <GraduationCap size={16} className="text-muted-foreground" />
                    <span className="text-xs uppercase tracking-wider text-muted-foreground font-heading">
                      {edu.period}
                    </span>
                  </div>
                  <h3 className="font-heading font-semibold text-foreground text-lg">{edu.school}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{edu.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
