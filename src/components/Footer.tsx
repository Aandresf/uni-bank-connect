import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    productos: [
      { label: "Cuenta Digital", href: "#" },
      { label: "Tarjeta Virtual", href: "#" },
      { label: "Ahorro", href: "#" },
      { label: "Inversiones", href: "#" },
    ],
    ayuda: [
      { label: "Centro de Ayuda", href: "#" },
      { label: "Preguntas Frecuentes", href: "#" },
      { label: "Términos y Condiciones", href: "#" },
      { label: "Privacidad", href: "#" },
    ],
    empresa: [
      { label: "Sobre Nosotros", href: "#about" },
      { label: "Misión y Visión", href: "#mission" },
      { label: "Trabaja con Nosotros", href: "#" },
      { label: "Blog", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="gradient-hero text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">UniBanca</h3>
            <p className="text-primary-foreground/80 mb-6">
              La banca digital diseñada para estudiantes universitarios.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:shadow-glow transition-all duration-300 hover:scale-110"
                >
                  <social.icon className="w-5 h-5 text-secondary-foreground" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Productos</h4>
            <ul className="space-y-2">
              {footerLinks.productos.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Ayuda</h4>
            <ul className="space-y-2">
              {footerLinks.ayuda.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2">
              {footerLinks.empresa.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/80 text-sm">
              © {currentYear} UniBanca. Todos los derechos reservados.
            </p>
            <p className="text-primary-foreground/80 text-sm">
              Hecho con ❤️ para estudiantes
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
