import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";

const Transactions = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="container mx-auto flex-1 px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Movimientos</h1>
        <div className="grid grid-cols-1 gap-4">
          <Card className="p-4">Movimiento 1 - -100.00 - 2025-10-07</Card>
          <Card className="p-4">Movimiento 2 - +250.00 - 2025-10-01</Card>
          <Card className="p-4">Movimiento 3 - -50.00 - 2025-09-28</Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Transactions;
