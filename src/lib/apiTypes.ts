export interface RegisterRequest {
  first_name: string;
  last_name: string;
  document_number?: string;
  birth_date?: string; // ISO8601
  phone_number?: string;
  email: string;
  password: string;
}

export interface RegisterResponse {
  message: string;
  errors: any[];
  data: {
    account_number: string;
    birth_date?: string;
    document_number?: string;
    email: string;
    first_name: string;
    last_name: string;
    phone_number?: string;
  };
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  message: string;
  errors: any[];
  data: {
    account_number: string;
    birth_date?: string;
    document_number?: string;
    email: string;
    first_name: string;
    jwt?: string;
    last_name: string;
    phone_number?: string;
  };
}
