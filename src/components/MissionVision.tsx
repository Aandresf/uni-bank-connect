import { Target, Eye } from "lucide-react";
import bankInfo from "@/lib/bankInfo";

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
                  {bankInfo.mission}
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
                  {bankInfo.vision}
                </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
