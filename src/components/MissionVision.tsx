import { Target, Eye } from "lucide-react";

const MissionVision = () => {
  return (
    <section id="mission" className="py-20 gradient-hero text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center shadow-glow">
                <Target className="w-7 h-7 text-secondary-foreground" />
              </div>
              <h2 className="text-4xl font-bold">Nuestra Misión</h2>
            </div>
            <p className="text-lg text-primary-foreground/90 leading-relaxed">
              Proporcionar servicios financieros innovadores y accesibles que empoderen a los
              estudiantes universitarios para alcanzar sus metas académicas y personales.
              Nos comprometemos a ofrecer soluciones bancarias simples, transparentes y sin tarifas
              ocultas, permitiendo que cada estudiante tenga control total sobre sus finanzas.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center shadow-glow">
                <Eye className="w-7 h-7 text-secondary-foreground" />
              </div>
              <h2 className="text-4xl font-bold">Nuestra Visión</h2>
            </div>
            <p className="text-lg text-primary-foreground/90 leading-relaxed">
              Ser la plataforma bancaria líder para estudiantes universitarios en toda Latinoamérica,
              reconocida por nuestra innovación, compromiso con la educación financiera y por crear
              una comunidad donde los jóvenes puedan desarrollar habilidades financieras sólidas
              que los acompañen durante toda su vida profesional.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
