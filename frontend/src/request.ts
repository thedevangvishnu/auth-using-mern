import { RegisterFormType } from "./pages/Register";
import { LoginFormType } from "./pages/Login";

const API_URL = import.meta.env.VITE_APP_API_URL || "";

export const register = async (formData: RegisterFormType) => {
  const response = await fetch(`${API_URL}/api/users/register`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  const responseBody = await response.json();

  if (!response.ok) {
    throw new Error(responseBody.message);
  }
};

export const login = async (formData: LoginFormType) => {
  const response = await fetch(`${API_URL}/api/auth/login`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  const responseBody = await response.json();

  if (!response.ok) {
    throw new Error(responseBody.message);
  }

  return responseBody;
};

export const validateToken = async () => {
  const response = await fetch(`${API_URL}/api/auth/validate-token`, {
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("Not logged in");
  }

  return await response.json();
};
