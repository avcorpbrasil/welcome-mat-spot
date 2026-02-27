import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-hero flex items-center overflow-hidden">
      {/* Decorative accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
        <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-accent blur-3xl" />
        <div className="absolute bottom-40 right-60 w-64 h-64 rounded-full bg-accent blur-3xl" />
      </div>

      <div className="container relative z-10 py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <p className="text-accent font-medium tracking-widest uppercase text-sm mb-6">
            Design Studio
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl text-hero-foreground leading-[0.95] mb-8">
            We craft digital
            <br />
            <span className="italic text-accent">experiences</span>
            <br />
            that matter.
          </h1>
          <p className="text-hero-muted text-lg md:text-xl max-w-xl mb-12 leading-relaxed">
            A multidisciplinary studio focused on brand, design, and development.
            We help ambitious companies launch faster.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="group inline-flex items-center gap-3 bg-accent text-accent-foreground px-8 py-4 rounded-lg font-medium text-base hover:opacity-90 transition-opacity">
              Start a project
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="inline-flex items-center gap-3 border border-hero-muted/30 text-hero-foreground px-8 py-4 rounded-lg font-medium text-base hover:border-hero-muted/60 transition-colors">
              View our work
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
