import { motion } from "framer-motion";
import moveisImg from "@/assets/category-moveis.png";
import iluminacaoImg from "@/assets/category-iluminacao.png";
import quadrosImg from "@/assets/category-quadros.png";

const categories = [
  {
    title: "Móveis",
    description: "Sofás, mesas, cadeiras, aparadores e muito mais. Peças exclusivas para cada ambiente.",
    image: moveisImg,
    items: ["Sofás", "Cadeiras", "Mesas de Jantar", "Aparadores", "Buffets"],
  },
  {
    title: "Iluminação",
    description: "Lustres, abajures e luminárias de pé que transformam a atmosfera do seu espaço.",
    image: iluminacaoImg,
    items: ["Lustres", "Abajures", "Luminárias de Pé"],
  },
  {
    title: "Quadros",
    description: "Arte curada para completar a decoração com personalidade e sofisticação.",
    image: quadrosImg,
    items: ["Arte Contemporânea", "Gravuras", "Fotografias"],
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const Categories = () => {
  return (
    <section id="categorias" className="py-28 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-accent tracking-[0.3em] uppercase text-sm mb-4 font-medium">
            Nossas categorias
          </p>
          <h2 className="text-4xl md:text-5xl text-foreground">
            Peças que <span className="italic">inspiram</span>
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {categories.map((cat) => (
            <motion.div
              key={cat.title}
              variants={item}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-lg mb-6 aspect-square">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-hero/30 group-hover:bg-hero/10 transition-colors duration-500" />
              </div>
              <h3 className="text-2xl text-foreground mb-2 font-sans font-semibold">
                {cat.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm mb-4">
                {cat.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((sub) => (
                  <span
                    key={sub}
                    className="text-xs tracking-wider uppercase text-accent border border-accent/30 px-3 py-1 rounded-full"
                  >
                    {sub}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Categories;
