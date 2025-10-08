import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="container mx-auto flex-1 px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Banca en línea</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <a href="/transactions">
            <Card className="p-4 hover:shadow-lg transition">Resumen de cuenta (saldo, movimientos recientes)</Card>
          </a>
          <a href="/transfer">
            <Card className="p-4 hover:shadow-lg transition">Transferencias rápidas</Card>
          </a>
          <a href="/payment">
            <Card className="p-4 hover:shadow-lg transition">Pagar matrícula / Servicios</Card>
          </a>
        </div>
        <div className="mt-6">
          <a href="/deposit">
            <Card className="p-4 max-w-sm hover:shadow-lg transition">Registrar depósito</Card>
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
