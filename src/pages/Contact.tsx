import { motion } from "framer-motion";
import { MessageCircle, Mail, Instagram, Send, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";

const contactMethods = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+62 887-0864-4467",
    desc: "Chat langsung via WhatsApp",
    href: "https://wa.me/628870864467",
    color: "bg-emerald-500/10 text-emerald-400",
  },
  {
    icon: Mail,
    label: "Email",
    value: "guardianmarx@gmail.com",
    desc: "Kirim email kapan saja",
    href: "mailto:guardianmarx@gmail.com",
    color: "bg-blue-500/10 text-blue-400",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@fmcstoree",
    desc: "Follow & DM di Instagram",
    href: "https://instagram.com/fmcstoree",
    color: "bg-pink-500/10 text-pink-400",
  },
];

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleWhatsApp = () => {
    const text = `Halo, saya ${name} (${email}).%0A%0A${message}`;
    window.open(`https://wa.me/628870864467?text=${text}`, "_blank");
  };

  const handleEmail = () => {
    const subject = encodeURIComponent(`Pesan dari ${name}`);
    const body = encodeURIComponent(`Nama: ${name}\nEmail: ${email}\n\n${message}`);
    window.open(`mailto:guardianmarx@gmail.com?subject=${subject}&body=${body}`, "_blank");
  };

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
            <p className="text-sm font-heading uppercase tracking-[0.2em] text-muted-foreground mb-3">Contact</p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Mari terhubung
            </h1>
            <p className="text-muted-foreground mt-4 max-w-lg">
              Punya pertanyaan, ide kolaborasi, atau hanya ingin say hi? Jangan ragu untuk menghubungi saya melalui
              channel di bawah ini.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-20">
            {contactMethods.map((method, i) => (
              <motion.a
                key={method.label}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-border glow-border hover:bg-accent/30 transition-all duration-300 group block"
              >
                <div className={`w-12 h-12 rounded-xl ${method.color} flex items-center justify-center mb-4`}>
                  <method.icon size={24} />
                </div>
                <h3 className="font-heading font-semibold text-foreground text-lg">{method.label}</h3>
                <p className="text-sm text-muted-foreground mt-1">{method.desc}</p>
                <p className="text-sm text-foreground font-medium mt-3 flex items-center gap-1 group-hover:gap-2 transition-all">
                  {method.value} <ArrowRight size={14} />
                </p>
              </motion.a>
            ))}
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <div className="text-center mb-10">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">Kirim Pesan</h2>
              <p className="text-sm text-muted-foreground mt-2">
                Isi form di bawah, lalu pilih kirim via WhatsApp atau Email
              </p>
            </div>

            <div className="space-y-5 p-8 rounded-2xl bg-card border border-border">
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="name">Nama</Label>
                  <Input
                    id="name"
                    placeholder="Nama lengkap"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="email@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Pesan</Label>
                <Textarea
                  id="message"
                  placeholder="Tulis pesan Anda di sini..."
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Button
                  onClick={handleWhatsApp}
                  disabled={!name || !message}
                  className="flex-1 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-heading text-sm"
                >
                  <MessageCircle size={16} className="mr-1" /> Kirim via WhatsApp
                </Button>
                <Button
                  onClick={handleEmail}
                  disabled={!name || !message}
                  variant="outline"
                  className="flex-1 rounded-full border-border text-foreground hover:bg-accent font-heading text-sm"
                >
                  <Send size={16} className="mr-1" /> Kirim via Email
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
