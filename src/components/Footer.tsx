import logo from "@/assets/nuhaus-logo-2.png";

const Footer = () => {
  return (
    <footer className="py-12 bg-hero border-t border-hero-muted/15">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
        <img src={logo} alt="Nuhaus Design" className="h-6 opacity-80" />
        <nav className="flex gap-8">
          {["Showroom", "Móveis", "Iluminação", "Quadros", "Contato"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-hero-muted text-xs tracking-wider uppercase hover:text-hero-foreground transition-colors"
            >
              {link}
            </a>
          ))}
        </nav>
        <p className="text-hero-muted text-xs">
          © 2026 Nuhaus Design. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
