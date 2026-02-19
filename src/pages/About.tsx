import { motion } from "framer-motion";
import { Code2, GraduationCap, Heart, Calendar, MapPin, BookOpen } from "lucide-react";

const highlights = [
  { icon: Code2, label: "Coding since 2020", desc: "Mulai dari HTML dasar hingga React & TypeScript" },
  { icon: GraduationCap, label: "SMK TJKT Student", desc: "Jurusan Teknik Jaringan Komputer & Telekomunikasi" },
  { icon: Heart, label: "Coding as Hobby", desc: "Mengubah hobi menjadi passion yang tak terhentikan" },
];

const education = [
  {
    school: "SD Negeri Gajing Jaya",
    period: "Sekolah Dasar",
    year: "2014 — 2020",
    desc: "Pendidikan dasar yang membentuk fondasi awal perjalanan akademik. Di sinilah rasa ingin tahu terhadap teknologi pertama kali muncul.",
    icon: BookOpen,
  },
  {
    school: "SMP Negeri 9 Pematang Siantar",
    period: "Sekolah Menengah Pertama",
    year: "2020 — 2023",
    desc: "Masa di mana minat terhadap dunia komputer dan internet mulai berkembang. Mulai belajar coding secara otodidak dan membangun project pertama.",
    icon: Calendar,
  },
  {
    school: "SMK — Jurusan TJKT",
    period: "Sekolah Menengah Kejuruan",
    year: "2023 — Sekarang",
    desc: "Mendalami Teknik Jaringan Komputer dan Telekomunikasi secara formal. Mengasah skill programming, networking, dan pengembangan web secara profesional.",
    icon: GraduationCap,
  },
];

const About = () => {
  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="py-20 border-b border-border">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="text-sm font-heading uppercase tracking-[0.2em] text-muted-foreground mb-3">About Me</p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Mengenal lebih dekat siapa saya
            </h1>
            <div className="flex items-center gap-2 mt-4 text-muted-foreground">
              <MapPin size={16} />
              <span className="text-sm">Pematang Siantar, Sumatera Utara, Indonesia</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-16 items-start">
            {/* Bio Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3 space-y-6"
            >
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                Passionate developer yang terus belajar dan berkembang
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed text-[15px]">
                <p>
                  Hai! Nama saya <span className="text-foreground font-medium">Guardian Marx Christocent</span>. 
                  Saya adalah seorang developer pemula yang memiliki semangat tinggi dalam dunia pengembangan web. 
                  Perjalanan saya dimulai pada tahun 2020, ketika saya pertama kali berkenalan dengan HTML dan CSS.
                </p>
                <p>
                  Sejak saat itu, rasa ingin tahu saya terus berkembang. Saya mulai mempelajari JavaScript, 
                  kemudian melangkah ke React dan TypeScript. Setiap hari adalah kesempatan baru untuk belajar 
                  sesuatu yang menarik di dunia programming.
                </p>
                <p>
                  Saat ini, saya adalah siswa SMK jurusan Teknik Jaringan Komputer dan Telekomunikasi (TJKT). 
                  Di sekolah, saya mempelajari networking dan infrastruktur IT, sementara di waktu luang saya 
                  terus mengasah kemampuan web development secara otodidak.
                </p>
                <p>
                  Misi saya sederhana: terus belajar, terus membangun, dan terus berbagi. 
                  Saya percaya bahwa setiap project — sekecil apapun — adalah langkah menuju developer yang lebih baik.
                </p>
              </div>
            </motion.div>

            {/* Highlight Cards */}
            <div className="lg:col-span-2 space-y-4">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border glow-border hover:bg-accent/30 transition-colors group"
                >
                  <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-accent flex items-center justify-center group-hover:bg-secondary transition-colors mt-0.5">
                    <item.icon size={20} className="text-foreground" />
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-foreground text-sm">{item.label}</p>
                    <p className="text-sm text-muted-foreground mt-0.5">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Timeline */}
      <section className="py-20 border-t border-border bg-card/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-sm font-heading uppercase tracking-[0.2em] text-muted-foreground mb-2">Education</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Riwayat Pendidikan</h2>
            <p className="text-muted-foreground mt-3 max-w-lg mx-auto text-sm">
              Perjalanan pendidikan yang membentuk saya menjadi developer hari ini
            </p>
          </motion.div>

          <div className="relative max-w-3xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-[23px] md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-border" />

            <div className="space-y-10">
              {education.map((edu, i) => (
                <motion.div
                  key={edu.school}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className={`relative pl-14 md:pl-0 md:w-1/2 ${
                    i % 2 === 0 ? "md:pr-12 md:text-right md:ml-0" : "md:pl-12 md:ml-auto"
                  }`}
                >
                  {/* Dot */}
                  <div className={`absolute top-2 left-[14px] md:left-auto ${
                    i % 2 === 0 ? "md:right-[-9px]" : "md:left-[-9px]"
                  } w-[18px] h-[18px] rounded-full border-2 border-muted-foreground bg-background z-10`}>
                    <div className="w-2 h-2 rounded-full bg-muted-foreground absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                  </div>

                  <div className="p-6 rounded-xl bg-card border border-border glow-border">
                    <div className="flex items-center gap-2 mb-2 justify-start md:justify-inherit">
                      <edu.icon size={16} className="text-muted-foreground" />
                      <span className="text-xs uppercase tracking-wider text-muted-foreground font-heading">
                        {edu.year}
                      </span>
                    </div>
                    <h3 className="font-heading font-semibold text-foreground text-lg">{edu.school}</h3>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mt-0.5 mb-2">{edu.period}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{edu.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
