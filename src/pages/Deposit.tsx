import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Deposit = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="container mx-auto flex-1 px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Depósitos</h1>
        <Card className="p-6 max-w-lg">
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Monto</label>
              <Input placeholder="0.00" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Referencia</label>
              <Input placeholder="Referencia de depósito" />
            </div>
            <div>
              <Button>Registrar depósito</Button>
            </div>
          </form>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default Deposit;
