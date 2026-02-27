import { motion } from "framer-motion";
import { MapPin, Clock, Ruler } from "lucide-react";

const features = [
  {
    icon: MapPin,
    title: "Belo Horizonte",
    description: "Localização privilegiada com estacionamento em frente à loja",
  },
  {
    icon: Ruler,
    title: "900m² de Showroom",
    description: "Ambientes decorados com peças exclusivas para você se inspirar",
  },
  {
    icon: Clock,
    title: "Desde 1995",
    description: "Mais de 29 anos ajudando decoradores e clientes exigentes",
  },
];

const About = () => {
  return (
    <section id="sobre" className="py-28 bg-hero">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <p className="text-warm tracking-[0.3em] uppercase text-sm mb-4 font-medium">
            Sobre nós
          </p>
          <h2 className="text-4xl md:text-5xl text-hero-foreground mb-6">
            Tradição em <span className="italic">bom gosto</span>
          </h2>
          <p className="text-hero-muted text-lg leading-relaxed">
            Desde 1995 estamos presentes na cena ajudando os melhores decoradores
            e clientes a terem acesso a produtos selecionados e exclusivos.
            Nossa loja física possui um amplo espaço composta de vários ambientes
            decorados e peças super exclusivas.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-10"
        >
          {features.map((feat) => (
            <div key={feat.title} className="text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full border border-warm/30 mb-5">
                <feat.icon className="w-6 h-6 text-warm" />
              </div>
              <h3 className="text-xl text-hero-foreground mb-2 font-sans font-semibold">
                {feat.title}
              </h3>
              <p className="text-hero-muted text-sm leading-relaxed">
                {feat.description}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
