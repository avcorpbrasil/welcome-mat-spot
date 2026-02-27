import { motion } from "framer-motion";

const Testimonial = () => {
  return (
    <section className="py-28 bg-hero">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-accent font-medium tracking-widest uppercase text-sm mb-8">
            Testimonial
          </p>
          <blockquote className="text-2xl md:text-4xl text-hero-foreground leading-snug mb-10 italic font-serif">
            "They transformed our vision into a product that exceeded every expectation.
            The attention to detail is unmatched."
          </blockquote>
          <div>
            <p className="text-hero-foreground font-medium">Sarah Chen</p>
            <p className="text-hero-muted text-sm">CEO, Meridian Labs</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonial;
