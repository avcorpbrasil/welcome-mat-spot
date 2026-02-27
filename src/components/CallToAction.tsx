import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-28 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl text-foreground mb-6">
            Ready to <span className="italic text-accent">start</span>?
          </h2>
          <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
            Let's build something extraordinary together. Tell us about your next project.
          </p>
          <button className="group inline-flex items-center gap-3 bg-primary text-primary-foreground px-10 py-4 rounded-lg font-medium text-base hover:opacity-90 transition-opacity">
            Get in touch
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
