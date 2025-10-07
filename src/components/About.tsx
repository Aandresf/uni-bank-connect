import { Users, Shield, Smartphone } from "lucide-react";
import bankInfo from "@/lib/bankInfo";

const About = () => {
  const features = [
    {
      icon: Users,
      title: "Para Estudiantes",
      description: "Creada por universitarios, para universitarios",
    },
    {
      icon: Shield,
      title: "100% Seguro",
      description: "Tecnología bancaria de última generación",
    },
    {
      icon: Smartphone,
      title: "Totalmente Digital",
      description: "Maneja tus finanzas desde cualquier lugar",
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

        <div className="grid md:grid-cols-3 gap-8 mt-16">
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
