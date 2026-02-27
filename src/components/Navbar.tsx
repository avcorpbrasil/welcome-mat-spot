import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="fixed top-0 left-0 right-0 z-50 bg-hero/80 backdrop-blur-md border-b border-hero-muted/10"
    >
      <div className="container flex items-center justify-between h-16">
        <a href="#" className="text-hero-foreground font-serif text-2xl">
          Studio.
        </a>
        <div className="hidden md:flex items-center gap-8">
          {["Work", "Services", "About"].map((link) => (
            <a
              key={link}
              href="#"
              className="text-hero-muted text-sm hover:text-hero-foreground transition-colors"
            >
              {link}
            </a>
          ))}
          <a
            href="#"
            className="bg-accent text-accent-foreground px-5 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Contact
          </a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
