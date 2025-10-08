import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { registerUser } from "@/lib/api";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [documentNumber, setDocumentNumber] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstName || !lastName || !email || !password) {
      toast({ title: "Faltan campos", description: "Completa los campos obligatorios." });
      return;
    }

    setLoading(true);
    try {
      const payload = {
        first_name: firstName,
        last_name: lastName,
        document_number: documentNumber,
        birth_date: birthDate,
        phone_number: phoneNumber,
        email,
        password,
      };

      const res = await registerUser(payload);
      toast({ title: "Registro exitoso", description: res?.message || "Usuario creado" });
      navigate("/login");
    } catch (err: any) {
      toast({ title: "Error", description: err?.info?.message || err.message || "Error al registrar" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="container mx-auto flex-1 flex items-center justify-center px-4 pt-24 pb-6">
        <Card className="w-full max-w-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Crear cuenta</h2>
          <form className="space-y-4" onSubmit={onSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Nombre</label>
                <Input value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="Nombre" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Apellido</label>
                <Input value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Apellido" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Documento</label>
              <Input value={documentNumber} onChange={(e) => setDocumentNumber(e.target.value)} placeholder="Número de documento" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Fecha de nacimiento</label>
              <Input value={birthDate} onChange={(e) => setBirthDate(e.target.value)} type="date" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Teléfono</label>
              <Input value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder="+58..." />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Correo electrónico</label>
              <Input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="tucorreo@universidad.edu" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Contraseña</label>
              <Input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Crea una contraseña segura" />
            </div>
            <div>
              <Button type="submit" disabled={loading}>{loading ? "Creando..." : "Crear cuenta"}</Button>
            </div>
          </form>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default Register;
