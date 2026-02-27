import { motion } from "framer-motion";
import heroImg from "@/assets/hero-showroom.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Showroom Nuhaus"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-hero/70" />
      </div>

      <div className="container relative z-10 py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <p className="text-warm tracking-[0.3em] uppercase text-sm mb-6 font-medium">
            Desde 1995 · Belo Horizonte
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl text-hero-foreground leading-[0.95] mb-8">
            Tradição em
            <br />
            <span className="italic text-warm-light">bom gosto</span>
          </h1>
          <p className="text-hero-muted text-lg md:text-xl max-w-xl mb-12 leading-relaxed">
            Produtos selecionados e exclusivos para transformar seus ambientes.
            Showroom com 900m² de inspiração.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#categorias"
              className="inline-flex items-center justify-center gap-3 bg-accent text-accent-foreground px-8 py-4 rounded text-sm font-medium tracking-wider uppercase hover:opacity-90 transition-opacity"
            >
              Explorar coleção
            </a>
            <a
              href="#sobre"
              className="inline-flex items-center justify-center gap-3 border border-hero-muted/30 text-hero-foreground px-8 py-4 rounded text-sm font-medium tracking-wider uppercase hover:border-hero-muted/60 transition-colors"
            >
              Conheça a Nuhaus
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
