import { CreditCard, PiggyBank, TrendingUp, Wallet, GraduationCap, Gift } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Wallet,
      title: "Transferencias entre estudiantes sin comisión",
      description:
        "Transferencias rápidas, seguras y sin costo entre estudiantes universitarios.",
    },
    {
      icon: CreditCard,
      title: "Depósitos en efectivo (24/7)",
      description:
        "Realiza depósitos en cualquiera de nuestras sucursales de forma sencilla y disponible las 24 horas, los 7 días.",
    },
    {
      icon: PiggyBank,
      title: "Retiros en efectivo",
      description: "Retiros rápidos y seguros en cualquiera de las sucursales del banco.",
    },
    {
      icon: CreditCard,
      title: "Pago de matrícula estudiantil (online)",
      description:
        "Paga tu matrícula de forma rápida y sencilla en línea, disponible 24 horas del día.",
    },
    {
      icon: Gift,
      title: "Cobro de becas estudiantiles",
      description:
        "Accede y cobra tus becas en cualquiera de nuestras sucursales de manera segura y eficiente.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Todo lo que necesitas para gestionar tu dinero de forma inteligente
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-8 shadow-soft hover:shadow-hover transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-14 h-14 rounded-lg gradient-accent flex items-center justify-center mb-6 shadow-glow">
                <service.icon className="w-7 h-7 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">
                {service.title}
              </h3>
              <p className="text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
