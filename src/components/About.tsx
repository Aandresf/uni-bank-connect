import { Users, Send, DollarSign, BookOpen, Link2 } from "lucide-react";
import bankInfo from "@/lib/bankInfo";

const About = () => {
  const features = [
    {
      icon: Users,
      title: "Servicio eficiente y de calidad",
      description:
        "Brindar a los estudiantes universitarios un servicio eficiente y de calidad en la gestión de sus recursos financieros, a través de nuestros canales digitales y nuestros puntos de atención presencial.",
    },
    {
      icon: Send,
      title: "Fomento del uso digital",
      description:
        "Fomentar el uso de nuestras plataformas digitales para hacer transferencias entre estudiantes sin comisión, depósitos y retiros en efectivo, ofreciendo herramientas tecnológicas fáciles y seguras.",
    },
    {
      icon: BookOpen,
      title: "Educación financiera",
      description:
        "Promover la educación financiera de los estudiantes universitarios, a través de charlas, talleres y capacitaciones sobre temas como el ahorro, la inversión y el uso responsable del crédito.",
    },
    {
      icon: Link2,
      title: "Alianzas estratégicas",
      description:
        "Establecer alianzas estratégicas con universidades y empresas para ofrecer beneficios exclusivos a nuestros clientes, tales como descuentos en matrículas, becas, prácticas laborales, entre otros.",
    },
    {
      icon: DollarSign,
      title: "Cultura de innovación",
      description:
        "Mantener una cultura de innovación y mejora continua en nuestros procesos, productos y servicios, para estar siempre a la vanguardia de las necesidades de nuestros clientes y del mercado.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Sobre {""}{"Banco Universitario"}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {bankInfo.mission}
          </p>
        </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mt-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="gradient-card rounded-xl p-8 shadow-soft hover:shadow-hover transition-all duration-300 hover:scale-105"
            >
              <div className="w-16 h-16 rounded-full gradient-accent flex items-center justify-center mb-6 shadow-glow">
                <feature.icon className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
