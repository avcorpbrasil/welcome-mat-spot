const Footer = () => {
  return (
    <footer className="py-12 bg-hero border-t border-hero-muted/20">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-hero-foreground font-serif text-xl">Studio.</p>
        <nav className="flex gap-8">
          {["Work", "Services", "About", "Contact"].map((link) => (
            <a
              key={link}
              href="#"
              className="text-hero-muted text-sm hover:text-hero-foreground transition-colors"
            >
              {link}
            </a>
          ))}
        </nav>
        <p className="text-hero-muted text-sm">© 2026 Studio. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
