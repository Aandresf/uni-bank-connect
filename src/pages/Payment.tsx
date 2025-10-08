import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Payment = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="container mx-auto flex-1 px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Pago de Matrícula</h1>
        <Card className="p-6 max-w-lg">
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Código de estudiante</label>
              <Input placeholder="Código" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Monto a pagar</label>
              <Input placeholder="0.00" />
            </div>
            <div>
              <Button>Realizar pago</Button>
            </div>
          </form>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default Payment;
