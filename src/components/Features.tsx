import { motion } from "framer-motion";
import { Layers, Palette, Zap, Globe } from "lucide-react";

const features = [
  {
    icon: Palette,
    title: "Brand Identity",
    description: "From strategy to visual systems, we define brands that resonate and endure.",
  },
  {
    icon: Layers,
    title: "Product Design",
    description: "User-centered interfaces that are intuitive, accessible, and beautiful.",
  },
  {
    icon: Zap,
    title: "Development",
    description: "High-performance websites and apps built with modern technologies.",
  },
  {
    icon: Globe,
    title: "Digital Strategy",
    description: "Data-driven insights to grow your audience and maximize impact.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Features = () => {
  return (
    <section className="py-28 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">
            What we do
          </p>
          <h2 className="text-4xl md:text-5xl text-foreground max-w-lg">
            Services built for <span className="italic">growth</span>
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={item}
              className="group p-8 rounded-xl bg-card border border-border hover:border-accent/40 transition-colors"
            >
              <feature.icon className="w-8 h-8 text-accent mb-6" />
              <h3 className="text-xl text-foreground mb-3 font-sans font-semibold">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
