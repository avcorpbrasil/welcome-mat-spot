import { motion } from "framer-motion";
import logo from "@/assets/nuhaus-logo.png";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="fixed top-0 left-0 right-0 z-50 bg-hero/90 backdrop-blur-md border-b border-hero-muted/10"
    >
      <div className="container flex items-center justify-between h-20">
        <a href="#">
          <img src={logo} alt="Nuhaus Design" className="h-8" />
        </a>
        <div className="hidden md:flex items-center gap-10">
          {["Showroom", "Móveis", "Iluminação", "Quadros"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-hero-muted text-sm tracking-wider uppercase hover:text-hero-foreground transition-colors"
            >
              {link}
            </a>
          ))}
          <a
            href="#contato"
            className="bg-accent text-accent-foreground px-6 py-2.5 rounded text-sm font-medium tracking-wider uppercase hover:opacity-90 transition-opacity"
          >
            Contato
          </a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
