import { motion } from "framer-motion";
import { Instagram, Facebook, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contato" className="py-28 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto"
        >
          <p className="text-accent tracking-[0.3em] uppercase text-sm mb-4 font-medium">
            Fale conosco
          </p>
          <h2 className="text-4xl md:text-5xl text-foreground mb-6">
            Visite nosso <span className="italic">showroom</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-12 leading-relaxed">
            Venha conhecer nosso espaço de 900m² com ambientes decorados e peças exclusivas.
            Estacionamento gratuito em frente à loja.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <a
              href="https://www.instagram.com/nuhaus/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded text-sm font-medium tracking-wider uppercase hover:opacity-90 transition-opacity"
            >
              <Instagram className="w-5 h-5" />
              Instagram
            </a>
            <a
              href="https://www.facebook.com/nuhaus.design"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 border border-border text-foreground px-8 py-4 rounded text-sm font-medium tracking-wider uppercase hover:bg-muted transition-colors"
            >
              <Facebook className="w-5 h-5" />
              Facebook
            </a>
          </div>

          <div className="inline-flex items-center gap-2 text-muted-foreground">
            <Phone className="w-4 h-4" />
            <span className="text-sm">Atendimento presencial e online</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
