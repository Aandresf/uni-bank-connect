export const API_BASE = import.meta.env.VITE_API_BASE || "";

async function handleResponse(res: Response) {
  const contentType = res.headers.get("content-type") || "";
  let data: any = null;
  if (contentType.includes("application/json")) {
    data = await res.json();
  } else {
    data = await res.text();
  }

  if (!res.ok) {
    const error = new Error(data?.message || res.statusText || "Error de red");
    // @ts-ignore
    error.info = data;
    throw error;
  }

  return data;
}

export async function registerUser(payload: any) {
  // If no API_BASE configured, return a mocked success response for the prototype
  if (!API_BASE) {
    await new Promise((r) => setTimeout(r, 500));
    return {
      message: "Usuario registrado con éxito",
      errors: [],
      data: {
        account_number: "01689296550771014900",
        birth_date: payload.birth_date || null,
        document_number: payload.document_number || null,
        email: payload.email,
        first_name: payload.first_name,
        last_name: payload.last_name,
        phone_number: payload.phone_number || null,
      },
    };
  }

  const res = await fetch(`${API_BASE}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  return handleResponse(res);
}

export async function loginUser(payload: any) {
  // Mock login when no API_BASE is provided (prototype mode)
  if (!API_BASE) {
    await new Promise((r) => setTimeout(r, 400));
    return {
      message: "Usuario logueado con éxito",
      errors: [],
      data: {
        account_number: "01689296550771014900",
        birth_date: "2020-05-18T14:40:04.341364Z",
        document_number: "26141319",
        email: payload.email,
        first_name: "Usuario",
        jwt: "mock-jwt-token",
        last_name: "Ejemplo",
        phone_number: "+000000000",
      },
    };
  }

  const res = await fetch(`${API_BASE}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  return handleResponse(res);
}
