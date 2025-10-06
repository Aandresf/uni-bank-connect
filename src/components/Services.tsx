import { CreditCard, PiggyBank, TrendingUp, Wallet, GraduationCap, Gift } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: CreditCard,
      title: "Cuenta Digital",
      description: "Apertura 100% en línea sin requisitos complicados ni costos de apertura.",
    },
    {
      icon: Wallet,
      title: "Tarjeta Virtual",
      description: "Tarjeta de débito virtual instantánea para compras en línea seguras.",
    },
    {
      icon: PiggyBank,
      title: "Ahorro Inteligente",
      description: "Herramientas de ahorro automático diseñadas para estudiantes.",
    },
    {
      icon: TrendingUp,
      title: "Inversiones",
      description: "Invierte desde montos pequeños y aprende sobre finanzas.",
    },
    {
      icon: GraduationCap,
      title: "Educación Financiera",
      description: "Cursos y talleres gratuitos sobre manejo de finanzas personales.",
    },
    {
      icon: Gift,
      title: "Beneficios Estudiantiles",
      description: "Descuentos exclusivos y cashback en tiendas y servicios populares.",
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
