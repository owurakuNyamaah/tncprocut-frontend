import { useState } from "react";
import api from "./axiosSetup";
import { saveToken } from "./auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    const res = await api.post("/login", { email, password });

    saveToken(res.data.token);

    window.location.href = "/admin";
  };

  return (
    <div className="max-w-md mx-auto mt-20">
      <form onSubmit={handleLogin} className="space-y-4">
        <input
          className="w-full border p-3 rounded"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="w-full border p-3 rounded"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="bg-black text-white w-full py-3 rounded">
          Login
        </button>
      </form>
    </div>
  );
}