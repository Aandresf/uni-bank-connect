import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { loginUser } from "@/lib/api";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      toast({ title: "Faltan campos", description: "Completa email y contraseña." });
      return;
    }

    setLoading(true);
    try {
      const payload = { email, password };
      const res = await loginUser(payload);
      // guardar JWT si viene
      if (res?.data?.jwt) {
        localStorage.setItem("token", res.data.jwt);
      }
      toast({ title: "Acceso correcto", description: res?.message || "Bienvenido" });
      navigate("/dashboard");
    } catch (err: any) {
      toast({ title: "Error", description: err?.info?.message || err.message || "Error al iniciar sesión" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="container mx-auto flex-1 flex items-center justify-center px-4 py-12">
        <Card className="w-full max-w-md p-6">
          <h2 className="text-2xl font-bold mb-4">Acceder</h2>
          <form className="space-y-4" onSubmit={onSubmit}>
            <div>
              <label className="block text-sm font-medium mb-1">Correo electrónico</label>
              <Input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="tucorreo@universidad.edu" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Contraseña</label>
              <Input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="••••••••" />
            </div>
            <div className="flex items-center justify-between">
              <Button type="submit" disabled={loading}>{loading ? "Entrando..." : "Iniciar sesión"}</Button>
              <a href="/register" className="text-sm text-primary-foreground/80 hover:text-primary">Crear cuenta</a>
            </div>
          </form>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
